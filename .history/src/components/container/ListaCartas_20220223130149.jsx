import React, { useEffect, useState } from "react";
import Carta from "../pure/Carta";
import "./ListaCartas.css";

const Listacartas = () => {
  const reyes = [
    {
      id: 1,
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178,
      fotoPath: "https://www.html6.es/img/rey_atanagildo.png",
    },
    {
      id: 2,
      nombre: "Ervigio",
      color: "crimson",
      precio: 169,
      fotoPath: "https://www.html6.es/img/rey_ervigio.png",
    },
    {
      id: 3,
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81,
      fotoPath: "https://www.html6.es/img/rey_ataulfo.png",
    },
    {
      id: 4,
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126,
      fotoPath: "https://www.html6.es/img/rey_leogivildo.png",
    },
    {
      id: 5,
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141,
      fotoPath: "https://www.html6.es/img/rey_recesvinto.png",
    },
    {
      id: 6,
      nombre: "Sisebuto",
      color: "teal",
      precio: 69,
      fotoPath: "https://www.html6.es/img/rey_sisebuto.png",
    },
  ];

  useEffect(() => {
    console.log(`La cuenta es de: ${cuenta}`)
    
  }, [reyesGodos]);

  const [reyesGodos, setReyesGodos] = useState(reyes);
  const [cuenta, setCuenta] = useState(0);

  const comprarRey = (rey) => {
    const index = reyesGodos.indexOf(rey);
    const tempReyes = [...reyesGodos];
    setCuenta(cuenta + rey.precio);
    tempReyes.splice(index, 1);
    setReyesGodos(tempReyes);
  };

  return (
    <div>
      <header className="header">
        <span className="span">Su cuenta es de: {cuenta} $</span>
      </header>
      <div className="list">
        {reyesGodos.map((rey) => (
          <Carta key={rey.id} rey={rey} comprarRey={comprarRey}></Carta>
        ))}
      </div>
    </div>
  );
};

export default Listacartas;
