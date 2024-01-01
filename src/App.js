import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./components/Main.css";
import Header from "./components/Header";
import Aboutsection from './components/About';

function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <Aboutsection />
    </BrowserRouter>
    
    
  );
}

export default App;
