import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/public-sans';

import App from './app/App';

import 'reactflow/dist/base.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
