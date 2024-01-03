import React from "react";
import {BrowserRouter} from "react-router-dom";
import Aboutsection from './components/About';
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Timeline from "./components/Timeline";

function App() 
{
  return (
    <BrowserRouter>
    <Homepage/>
    <Aboutsection/>
    <Timeline/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
