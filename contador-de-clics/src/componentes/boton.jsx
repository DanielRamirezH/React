import React from "react";
import "../estilos/boton.css"

function Boton ( { texto , esBotondeclick, manejarClick} ) {
  return (
    <button
    className={ esBotondeclick ? "boton-click":"boton-reiniciar"}
    onClick={manejarClick}>
      { texto }
    </button>
  )
}
export default Boton;