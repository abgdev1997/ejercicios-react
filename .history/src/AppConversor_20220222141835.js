import { useState } from "react";
import "./AppConversor.css";

function AppConversor() {
  const [euro, setEuro] = useState(1);  

  const [monedas, setMonedas] = useState({
      pesoArgentino: 237.2,
      pesoColombiano: 9087,
      pesoMexicano: 46.4,
      dolar: 3.6  
  });

  const modificarEuro = (e) => {
      if(e.target.value < 0){
          setEuro(0);
      }else{
          setEuro(e.target.value);
      }
  }
  
  const cambioMonedas = () => {

  }

  return <div className="AppConversor">
      <label className="label">Euro</label>
      <input type="number" value={euro} onChange={modificarEuro} className="input"></input>
      <label className="label">Peso argentino</label>
      <input className="input" readOnly></input>
      <label className="label">Peso colombiano</label>
      <input className="input" readOnly></input>
      <label className="label">Peso mexicano</label>
      <input className="input" readOnly></input>
      <label className="label">Dólar</label>
      <input className="input" readOnly></input>  
  </div>;
}
export default AppConversor;
