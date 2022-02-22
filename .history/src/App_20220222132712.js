import "./App.css";
import leovigildo from "./rey_leogivildo.png";
import recesvinto from "./rey_recesvinto.png";
import sisebuto from "./rey_sisebuto.png";
import incognito from "./rey_incognito.png";
import { useState } from "react";

function App() {
  const reyesGodos = [
    {
      nombre: "Leogivildo",
      aficion: "comer toros sin pelar",
    },
    {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },
    {
      nombre: "Sisebuto",
      aficion: "la cría del escarabajo en almíbar",
    },
  ];

  const [mensaje, setMensaje] = useState(
    `La afición principal de ${reyesGodos[0].nombre} es ${reyesGodos[0].aficion}`
  );

  const [contador, setContador] = useState(1);

  const cambiarImagen = (e) => {
    if (e.target.src.includes("incognito")) {
      e.target.style.visibility = "hidden";
    } else {
      e.target.src = incognito;
    }
    e.target.parentNode.style.backgroundColor = "white";
    e.target.parentNode.style.borderColor = "white";
  };

  const cambiarTexto = (e) => {
    if (e.target.innerHTML.includes("Visto")) {
      e.target.style.visibility = "hidden";
    } else {
      e.target.innerHTML = "Visto";
    }
    e.target.style.backgroundColor = "white";
  };

  const cambiarMensaje = () => {
    setMensaje(
      `La afición principal de ${reyesGodos[contador].nombre} es ${reyesGodos[contador].aficion}`
    );
    if (contador === 2) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  };

  return (
    <div className="App">
      <div className="cards-container">
        <div className="img">
          <img onClick={cambiarImagen} alt="Rey Leovigildo" src={leovigildo} />
          <span onClick={cambiarTexto} className="span">
            Rey Leovigildo
          </span>
        </div>
        <div className="img">
          <img onClick={cambiarImagen} alt="Rey Recesvinto" src={recesvinto} />
          <span onClick={cambiarTexto} className="span">
            Rey Recesvinto
          </span>
        </div>
        <div className="img">
          <img onClick={cambiarImagen} alt="Rey Sisebuto" src={sisebuto} />
          <span onClick={cambiarTexto} className="span">
            Rey Sidebuto
          </span>
        </div>
      </div>
      <div className="mensaje-container">
        <button className="mensaje" onClick={cambiarMensaje}>Ver Siguiente</button>
        <span className="mensaje">{mensaje}</span>
      </div>
    </div>
  );
}

export default App;
