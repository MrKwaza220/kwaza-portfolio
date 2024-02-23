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
              <i className="fa-solid fa-house" aria-hidden="true"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#about" className="underline">
            <span>About</span>
            <span>
              <i
                className="fa-solid fa-address-card"
                aria-hidden="true"
              ></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#myjourney" className="underline">
            <span>Journey</span>
            <span>
              <i className="fa-solid fa-school" aria-hidden="true"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#myskills" className="underline">
            <span>Skills</span>
            <span>
              <i className="fa-solid fa-laptop-code" aria-hidden="true"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#myproject" className="underline">
            <span>Project</span>
            <span>
              <i className="fa-solid fa-code" aria-hidden="true"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#contact" className="underline">
            <span>Contact</span>
            <span>
              <i
                className="fa-solid fa-address-book"
                aria-hidden="true"
              ></i>
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
