import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fibonacci from "./Fibonacci";
import Home from "./home"

function App() {
  return (
    
      <div className="App">
        <header>
          <p>Realizacja zadania nr1 w ramach laboratorium PFSwCO Mateusz Ucinski</p>
        </header>
        
        <br />
        
        <br />
        <br />
        <div>
          <Home/>
        </div>
      </div>
    
  );
}

export default App;
