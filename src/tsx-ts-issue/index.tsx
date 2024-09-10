import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootEl = document.getElementById('root');

if (!rootEl) throw new Error('Incorrect id for React App');

ReactDOM.createRoot(rootEl).render(<App />);