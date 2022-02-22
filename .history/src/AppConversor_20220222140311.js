import { useState } from "react";
import "./AppConversor.css";

function AppConversor() {
  const [monedas, setMonedas] = useState({
      euro: 1,
      pesoArgentino: 237.2,
      pesoColombiano: 9087,
      pesoMexicano: 46.4,
      dolar: 3.6  
  });
  
  

  return <div className="AppConversor">
      <label className="label">Euro</label>
      <input className="input"></input>
      <label className="label">Peso argentino</label>
      <input className="input"></input>
      <label className="label">Peso colombiano</label>
      <input className="input"></input>
      <label className="label">Peso mexicano</label>
      <input className="input"></input>
      <label className="label">Dólar</label>
      <input className="input"></input>  
  </div>;
}
export default AppConversor;
