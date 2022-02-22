import './App.css';
import leovigildo from './rey_leogivildo.png';
import recesvinto from './rey_recesvinto.png';
import sisebuto from './rey_sisebuto.png';

function App() {
  return (
    <div className="App">
      <img alt='Rey Leovigildo' src={leovigildo} className='img'/>
      <img alt='Rey Recesvinto' src={recesvinto} className='img'/>
      <img alt='Rey Sisebuto' src={sisebuto} className='img'/>
    </div>
  );
}

export default App;
