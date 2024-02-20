import React from "react";
import "./Journeypage.css";

const Journeypage = () => {
  let sections = document.querySelectorAll("section");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;

      if (top >= offset && top < offset + height) {
        sec.classList.add("journey_animate");
      } else {
        sec.classList.remove("journey_animate");
      }
    });
  };

  return (
    <section className="sect_3 journey_animate"  id="myjourney">
      <div className="journey_page">
        <div className="container">
          <div className="journey_heading animate">
            JOURNEY <span className="showRight_animate"></span>
          </div>
          <div className="myjourney_list animate">
            <div>
              <div className="myjourneylist ">
                <img src="school.png" alt="" height={""} width={""} />
                <h4>HIGH SCHOOL</h4>
                <p>Name of School: Ntsonkotha Senior</p>
                <p>Secondary School.</p>
                <p>Grade Passed: Grade 12</p>
                <p>Year Started: 2015</p>
                <p>Year ended: 2017</p>
              </div>
            </div>

            <div>
              <div className="myjourneylist">
                <img src="gradua.png" alt="" height={""} width={""} />
                <h4>TERTIARY</h4>
                <p>Institution: University of Fort Hare</p>
                <p>Degree Level: Bachelor of Science</p>
                <p>Course: Computer Science</p>
                <p>Year Started: 2018</p>
                <p>Year ended: 2021</p>
                <p>
                  <span> myjourney list </span>
                </p>
              </div>
            </div>

            <div>
              <div className="myjourneylist">
                <img src="work.png" alt="" height={""} width={""} />
                <h4>EXPERIENCE</h4>
                <p>Company: UVU AFRICA</p>
                <p>Job Title: Software Development</p>
                <p>Learnership.</p>
                <p>Duration: 6 Months</p>
                <p>Year Started: July 2023 - Present</p>
              </div>
            </div>
            {/* <span className="showRight_animate"></span> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Journeypage;
