import React from "react";
import "./Projectpage.css";

function Projectpage() {
  return (
    <section id="myproject">

    <div className="my_project">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">
          <div className="work">
            <img src="rockpaperscissors.jpg" height={"500"} />
            <div className="layer">
              <h3>Rock, Paper and Scissor</h3>
              <p>
              Rock-paper-scissors is a simple fun hand game usually played between two people,
               where each player simultaneously select one of three shapes with their hand.
               Tools we used
               <ul>
                <li>HTML, CSS and JavaScript</li>
                <li>NodeJs</li>
               </ul>

              </p>
              <a href="https://github.com/MrKwaza220/Rock-paper-scissors-Multiplayer-" target="_blank">
              <i className="fa fa-link"></i>{" "}
              </a>
            </div>
          </div>
          <div className="work">
            <img src="Renting black.jpg" height={"500"}/>
            <div className="layer">
              <h3>Car Rental Website</h3>
                <p>The Website have User Interface.</p>
                <p>View our demo</p>
                
              <a href="https://rentalcarswebsite.netlify.app" target="_blank">
              <i className="fa fa-link"></i>{" "}
              </a>
            </div>
          </div>
          <div className="work">
            <img src="coffee.png" height={500}/>
            <div className="layer">
              <h3>Coffee Shop</h3>
                <p>This Website have User Interface.</p>
                <p>This is individual project</p>
                <p></p>
                <p></p>
                <p>Demo Will available Soon</p>
               
              <a href="https://github.com/MrKwaza220/coffeewebsite" target="_blank">
              <i className="fa fa-link"></i>{" "}
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">
          See More
        </a>
      </div>
    </div>
    </section>
  );
}
export default Projectpage;
