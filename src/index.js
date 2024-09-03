import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // ou o caminho para o seu CSS global

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);