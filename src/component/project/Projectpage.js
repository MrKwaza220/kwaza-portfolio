import React from "react";
import "./Projectpage.css";

function Projectpage() {
  return (
    <div className="my_project">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">
          <div className="work">
            <img src="Messi.jpg" />
            <div className="layer">
              <h3>Rock, Paper and Scissor</h3>
              <p>
                Forms are created using the element, and they contain various
                form controls like text labels, fields, radio buttons,
                checkboxes, dropdowns, and buttons.
              </p>
              <a href="#">
                <i className="fa fa-external-link-alt"></i>{" "}
              </a>
            </div>
          </div>
          <div className="work">
            <img src="Messi.jpg" />
            <div className="layer">
              <h3>Car Rental Website</h3>
              <p>
                Forms are created using the element, and they contain various
                form controls like text labels, fields, radio buttons,
                checkboxes, dropdowns, and buttons.
              </p>
              <a href="#">
                <i className="fa fa-external-link-alt"></i>{" "}
              </a>
            </div>
          </div>
          <div className="work">
            <img src="Messi.jpg" />
            <div className="layer">
              <h3>Coffee Shop</h3>
              <p>
                Forms are created using the element, and they contain various
                form controls like text labels, fields, radio buttons,
                checkboxes, dropdowns, and buttons.
              </p>
              <a href="#">
                <i className="fa fa-external-link-alt"></i>{" "}
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">
          See More
        </a>
      </div>
    </div>
  );
}
export default Projectpage;
