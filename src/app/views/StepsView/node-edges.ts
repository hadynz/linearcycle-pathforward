import { Edge, Node } from 'reactflow';

type InitialData = {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
};

const initialData: InitialData[] = [
  {
    id: 'kickoff',
    title: 'Kick Off',
    description: 'Kick off the project with a kickoff meeting',
    tags: ['meeting', 'project'],
  },
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'Discover the problem and the solution',
    tags: ['meeting'],
  },
  {
    id: 'design-explore',
    title: 'Design Exploration',
    tags: ['discovery'],
  },
  {
    id: 'eng-explore',
    title: 'Engineering Exploration',
    tags: ['discovery'],
  },
  {
    id: 'build',
    title: 'Build',
  },
  {
    id: 'impact',
    title: 'Measure Impact',
  },
];

export const initialNodes: Node[] = initialData.map((d) => {
  const { id, ...data } = d;
  return {
    id,
    position: { x: 0, y: 0 },
    data: { ...data },
  };
});

export const initialEdges: Edge[] = [
  { id: 'e12', source: 'kickoff', target: 'discovery' },
  { id: 'e13', source: 'discovery', target: 'design-explore' },
  { id: 'e22a', source: 'discovery', target: 'eng-explore' },
  { id: 'e22b', source: 'design-explore', target: 'build' },
  { id: 'e22c', source: 'eng-explore', target: 'build' },
  { id: 'e2c2d', source: 'build', target: 'impact' },
];
