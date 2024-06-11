import React from "react";

function Testimonios(props) {
  return (
    <div className="contenedor-testimonio">
      <div className="contenedor-img">
        <img src={props.img} alt="Descripción de la imagen" className="imagen-testimonio"/>
      </div>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-pais-testimonio"><strong>{props.nombre}</strong>, {props.pais}
        </p>
        <p className="cargo-de-la-persona">
          {props.cargo} en <strong>{props.empresa}.</strong>
        </p>
        <p className="testimonio">
            {props.testimonio}. 
        </p>
      </div>
    </div>
  );
};

export default Testimonios;
