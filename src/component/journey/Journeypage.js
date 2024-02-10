import React from "react";
import "./Journeypage.css";

function Journeypage() {
  return (
    <div className="page">
       {/* <div className="my_journey">
        
         Journey
       </div> */}
      <div className="myjourney_list">
      
        <div>
          <div className="myjourneylist">
            <i className="fa fa-school"></i>
            <h2>HIGH SCHOOL</h2>
            <p>Name of School: Ntsonkotha Senior</p>
            <p>Secondary School.</p>
            <p>Grade Passed: Grade 12</p>
            <p>Year Started: 2015</p>
            <p>Year ended: 2017</p>
          </div>
        </div>

        <div>
          <div className="myjourneylist">
            <i className="fa fa-building-columns"></i>
            <h2>TERTIARY</h2>
            <p>Institution: University of Fort Hare</p>
            <p>Degree Level: Bachelor of Science</p>
            <p>Course: Computer Science</p>
            <p>Year Started: 2018</p>
            <p>Year ended: 2021</p>
          </div>
        </div>

        <div>
          <div className="myjourneylist">
            <i className="fa fa-briefcase"></i>
            <h2>EXPERIENCE</h2>
            <p>Company: UVU AFRICA</p>
            <p>Job Title: Software Development</p>
            <p>Learnership.</p>
            <p>Duration: 6 Months</p>
            <p>Year Started: July 2023 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Journeypage;
