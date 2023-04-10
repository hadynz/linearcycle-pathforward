import { useCallback, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  Connection,
  ConnectionLineType,
  NodeTypes,
  useEdgesState,
  useNodesState,
} from 'reactflow';

import { StepCardNode } from '../../components/StepCard';

import { getLayedOutElements } from './getLayedOutElements';
import { initialEdges, initialNodes } from './node-edges';

const { nodes: layedOutNodes, edges: layedOutEdges } = getLayedOutElements(
  initialNodes,
  initialEdges
);

function StepsView() {
  const [nodes, , onNodesChange] = useNodesState(layedOutNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layedOutEdges);

  const nodeTypes: NodeTypes = useMemo(() => ({ default: StepCardNode }), []);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edge) => addEdge({ ...params, type: ConnectionLineType.SmoothStep }, edge)),
    [setEdges]
  );

  return (
    <ReactFlow
      edges={edges}
      fitView={true}
      nodeTypes={nodeTypes}
      nodes={nodes}
      nodesConnectable={false}
      nodesDraggable={true}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
      proOptions={{ hideAttribution: true }}
    />
  );
}

export default StepsView;
