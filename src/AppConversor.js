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
      cambioMonedas(e);
  }
  
  const cambioMonedas = (e) => {
      setMonedas({
          pesoArgentino: e.target.value * 118.6,
          pesoColombiano: e.target.value * 4543.5,
          pesoMexicano: e.target.value * 23.2,
          dolar: e.target.value * 1.13
          
      })     
  }
  return <div className="AppConversor">
      <label className="label">Euro</label>
      <input type="number" value={euro} onChange={modificarEuro} className="input"></input>
      <label className="label">Peso argentino</label>
      <input type="number" value={monedas.pesoArgentino} className="input" readOnly></input>
      <label className="label">Peso colombiano</label>
      <input type="number" value={monedas.pesoColombiano} className="input" readOnly></input>
      <label className="label">Peso mexicano</label>
      <input type="number" value={monedas.pesoMexicano} className="input" readOnly></input>
      <label className="label">Dólar</label>
      <input type="number" value={monedas.dolar} className="input" readOnly></input>  
  </div>;
}
export default AppConversor;
