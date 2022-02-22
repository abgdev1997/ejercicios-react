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
      <span>Euro</span>
      <label></label>
      <span>Peso argentino</span>
      <label></label>
      <span>Peso colombiano</span>
      <label></label>
      <span>Peso mexicano</span>
      <label></label>
      <span>Dólar</span>
      <label></label>  
  </div>;
}
export default AppConversor;
