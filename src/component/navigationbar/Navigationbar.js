import React, { useState } from "react";
import "./Navigationbar.css";

const Navigationbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkClick = () => {
    setIsChecked(false);
  };

  return (
    <header>
      <nav className="main-nav">
        <div className="container">
          <input
            type="checkbox"
            id="check"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />

          <label htmlFor="check" className="menu-btn">
            <i className="fa fa-bars"></i>
          </label>
          <a href="#home" className="logo">
            <span>SK</span>
          </a>

          <ul className="navlinks">
            <li>
              <a href="#home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#myjourney" onClick={handleLinkClick}>
                Journey
              </a>
            </li>
            <li>
              <a href="#myskills" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#myproject" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navigationbar;
