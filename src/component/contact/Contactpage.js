import React, { useState } from "react";
import "./Contactpage.css";
import { db } from ".../firebase/Firebase";

const Contactpage = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section id="contact">
      <div className="contact_page">
        <div className="container">
          <div className="contact_heading">CONTACT</div>
          <div className="my_contacts">
            <div className="contact_picture">
              <img src="contact picture.png" alt="Picture" />
            </div>

            <div className="contact_form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="fname"></label>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  value={name}
                  placeholder="Enter Full name here"
                  required
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email"></label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="message"></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message..."
                  draggable="false"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
