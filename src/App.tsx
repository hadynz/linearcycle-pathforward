import { ReactFlowProvider } from 'reactflow';

import StepsView from './StepsView';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlowProvider>
        <StepsView />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
