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
          <a href="" className="logo">
            <span>"</span>kwaza<span>"</span>
          </a>

          <ul className="navlinks">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Journey</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#Contacts">Contact</a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navigationbar;
