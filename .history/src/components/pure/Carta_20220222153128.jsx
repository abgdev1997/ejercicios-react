import React from "react";

const Carta = (props) => {
  return (
    <div>
      <div className="img">
        <img alt={props.name} src={props.image} style={props.style}/>
        <span className="span">
          {props.name}
        </span>
        <button>
            Comprar
        </button>
      </div>
    </div>
  );
};

export default Carta;
