import React from "react";

const Carta = (props) => {

  const style = {
      backgroundColor: props.style
  }  

  return (
    <div>
      <div className="card" style={style}>
        <img alt={props.name} src={props.image}/>
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
