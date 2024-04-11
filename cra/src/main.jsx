//React strict mode is because there is a runtime check. React does the rendering twice instead of once.

import App from './App.jsx';
// import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import React from 'react';
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
  <App />
  </React.StrictMode>);

//npx canvas confetti was installed to make the confetti effect.