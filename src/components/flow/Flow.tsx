import React from 'react';
import {
    Background,
    Controls,
    MiniMap,
    ReactFlow,
    ReactFlowProps,
} from "@xyflow/react";

import '@xyflow/react/dist/style.css';

export type FlowProps = {
    flowProps?: Omit<ReactFlowProps, "fitView" | "colorMode">,
    style?: React.CSSProperties,
    bg?: boolean,
    mm?: boolean,
    co?: boolean,
};

const show = (bool: boolean, part: React.ReactNode) => {
    if (!bool) return <></>
    return part;
}

export default function Flow({ flowProps, style, bg, mm, co }: FlowProps) {
    const defaultStyle: React.CSSProperties = { width: "100%", height: "50ex", resize: "vertical" };
    const newStyle: React.CSSProperties = {...defaultStyle, ...style };
    const showBG = bg ?? false;
    const showMM = mm ?? false;
    const showCO = co ?? true;

    return <div style={newStyle}>
        <ReactFlow {...flowProps} colorMode='dark' fitView
        >
            {show(showBG, <Background />)}
            {show(showMM, <MiniMap />)}
            {show(showCO, <Controls />)}
        </ReactFlow>
    </div>
}