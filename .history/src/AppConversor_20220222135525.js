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
  
  

  return <div className="App">
      <label>Euro</label>
      <input></input>
      <label>Peso argentino</label>
      <input></input>
      <label>Peso colombiano</label>
      <input></input>
      <label>Peso mexicano</label>
      <input></input>
      <label>Dólar</label>
      <input></input>  
  </div>;
}
export default AppConversor;
