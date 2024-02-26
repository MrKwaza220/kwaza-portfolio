import './App.css';
import Navigationpage from './component/navigation/Navigationpage';
import Homepage from './component/home/Homepage';
import Aboutpage from './component/about/Aboutpage';
import Journeypage from './component/journey/Journeypage';
import Skillspage from './component/skills/Skillspage';
import Projectpage from './component/project/Projectpage';
import Contactpage from './component/contact/Contactpage';
import Footerpage from './component/footer/Footerpage';
import Myjourney from './component/myjourney/Myjourney';

 function App() {
  return (
    <div className= "App">
      <Navigationpage/>
      <Myjourney />
      {/* <Homepage/>
      <Aboutpage/>
      <Journeypage/> */}
      {/* {/* <Skillspage/>
      <Projectpage/>  */}
      <Contactpage/> 
      <Footerpage/>
    </div>
  );
}
export default App;


