import React from "react";
import {BrowserRouter} from "react-router-dom";
import Aboutsection from './components/About';
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() 
{
  return (
    <BrowserRouter>
    <Homepage/>
    <Aboutsection/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
