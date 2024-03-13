import React, { useRef, useState } from "react";
import "./Contactpage.css";
import { db } from "./Firebase";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';

const Contactpage = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false); // State variable to track CAPTCHA check

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaChecked) {
      alert('Please check CAPTCHA before submitting.');
      return;
    }

    emailjs
      .sendForm('service_yf0mprm', 'mycontactform', formRef.current, {
        publicKey: 'ENANb1VwvDT8DjX6r',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        e.target.reset()
      );

    db.collection('contacts').add({
      name: name,
      email: email,
      message: message
    })
    .then(() => {
      alert("Message has been submitted ");
    })
    .catch(error => {
      alert(error.message);
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact">
      <div className="contact_page">
        <div className="container">
          <div className="contact_heading">
            <h2>CONTACT</h2>
          </div>
          <div className="my_contacts">
            <div className="contact_picture">
              <img src="contact picture.png" alt="Picture" />
            </div>

            <div className="contact_form">
              <form ref={formRef} onSubmit={handleSubmit}>
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
                <div className="captcha">
                  {/* <ReCAPTCHA
                    sitekey="6LczU3opAAAAAEYbO-S2q32v7xMpgQ7x5TvE9cti"
                    onChange={() => setCaptchaChecked(true)} // Set captchaChecked to true on change
                    // size='compact'
                    // explicit
                  /> */}
                </div>
                <button type="submit"
                 className="google_captcha"
                 data-sitekey="6LczU3opAAAAAEYbO-S2q32v7xMpgQ7x5TvE9cti"
                 data-callback='onSubmit'
                 data-action='submit'

                >
                  
                  Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
