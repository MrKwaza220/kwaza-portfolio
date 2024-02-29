import React from "react";
import "./Myjourney.css";

const Myjourney = () => {
  return (
    <section id="myjourney">
      <div className="myjourney_page">
        <div className="journey">
          <div className="container">
            <h3>JOURNEY</h3>

            <div className="myjourney">
              <div className="journey_containers">
                <div className="journey_container_1">
                  <div className="container_one">
                    <h4>Ntsonkotha Senior Secondary School</h4>
                    <p>Secondary School.</p>
                    <p>Grade Passed: Grade 12</p>
                    <p>Year Started: 2015</p>
                    <p>Year ended: 2017</p>
                  </div>
                  <div className="container_two">
                    <h4>University of Fort Hare</h4>
                    <p>Degree Level: Bachelor of Science</p>
                    <p>Course: Computer Science</p>
                    <p>Year Started: 2018</p>
                    <p>Year ended: 2021</p>
                  </div>
                </div>

                <div className="journey_containers_2">
                  <div className="container_three">
                    <h4>Capaciti Tect | UVU AFRICA</h4>
                    <p>Job Title: Software Development</p>
                    <p>Learnership.</p>
                    <p>Duration: 6 Months</p>
                    <p>Year Started: July 2023 - January 2024</p>
                  </div>
                  <div className="container_four">
                    <h4>Younglings Africa</h4>
                    <p>Job Title: Software Development</p>
                    <p>Learnership.</p>
                    <p>Duration: 12 Months</p>
                    <p>Year Started: January 2024 - Present</p>
                  </div>
                </div>
              </div>

              <div className="journey_description">
                <img src="Qoutes.png" alt="quotes "></img>
                {/* <p>
                  The individual holds a Bachelor of Science degree in Computer
                  Science and is proficient in programming languages such as
                  Java, Python, C++, SQL, and MySQL. I completed a 6-month
                  Software Development Learnership at Capaciti, where they
                  gained skills in HTML, CSS, JavaScript, and React. Following
                  this, they embarked on a 12-month Software Development
                  Learnership at Younglings Africa, where they are currently
                  employed, working on real-world projects.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Myjourney;
