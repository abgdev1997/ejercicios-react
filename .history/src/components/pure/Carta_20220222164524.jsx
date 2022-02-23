import React from "react";
import "./Carta.css"

const Carta = (props) => {

  const style = {
      backgroundColor: props.style
  }  

  return (
      <div className="card" style={style}>
        <img alt={props.name} src={props.image}/>
        <span className="span">
          {props.name}
        </span>
        <span className="span">
          {props.precio}
        </span>
        <button>
            Comprar
        </button>
      </div>
  );
};

export default Carta;
