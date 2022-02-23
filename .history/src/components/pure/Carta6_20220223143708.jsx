import React from 'react';
import './Carta6.css'

const Carta6 = ({rey, borrar}) => {
    return (
        <div className="card">
            <p className="parrafo">
                <span className="textoRojo">{rey.nombre}</span>{" "}
                ha comido {rey.reses} en sus {rey.reinado} años de reinado
            </p>
            <img alt={rey.nombre} src={rey.fotoPath} className="img"/>
            <button className="button" onClick={borrar(rey)} >Borrar</button>
        </div>
    );
}

export default Carta6;
