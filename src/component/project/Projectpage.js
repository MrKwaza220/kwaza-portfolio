import React from "react";
import "./Projectpage.css";

function Projectpage() {
  return (
    <div className="page">
      <div className="container">
        <h2 className="sub-title">Project</h2>
        <div className="myproject_list">
          <div>
            <i className="fa-solid fa-hand-back-fist"></i>{" "}
            <i className="fa-solid fa-hand"></i>{" "}
            <i className="fa-solid fa-hand-scissors"></i>
            <h2>Rock Paper Scissor Game</h2>
            <p>This Game have Single Player</p>
            <p>And Also have Multiplayer.</p>
            <p>It uses two browsers for multiplayer</p>
            <p>We use NodeJs as Server side</p>
            <p>demo will be available</p>
            <p>
              {" "}
            </p>
          </div>
          <div>
            <i className="fa-solid fa-mug-hot"></i>
            <h2>Coffee Shop Website</h2>
            <p>This Website have User Interface.</p>
            <p>This is individual project</p>
            <p></p>
            <p></p>
            <p>Demo Will available Soon</p>
            <p>
              
            </p>
          </div>
          <div>
            <i className="fa-solid fa-car"></i>
            <h2>Rental Car Website</h2>
            <p>The Website have User Interface.</p>
            <p>Is under development.</p>
            <p>This is a group project</p>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projectpage;
