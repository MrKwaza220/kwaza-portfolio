import React from "react";
import './Navigationpage.css';

const Navigationpage = () => {

  const toggleNavbar = () => {
    console.log("Toggle Navbar clicked");
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('responsive');
  };
  
  const closeNavbar = () => {
    console.log("Close Navbar clicked");
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('responsive');
  };

  return (
    <div className="navigation">
      <div className="homepage_logo">
        <p>KWAZA</p>
      </div>
      <ul className="navigation-bar" id="navbar">
        <li>
          <a href="#home" className="underline">
            <span>Home</span>
            <span>
              <i  aria-hidden="true">
              <img src="home.png" alt="home icon" height={40} width={40}/>
              </i>
            </span>
          </a>
        </li>
        <li>
          <a href="#about" className="underline">
            <span>About</span>
            <span>
              <i
                
                aria-hidden="true"
              >
                <img src="about.png" alt="about icon" height={40} width={40}/>
              </i>
            </span>
          </a>
        </li>
        <li>
          <a href="#myjourney" className="underline">
            <span>Journey</span>
            <span>
              <i aria-hidden="true">
              <img src="journey.png" alt="journey icon" height={40} width={40}/>
              </i>
            </span>
          </a>
        </li>
        <li>
          <a href="#myskills" className="underline">
            <span>Skills</span>
            <span>
              <i aria-hidden="true">
              <img src="skills.png" alt="skills icon" height={40} width={40}/>
              </i>
            </span>
          </a>
        </li>
        <li>
          <a href="#myproject" className="underline">
            <span>Project</span>
            <span>
              <i  aria-hidden="true">
              <img src="projects.png" alt="project icon" height={40} width={40}/>
              </i>
            </span>
          </a>
        </li>
        <li>
          <a href="#contact" className="underline">
            <span>Contact</span>
            <span>
              <i
                
                aria-hidden="true"
              >
                <img src="contact.png" alt="contact icon" height={40} width={40}/>
              </i>
            </span>
          </a>
        </li>
        
      </ul>
      <i className="fa fa-bars" id="menu-icon" onClick={toggleNavbar}></i>
      <i className="fas" onClick={closeNavbar}>
        <img src="icons-x.png" alt="close icon" />
      </i>
    </div>

  )
}
export default Navigationpage;
