import { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Connection,
  ConnectionLineType,
  Edge,
  MarkerType,
  Node,
  Position,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import dagre from 'dagre';

import { initialEdges, initialNodes } from './node-edges';

const nodeSize = { width: 172, height: 36 };

type LayedOutElements = {
  nodes: Node[];
  edges: Edge[];
};

const getLayoutedElements = (nodes: Node[], edges: Edge[]): LayedOutElements => {
  const g = new dagre.graphlib.Graph();

  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: 'LR' });

  nodes.forEach((node) => {
    g.setNode(node.id, { ...nodeSize });
  });

  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  dagre.layout(g);

  nodes.forEach((node) => {
    const nodeWithPosition = g.node(node.id);
    node.targetPosition = 'left' as Position;
    node.sourcePosition = 'right' as Position;
    node.position = {
      x: nodeWithPosition.x - nodeSize.width,
      y: nodeWithPosition.y - nodeSize.height,
    };

    return node;
  });

  return {
    nodes,
    edges: edges.map((edge) => ({
      ...edge,
      type: 'smoothstep',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#FF0072',
      },
      style: {
        strokeWidth: 2,
        stroke: '#FF0072',
      },
    })),
  };
};

const { nodes: layedOutNodes, edges: layedOutEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

function StepsView() {
  const [nodes, , onNodesChange] = useNodesState(layedOutNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layedOutEdges);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edge) => addEdge({ ...params, type: ConnectionLineType.SmoothStep }, edge)),
    [setEdges]
  );

  return (
    <ReactFlow
      edges={edges}
      fitView
      nodes={nodes}
      nodesConnectable={false}
      nodesDraggable={false}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
      proOptions={{ hideAttribution: true }}
    />
  );
}

export default StepsView;
