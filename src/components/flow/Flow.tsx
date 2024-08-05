import React from 'react';
import {
    Background,
    Controls,
    MiniMap,
    ReactFlow,
    ReactFlowProps,
} from "@xyflow/react";

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
    const newStyle = style ?? { width: "100%", height: "50ex", resize: "vertical" };
    const showBG = bg ?? true;
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