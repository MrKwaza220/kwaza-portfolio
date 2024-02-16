import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage_active">
      <div className="container">
        <div className="homepage_picture">
          <div className="homepage_picture_background">
            <img className="homepage_image" alt="" src="sakhumzi.png"></img>
          </div>
        </div>

        <div className="homepage_left-content">
          <div className="homepage_names">
            <div className="my_name">HI, I'M SAKHUMZI</div>

            <div className="job_name">A JUNIOR DEVELOPER</div>
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
                <button>Download cv</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
