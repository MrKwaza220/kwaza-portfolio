import React from "react";
import "./Navigationbar.css";

const Navigationbar = () => {
  return (
    <div classNameName="container">
      <header>
        <nav class="main-nav">
          <input type="checkbox" id="check" />
          <label for="check" class="menu-btn">
            <i class="fa fa-bars">

            </i>
          </label>
          <a href="index.html" class="logo">
            Kwaza
          </a>
          <ul class="navlinks">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#" class="contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Navigationbar;
