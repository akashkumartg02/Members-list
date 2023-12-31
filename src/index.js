import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CmdKConfigurer } from '@cmdk/stage-toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CmdKConfigurer token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjIiLCJ1c2VySWQiOiIyIiwiZG9tYWluIjoiaHR0cHM6Ly9tZW1iZXJzLWFrLm5ldGxpZnkuYXBwLyIsImlhdCI6MTY5Mjc4Mzg2MywiZXhwIjoxNjkzMzg4NjYzfQ.zGlFatojpNNYptsUqCmDc4lo40wnCQ1Ieu5GbKAji-U'>
      <App />
    </CmdKConfigurer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
