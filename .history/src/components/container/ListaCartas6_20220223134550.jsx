import React from 'react';
import Carta6 from '../pure/Carta6';

const Listacartas6 = () => {
    const reyes = [
        {
          id: 1,
          nombre: "Atanagildo",
          reinado: 15,
          reses: 178,
          fotoPath: "https://www.html6.es/img/rey_atanagildo.png",
        },
        {
          id: 2,
          nombre: "Ervigio",
          reinado: 15,
          reses: 178,
          fotoPath: "https://www.html6.es/img/rey_ervigio.png",
        },
        {
          id: 3,
          nombre: "Ataúlfo",
          reinado: 15,
          reses: 178,
          fotoPath: "https://www.html6.es/img/rey_ataulfo.png",
        },
        {
          id: 4,
          nombre: "Leogivildo",
          reinado: 15,
          reses: 178,
          fotoPath: "https://www.html6.es/img/rey_leogivildo.png",
        },
        {
          id: 5,
          nombre: "Recesvinto",
          reinado: 15,
          reses: 178,
          fotoPath: "https://www.html6.es/img/rey_recesvinto.png",
        },
        {
          id: 6,
          nombre: "Sisebuto",
          reinado: 15,
          reses: 178,
          fotoPath: "https://www.html6.es/img/rey_sisebuto.png",
        },
      ];

    return (
        <div>
            {reyes.map((rey) => (<Carta6 key={rey.id} rey={rey} />))}
        </div>
    );
}

export default Listacartas6;
