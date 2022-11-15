import { useEffect, useMemo, useRef, useState } from "react";
import { GraphContainerProps } from "../typings/GraphProps";
import { ValueStatus } from "mendix";
import { createApp } from "vue";

import vueapp from "./vue-app/my-project.umd.min.js";
import { useMount } from "ahooks";

export default function (props: GraphContainerProps) {
    const value = useMemo(() => {
        if (props.attribute && props.attribute.status === ValueStatus.Available) {
            return props.attribute.value;
        }
    }, [props.attribute]);

    const ref = useRef<any>();
    const [vm, setVm] = useState<any>();

    useMount(() => {
        const eg = createApp({
            methods: {
                showCityName: (e: any) => {
                    console.log(e);
                    props.actionClick?.execute();
                },
                changeName(name: string) {
                    this.name = name;
                }
            },
            expose: ["changeName"],
            components: {
                MyVueApp: vueapp
            },
            data: (vm: any) => {
                console.log(vm);
                return {
                    name: "default name"
                };
            },
            template: '<my-vue-app :name="name" v-on:showCityName="showCityName"></my-vue-app>'
        });
        setVm(eg.mount(ref.current));
    });

    useEffect(() => {
        if (value != undefined) {
            vm.changeName(value);
        }
    }, [vm, value]);

    return <div ref={ref}></div>;
}
