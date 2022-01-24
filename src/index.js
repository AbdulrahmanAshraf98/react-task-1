import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import About from "./about/index"
import Services from "./services-/index"
ReactDOM.render(
  <React.StrictMode>
    <About/>
    <Services/>
  </React.StrictMode>,
  document.getElementById('root')
);

