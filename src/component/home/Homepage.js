import React from "react";
// import Typical from "react-typical";
import "./Homepage.css";



export default function Homepage() {
  return (
    <div className="homepage_active">
      {/* <!--Navigation BAR--> */}


      <div className="homepage_logo">
        <p>Kwaza</p>
      </div>

      <div className="navigation">
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
                <i className="fa-solid fa-address-card" aria-hidden="true"></i>
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
            <a href="#my_skills" className="underline">
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
                <i className="fa-solid fa-address-book" aria-hidden="true"></i>
              </span>
            </a>
          </li>
          {/* <h2>View Count: <span id="viewCount">0</span></h2> */}
          {/* <i className="fas fa-times"></i> */}
        </ul>
        {/* <i className="fas fa-bars" id="menu-icon"></i> */}
      </div>

      <div className="homepage_content">
        <div className="homepage_left-content">
          <div className="homepage_names">
            <div className="my_name">HI, I'M SAKHUMZI</div>

            <div className="job_name"> A JUNIOR DEVELOPER</div>
          </div>
          <div className="Icons_button">

          <div className="homepage_icons">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sakhumzi-kwaza-2690351b9/">
              <i className="fa fa-linkedin"></i>
            </a>

            <a href="https://github.com/MrKwaza220?tab=repositories">
              <i className="fa fa-github"></i>
            </a>
            <a href="#" download>
             <button>
                 Download cv
             </button>
            </a>

          
          </div>

          </div>
        </div>

        <div className="homepage_picture">
          <div className="homepage_picture_background">
            {/* <img className="homepage_image" alt="" src="messi.jpg" ></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}
