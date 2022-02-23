import React, { useState } from 'react';
import Carta from '../pure/Carta';
import './ListaCartas.css'

const Listacartas = () => {
    const reyes = [
        {
          id: 1,
          nombre:"Atanagildo",
          color:"darkolivegreen",
          precio:178,
          fotoPath: "https://www.html6.es/img/rey_atanagildo.png"
        },{
          id: 2,
          nombre:"Ervigio",
          color:"crimson",
          precio:169,
          fotoPath: "https://www.html6.es/img/rey_ervigio.png"
        },{
          id: 3,
          nombre:"Ataúlfo",
          color:"peru",
          precio:81,
          fotoPath: "https://www.html6.es/img/rey_ataulfo.png"
        },{
          id: 4,
          nombre:"Leogivildo",
          color:"darkmagenta",
          precio:126,
          fotoPath: "https://www.html6.es/img/rey_leogivildo.png"
        },{
          id: 5,
          nombre:"Recesvinto",
          color:"royalblue",
          precio:141,
          fotoPath: "https://www.html6.es/img/rey_recesvinto.png"
        },{
          id: 6,
          nombre:"Sisebuto",
          color:"teal",
          precio:69,
          fotoPath: "https://www.html6.es/img/rey_sisebuto.png"
        }
      ]

      const [reyesGodos, setReyesGodos] = useState(reyes);
      const [cuenta, setCuenta] = useState(0);

      const comprarRey = (rey) => {
        const index = reyesGodos.indexOf(rey);
        const tempReyes = [...reyesGodos];
        setCuenta((Number), cuenta + rey.precio)
        tempReyes.splice(index, 1);
        setReyesGodos(tempReyes);
        
      }


    return (
        <div className="list">

            {reyesGodos.map((rey) => (<Carta key={rey.id} rey={rey} comprarRey={comprarRey}></Carta>))}

            {/*<Carta precio={reyes[0].precio} name={reyes[0].nombre} image={reyes[0].fotoPath} style={reyes[0].color}></Carta>
            <Carta precio={reyes[1].precio} name={reyes[1].nombre} image={reyes[1].fotoPath} style={reyes[1].color}></Carta>
            <Carta precio={reyes[2].precio} name={reyes[2].nombre} image={reyes[2].fotoPath} style={reyes[2].color}></Carta>
            <Carta precio={reyes[3].precio} name={reyes[3].nombre} image={reyes[3].fotoPath} style={reyes[3].color}></Carta>
            <Carta precio={reyes[4].precio} name={reyes[4].nombre} image={reyes[4].fotoPath} style={reyes[4].color}></Carta>
    <Carta precio={reyes[5].precio} name={reyes[5].nombre} image={reyes[5].fotoPath} style={reyes[5].color}></Carta>*/}
        </div>
    );
}

export default Listacartas;
