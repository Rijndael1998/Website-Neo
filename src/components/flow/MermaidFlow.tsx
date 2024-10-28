import dagre from '@dagrejs/dagre';
import Flow, { FlowProps } from "./Flow";

export type MermaidFlowProps = {
    mermaidFlow: string,
    style: FlowProps["style"],
}

type node = {
    id: string;
    desc?: string;
};

type edge = {
    id1: string;
    id2: string;
    leftArrow: boolean;
    dotted: boolean;
    rightArrow: boolean;
    desc?: string;
};

// direction shouldn't be a string
function getLayoutedElements(nodes: node[], edges: edge[], direction: string = 'TB') {
    const edgeType = 'smoothstep';
    const nodeWidth = 200;
    const nodeHeight = 36;

    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node) => {
        // checks for new lines and adds height as needed
        const lines = ((node?.desc ?? "").match(/\n/g) || []).length + 1;
        return dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight * lines});
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.id1, edge.id2);
    });

    dagre.layout(dagreGraph);

    const newNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        const newNode = {
            id: node.id,
            data: { label: node.desc },
            // We are shifting the dagre node position (anchor=center center) to the top left
            // so it matches the React Flow node anchor point (top left).
            position: {
                x: nodeWithPosition.x - nodeWidth / 2,
                y: nodeWithPosition.y - nodeHeight / 2,
            },
        };

        return newNode;
    });

    const newEdges = edges.map((edge) => {
        return {
            id: `${edge.id1}:${edge.id2}`,
            source: edge.id1,
            target: edge.id2,
            type: edgeType,
            animated: true,
        }
    });

    return { nodes: newNodes, edges: newEdges };
};


const nodeRegex = RegExp(/([^\ \[]+)\[+([^\]]+)\]+/g);
// this could be better but it's fine for now.
const edgeRegex =
    RegExp(/(?<id1>[0-9A-Za-z]+)\ ?(?<la>\<?)\-(?<dot>\.?)\-(?<ra>\>?)\ ?((?<id2>[0-9A-Za-z]+)|(\|(?<desc>[^\|]+)\|\ ?(?<id3>[0-9A-Za-z]+)))/g);

export default function MermaidFlow({ mermaidFlow, style }: MermaidFlowProps) {
    const rawNodes: node[] = [];
    const rawEdges = [];

    for (const match of mermaidFlow.matchAll(nodeRegex)) {
        const id = match.at(1);
        const desc = match.at(2);
        if (!id)
            continue;

        rawNodes.push({ id, desc });
    }

    for (const match of mermaidFlow.matchAll(edgeRegex)) {
        const id1 = match.groups?.id1;
        const id2 = match.groups?.id2 ?? match.groups?.id3;
        const leftArrow = match.groups?.la == "<";
        const dotted = match.groups?.dot == ".";
        const rightArrow = match.groups?.ra == ">";
        const desc = match.groups?.desc;

        if (!id1 || !id2)
            continue;

        rawEdges.push({
            id1,
            id2,
            leftArrow,
            dotted,
            rightArrow,
            desc,
        });
    }

    // console.log(rawNodes)
    // console.log(rawEdges)

    // generate the react flow from the edges
    const layout = getLayoutedElements(rawNodes, rawEdges);

    return <Flow flowProps={{ nodes: layout.nodes, edges: layout.edges }} style={style} />
}