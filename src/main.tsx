import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/public-sans';

import App from './App';

import './index.css';
import 'reactflow/dist/style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
