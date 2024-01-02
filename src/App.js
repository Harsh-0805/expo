import React from "react";
import {BrowserRouter} from "react-router-dom";
import Aboutsection from './components/About';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() 
{
  return (
    <BrowserRouter>
    <Navbar/>
    <Aboutsection/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
