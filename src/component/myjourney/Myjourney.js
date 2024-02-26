import React from "react";
import "./Myjourney.css";

const Myjourney = () => {
  return (
    <section>
      <div className="myjourney_page">
        <div className="container">
          <h3>JOURNEY</h3>

          <div className="myjourney">
            <div className="journey_containers">
              <div className="journey_container_1">
                <div className="container_one">
                  <h4>High School</h4>
                  <p>Name of School: Ntsonkotha Senior</p>
                  <p>Secondary School.</p>
                  <p>Grade Passed: Grade 12</p>
                  <p>Year Started: 2015</p>
                  <p>Year ended: 2017</p>
                </div>
                <div className="container_two">
                  <h4>Tertiary</h4>
                  <p>Institution: University of Fort Hare</p>
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
                  <p>Year Started: July 2023 - Present</p>
                </div>
                <div className="container_four">
                  <h4>Younglings Africa</h4>
                  <p>Job Title: Software Development</p>
                  <p>Learnership.</p>
                  <p>Duration: 12 Months</p>
                  <p>Year Started: January 2023 - Present</p>
                </div>
              </div>
            </div>

            <div className="journey_description"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Myjourney;
