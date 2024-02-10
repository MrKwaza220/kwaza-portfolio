import React from "react";
import "./Aboutpage.css";

function Aboutpage() {
  return (
    <div className="page">
      <div className="container">
        <div className="about_myself">
          <h2>About Me</h2>
          <div className="about_image">
            <img src="Messi.jpg" alt="messi"/>
          </div>
          <div className="about_paragraph">
            <p>
              I am a Hardworking, highly motivated junior developer eager to
              lend combined knowledge and skills to enhance business
              performance. Operates well in both individual and team capacities,
              leveraging seasoned work ethic to quickly adapt to different
              processes and drive company objectives. Resourceful and
              results-driven with a passion for growth and efficiency to meet
              company needs and increase service value.
            </p>

            <div className="wrapper">
              <a className="button" href="#contact">
                Contact Me
              </a>
              <a className="button" href="#contact">
                Download cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutpage;