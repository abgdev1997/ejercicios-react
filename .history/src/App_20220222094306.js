import './App.css';
import leovigildo from './rey_leogivildo.png';
import recesvinto from './rey_recesvinto.png';
import sisebuto from './rey_sisebuto.png';

function App() {
  return (
    <div className="App">
      <div>
        <img alt='Rey Leovigildo' src={leovigildo} className='img'/>
        <span>Rey Leovigildo</span>
      </div>
      <div>
        <img alt='Rey Recesvinto' src={recesvinto} className='img'/>
        <span>Rey Recesvinto</span>
      </div>
      <div>
        <img alt='Rey Sisebuto' src={sisebuto} className='img'/>
        <span>Rey Sidebuto</span>
      </div>
    </div>
  );
}

export default App;
