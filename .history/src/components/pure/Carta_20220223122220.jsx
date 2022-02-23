import React from "react";
import "./Carta.css"

const Carta = ({rey, comprarRey}) => {

  const style = {
      backgroundColor: rey.color
  }  

  return (
    <>
      <div className="card" style={style}>
        <img alt={rey.name} src={rey.fotoPath}/>
        <span className="span">
          {rey.name}
        </span>
        <span className="span">
          {rey.precio} $
        </span>
        <button className="button">
            Comprar
        </button>
      </div>
    </>  
  );
};

export default Carta;
