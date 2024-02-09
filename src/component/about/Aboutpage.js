import React from "react";
import "./Aboutpage.css";

export default function about() {
  return (
    <div className="page">
      <div className="container">
        <div className="about_myself">
          <h2>About Me</h2>
          <div className="about_image">
            <img src="messi.png"></img>
          </div>
          <div className="about_paragraph">
            <div>
            
              Line 83:13: The href attribute requires a valid value to be
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide a valid href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles. Line 93:13: The href attribute requires a valid value to
              be accessible. Provide a valid, navigable address as the href
              value. If you cannot provide a valid href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles.
            </div>

            <div className="wrapper">
              <a className="button" href="#contact">
                Contact Me
              </a>
              <a className="button" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
