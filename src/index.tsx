import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Strict mode will call component render twice in dev mode
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
reportWebVitals();
