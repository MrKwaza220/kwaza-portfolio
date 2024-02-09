import './App.css';
import Homepage from './component/home/Homepage';
import Aboutpage from './component/about/Aboutpage';
import Journeypage from './component/journey/Journeypage';

function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      <Aboutpage/>
      <Journeypage/>
    </div>
  );
}

export default App;
