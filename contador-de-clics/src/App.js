import './App.css';
import React from 'react';
import Boton from './componentes/boton';
import freepng from "./imagen/freepng";
import Contador from './componentes/contador.jsx';
import { useState } from "react";

function App() {

  const [numClics, setNumClics] = useState (0);


  const contadorClick = () => {
    setNumClics(numClics + 1);
    console.log("click");
  };
  const reiniciarContador = () => {
    setNumClics(numClics - numClics)
    console.log ("Reiniciar")
  }

  return (
    <div className="App"> 
      <div className="contenedor-img">
        <img className='logo-freeCodeCamp'
        src={freepng}
        alt='logo-free-code-capm'/>
      </div>
      <Contador numClics = {numClics}
      />
      <Boton 
      texto ="Click"
      esBotondeclick={true}
      manejarClick={contadorClick}
      className bo/>
      <Boton 
      texto ="Reiniciar"
      esBotondeclick={false}
      manejarClick={reiniciarContador}
      />
    </div>
  );
}

export default App;
