import React from 'react';
import "./bootstrap.min.css"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./components/Utils/ScrollToTop"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ScrollToTop/>
    <App />
  </BrowserRouter> 
);

