import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import 'assets/style/index.css';
import App from './App';

// React 18버전-> ReactDom => createRoot로 수정됨
const root = createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)

reportWebVitals();