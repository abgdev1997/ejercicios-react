import React from "react";
import "./Carta.css"

const Carta = (props) => {

  const style = {
      backgroundColor: props.rey.color
  }  

  return (
    <>
      <div className="card" style={style}>
        <img alt={props.rey.name} src={props.rey.fotoPath}/>
        <span className="span">
          {props.rey.name}
        </span>
        <span className="span">
          {props.rey.precio} $
        </span>
        <button className="button" onClick={props.comprar(props.rey)}>
            Comprar
        </button>
      </div>
    </>  
  );
};

export default Carta;
