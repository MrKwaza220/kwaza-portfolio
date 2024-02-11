import React, { useState } from "react";
import './Contactpage.css';

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="my_contacts">
          <div className="contact_picture">
            <h2>Contact Me</h2>
            <img src="Messi.jpg" alter="Messi" />
            {/* <i className="fa- fa-phone"></i>
            <i className="fa-fa-envelope"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-github"></i> */}
          </div>

          <div className="contact_form">
            <form onSubmit={handleSubmit}>
              <label for="fname"></label>
              <input
                type="text"
                id="fname"
                name="Name"
                placeholder="Enter Full name here"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <label for="email"></label>
              <input
                type="text"
                id="email"
                name="Email"
                placeholder="Your Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <label for="message"></label>
              <textarea
                id="message"
                name="Message"
                placeholder="Message..."
                draggable="false"
              ></textarea>

              <button type="submit" onclick="submitForm()">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;

