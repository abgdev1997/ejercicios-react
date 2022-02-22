import './App.css';
import leovigildo from './rey_leogivildo.png';
import recesvinto from './rey_recesvinto.png';
import sisebuto from './rey_sisebuto.png';

function App() {
  return (
    <div className="App">
      <img src={leovigildo} className='img'/>
      <img src={recesvinto} className='img'/>
      <img src={sisebuto} className='img'/>
    </div>
  );
}

export default App;
