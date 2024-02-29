import React from "react";
import "./Navigationbar.css";

const Navigationbar = () => {
  return (
    <header>
      <nav className="main-nav">
        <div className="container">
          <input type="checkbox" id="check" />

          <label for="check" className="menu-btn">
            <i className="fa fa-bars"></i>
          </label>
          <a href="#home" className="logo">
            <span>SK</span>
          </a>

          <ul className="navlinks">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#myjourney">Journey</a>
            </li>
            <li>
              <a href="#myskills">Skills</a>
            </li>
            <li>
              <a href="#myproject">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navigationbar;
