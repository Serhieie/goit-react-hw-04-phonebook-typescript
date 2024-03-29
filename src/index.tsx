import { App } from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error('Root element with id "root" not found in the document.');
}
