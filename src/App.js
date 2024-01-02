import React from "react";
import {BrowserRouter} from "react-router-dom";
import "./components/Main.css";
import Header from "./components/Header";

function App() 
{
  return (
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
  );
}

export default App;
