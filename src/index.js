import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles.css';
import {BrowserRouter} from "react-router-dom"

//import About from './Components/About/About';
//import Hero from './Components/Hero/Hero';
//import Navbar from './Components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <About/> */}
    {/* <Hero/> */}
    {/* <Navbar/> */}
  </React.StrictMode>
);

