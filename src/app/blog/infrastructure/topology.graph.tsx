import React from 'react';
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProps,
} from "@xyflow/react";

import '@xyflow/react/dist/style.css';

const initialNodes: ReactFlowProps["nodes"] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1->2', source: '1', target: '2', animated: true }];

export default function layoutFlow() {
  return (
    <div style={{ width: "100%", height: "50ex", resize: "vertical" }}>
      <ReactFlow colorMode='dark' nodes={initialNodes} edges={initialEdges} fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  )
}