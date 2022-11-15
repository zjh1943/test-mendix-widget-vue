/**
 * This file was generated from Graph.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface GraphContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    attribute?: EditableValue<string>;
    actionClick?: ActionValue;
}

export interface GraphPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    attribute: string;
    actionClick: {} | null;
}
