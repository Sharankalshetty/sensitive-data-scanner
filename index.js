import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../front_end/app.js';
import './index.css';

// Render the App component inside the root element in index.ejs
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);