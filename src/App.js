import React from "react";
import {BrowserRouter} from "react-router-dom";
import Aboutsection from './components/About';

function App() 
{
  return (
    <BrowserRouter>
    <Aboutsection/>
    </BrowserRouter>
  );
}

export default App;
