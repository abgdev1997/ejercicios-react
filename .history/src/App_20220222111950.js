import './App.css';
import leovigildo from './rey_leogivildo.png';
import recesvinto from './rey_recesvinto.png';
import sisebuto from './rey_sisebuto.png';
import incognito from './rey_incognito.png'

function App() {

  const cambiarImagen = (e, name) => {
    if(e.target.src.includes(name)){
      e.target.src = incognito;
    }
    if(e.target.src.includes(name)){
      e.target.src = null;
      e.target.style.backgroundColor = null;
    }
  }

  const cambiarTexto = (e) => {
    if(e.target.innerHTML.includes('Rey')){
      e.target.innerHTML = 'Visto';
    }else if(e.target.innerHTML.includes('Visto')){
      e.target.innerHTML = null;
    }
  }

  return (
    <div className="App">
      <div className='img'>
        <img alt='Rey Leovigildo' src={leovigildo} />
        <span onClick={cambiarTexto} className='span'>Rey Leovigildo</span>
      </div>
      <div className='img'>
        <img alt='Rey Recesvinto' src={recesvinto} />
        <span onClick={cambiarTexto} className='span'>Rey Recesvinto</span>
      </div>
      <div className='img'>
        <img alt='Rey Sisebuto' src={sisebuto} />
        <span onClick={cambiarTexto} className='span'>Rey Sidebuto</span>
      </div>
    </div>
  );
}

export default App;
