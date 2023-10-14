import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as d3 from "d3";
import { useEffect, useRef } from "react";
import Barchart from './components/Barchart';


function App() {
  return (
    <div className="App">
    <h1>Hello React + D3 world!</h1>
    <Barchart/>
    </div>
  );
}

export default App
