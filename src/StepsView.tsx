import { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  DefaultEdgeOptions,
  Edge,
  FitViewOptions,
  Node,
  NodeTypes,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from 'reactflow';

import TextUpdaterNode, { TextUpdaterNodeData } from './Nodes/TextUpdaterNode';

const nodeTypes: NodeTypes = { textUpdater: TextUpdaterNode };

const initialNodes: Node[] = [
  {
    id: '1',
    data: { title: 'Linear cycles', description: 'Linear cycles' },
    position: { x: 5, y: 5 },
    type: 'textUpdater',
  } as Node<TextUpdaterNodeData>,
  { id: '2', data: { label: 'World Changing Business' }, position: { x: 5, y: 100 } },
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

function StepsView() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      defaultEdgeOptions={defaultEdgeOptions}
      edges={edges}
      fitView
      fitViewOptions={fitViewOptions}
      nodeTypes={nodeTypes}
      nodes={nodes}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
      proOptions={{ hideAttribution: true }}
    />
  );
}

export default StepsView;
