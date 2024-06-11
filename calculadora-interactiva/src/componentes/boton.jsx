// Boton.js
import React from "react";
import "../estilos/boton.css";

export function Boton({ numero, manejarClic }) {
  return (
    <div className="contenedor-boton" onClick={() => manejarClic(numero)}>
      {numero}
    </div>
  );
}

export function Botonn({ ecuacion, manejarClic }) {
  const esOperador = valor => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <div
      className={`contenedor-boton ${esOperador(ecuacion) ? "ecuacion" : ""}`}
      onClick={() => manejarClic(ecuacion)}
    >
      {ecuacion}
    </div>
  );
}

export function BotonC({ manejarClic }) {
  return (
    <div className="contenedor-boton clear" onClick={manejarClic}>
      Clear
    </div>
  );
}

export const Pantalla = ({ input }) => (
  <div className="input">
    {input}
  </div>
);

 


