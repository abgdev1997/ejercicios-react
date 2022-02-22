import './App.css';
import leovigildo from './rey_leogivildo.png';
import recesvinto from './rey_recesvinto.png';
import sisebuto from './rey_sisebuto.png';

function App() {
  return (
    <div className="App">
      <div className='img'>
        <img alt='Rey Leovigildo' src={leovigildo} />
        <span className='span'>Rey Leovigildo</span>
      </div>
      <div className='img'>
        <img alt='Rey Recesvinto' src={recesvinto} />
        <span className='span'>Rey Recesvinto</span>
      </div>
      <div className='img'>
        <img alt='Rey Sisebuto' src={sisebuto} />
        <span className='span'>Rey Sidebuto</span>
      </div>
    </div>
  );
}

export default App;
