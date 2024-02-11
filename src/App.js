import './App.css';
import Homepage from './component/home/Homepage';
import Aboutpage from './component/about/Aboutpage';
import Journeypage from './component/journey/Journeypage';
import Skillspage from './component/skills/Skillspage';
import Projectpage from './component/project/Projectpage';
import Contactpage from './component/contact/Contactpage';

 function App() {
  return (
    <div className= "App">
      {/* <Homepage/> */}
      {/* <Aboutpage/> */}
      {/* <Journeypage/> */}
      {/* <Skillspage/> */}
      <Projectpage/>
      <Contactpage/>
    </div>
  );
}
export default App;


