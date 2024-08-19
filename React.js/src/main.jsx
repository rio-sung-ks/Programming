import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//     <div><h1>main.jsx 돌아가는 중</h1></div>
// );