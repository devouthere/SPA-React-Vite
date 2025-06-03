// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// O ponto de entrada da aplicação React.
// Envolve o componente App com BrowserRouter para habilitar o roteamento.
// React.StrictMode é usado para identificar potenciais problemas na aplicação.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
