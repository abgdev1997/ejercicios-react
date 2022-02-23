import React from 'react';
import Carta from '../pure/Carta';

const Listacartas = () => {
    const reyes = [
        {
          nombre:"Atanagildo",
          color:"darkolivegreen",
          precio:178,
          fotoPath: "https://www.html6.es/img/rey_atanagildo.png"
        },{
          nombre:"Ervigio",
          color:"crimson",
          precio:169,
          fotoPath: "https://www.html6.es/img/rey_ervigio.png"
        },{
          nombre:"Ataúlfo",
          color:"peru",
          precio:81,
          fotoPath: "https://www.html6.es/img/rey_ataulfo.png"
        },{
          nombre:"Leogivildo",
          color:"darkmagenta",
          precio:126,
          fotoPath: "https://www.html6.es/img/rey_leogivildo.png"
        },{
          nombre:"Recesvinto",
          color:"royalblue",
          precio:141,
          fotoPath: "https://www.html6.es/img/rey_recesvinto.png"
        },{
          nombre:"Sisebuto",
          color:"teal",
          precio:69,
          fotoPath: "https://www.html6.es/img/rey_sisebuto.png"
        }
      ]


    return (
        <div>
            <Carta name={reyes[0].nombre} image={reyes[0].fotoPath} style={reyes[0].color}></Carta>
        </div>
    );
}

export default Listacartas;
