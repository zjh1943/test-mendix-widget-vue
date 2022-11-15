# mendix(vue) 前端组件开发模板库

# 开发 vue widget 库

## 示例

[https://github.com/engalar/mendix-widget-vue-app](https://github.com/engalar/mendix-widget-vue-app)

## 构建

```cmd
npm run build:lib
```

## 复制`dist\my-project.umd.min.js`进 mendix 组件开发项目 `src\vue-app` 目录

# 准备测试应用

-   复制`tests\testProject\deployment\web\index-example.html` 到 `tests\testProject\theme\web\index.html`
-   第一步 单独加载 vue

```html
<! -- 第一步 单独加载vue -->
<script src="https://unpkg.com/vue@3.2.37/dist/vue.global.js"></script>
```

-   第二步 把 vue 模块交给 mendix 管理

```html
<script>
    //第二步 把vue模块交给mendix管理
    mendix.lang.registerInDojo("vue", Vue);
</script>
```

-   最终效果见文件（代码出现的位置不能错）`dummy\theme\web\index.html`

# 开发组件
