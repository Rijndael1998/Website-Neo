import React from 'react';
import {
  ReactFlowProps,
} from "@xyflow/react";

import '@xyflow/react/dist/style.css';
import Flow from '@/components/flow/Flow';

const initialNodes: ReactFlowProps["nodes"] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1->2', source: '1', target: '2', animated: true }];

export default function layoutFlow() {
  return <Flow flowProps={{nodes: initialNodes, edges: initialEdges}} />
}