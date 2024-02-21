import React, { useState } from "react";
import "./Contactpage.css";
import ReCAPTCHA from 'react-google-recaptcha';

const Contactpage = () => {
  const recaptchaRef = React.createRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSubmitWithCaptcha = async () => {
    const token = await recaptchaRef.current.executeAsync();
    // Send the token to your backend for verification
    console.log(token);
    // Once you've got the token, you can proceed with form submission
    handleSubmitForm();
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
              <form onSubmit={handleSubmitWithCaptcha}>
                <label htmlFor="fname"></label>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Enter Full name here"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />

                <label htmlFor="email"></label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <label htmlFor="message"></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message..."
                  draggable="false"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                {/* <ReCAPTCHA
                {/* <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6LczU3opAAAAAEYbO-S2q32v7xMpgQ7x5TvE9cti"
                  onChange={(token) => console.log(token)} 
                /> */}
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
