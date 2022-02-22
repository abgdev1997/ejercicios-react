import './App.css';
import leovigildo from './rey_leogivildo.png';
import recesvinto from './rey_recesvinto.png';
import sisebuto from './rey_sisebuto.png';
import incognito from './rey_incognito.png'

function App() {

  const cambiarImagen = (e) => {
    if(e.target.src.includes('incognito')){
      e.target.style.visibility = 'hidden';
    }else{
      e.target.src = incognito;
    }
  }

  const cambiarTexto = (e) => {
    if(e.target.innerHTML.includes('Visto')){
      e.target.innerHTML = '';
    }else{
      e.target.innerHTML = 'Visto';
    }
    e.target.style.backgroundColor='white';
  }

  return (
    <div className="App">
      <div className='img'>
        <img onClick={cambiarImagen} alt='Rey Leovigildo' src={leovigildo} />
        <span onClick={cambiarTexto} className='span'>Rey Leovigildo</span>
      </div>
      <div className='img'>
        <img onClick={cambiarImagen} alt='Rey Recesvinto' src={recesvinto} />
        <span onClick={cambiarTexto} className='span'>Rey Recesvinto</span>
      </div>
      <div className='img'>
        <img onClick={cambiarImagen} alt='Rey Sisebuto' src={sisebuto} />
        <span onClick={cambiarTexto} className='span'>Rey Sidebuto</span>
      </div>
    </div>
  );
}

export default App;
