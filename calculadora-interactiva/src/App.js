import './App.css';
import freepng from "./imagen/freepng"
import { Boton, Pantalla, Botonn, BotonC } from './componentes/boton';
import { useState } from "react";
import {evaluate} from "mathjs"

function App() {
  const [input, setInput] = useState("");

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const limpiarInput = () => {
    setInput("");
  };

  const calcularResultado = () => {
    setInput(evaluate(input));
  }

  return (
    <div className="App">
      <div className="contenedor-img">
        <img
          src={freepng} 
          alt='logo-free-code-camp'
          className='img'
        />
      </div>
      <div className='calculadora'>
        <Pantalla input={input} />
        <div className='contenedor-filas-columnas'>
          <div className='contenedor-filas'>
            <div className='fila'>
              <Boton numero="1" manejarClic={() => agregarInput("1")} />
              <Boton numero="2" manejarClic={() => agregarInput("2")} />
              <Boton numero="3" manejarClic={() => agregarInput("3")} />
            </div>
            <div className='fila'>
              <Boton numero="4" manejarClic={() => agregarInput("4")} />
              <Boton numero="5" manejarClic={() => agregarInput("5")} />
              <Boton numero="6" manejarClic={() => agregarInput("6")} />
            </div>
            <div className='fila'>
              <Boton numero="7" manejarClic={() => agregarInput("7")} />
              <Boton numero="8" manejarClic={() => agregarInput("8")} />
              <Boton numero="9" manejarClic={() => agregarInput("9")} />
            </div>
            <div className='fila'>
              <Boton numero="=" manejarClic={() => calcularResultado ("=")} />
              <Boton numero="0" manejarClic={() => agregarInput("0")} />
              <Boton numero="." manejarClic={() => agregarInput(".")} />
            </div>
          </div>
          <div className='columna'>
            <Botonn ecuacion="+" manejarClic={() => agregarInput("+")} />
            <Botonn ecuacion="-" manejarClic={() => agregarInput("-")} />
            <Botonn ecuacion="*" manejarClic={() => agregarInput("*")} />
            <Botonn ecuacion="/" manejarClic={() => agregarInput("/")} />
          </div>
        </div>
        <div className='boton-clear'>
          <BotonC manejarClic={limpiarInput} />
        </div>
      </div>
    </div>
  );
}

export default App;

