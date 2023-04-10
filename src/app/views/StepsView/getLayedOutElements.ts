import { Edge, MarkerType, Node, Position } from 'reactflow';
import dagre from 'dagre';

const nodeSize = { width: 355, height: 150 };

const styleEdge = (edge: Edge): Edge => {
  return {
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
  };
};

export type LayedOutElements = {
  nodes: Node[];
  edges: Edge[];
};

export const getLayedOutElements = (nodes: Node[], edges: Edge[]): LayedOutElements => {
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
    edges: edges.map(styleEdge),
  };
};
