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
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [messageTimeout, setMessageTimeout] = useState(null); // State variable to hold timeout for error/success message

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!captchaChecked) {
    //     setErrorMessage('Please check CAPTCHA before submitting.');
    //     return;
    //   }

    if (message.trim() === "") { 
      setErrorMessage("Please fill the message field.");

      // Clear previous timeout (if any)
      clearTimeout(messageTimeout);

      // Set new timeout to clear the error message after 3 seconds
      setMessageTimeout(setTimeout(() => {
        setErrorMessage("");
      }, 3000));

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
        }
      );

    db.collection('contacts').add({
      name: name,
      email: email,
      message: message
    })
    .then(() => {
      setSubmitted(true);

      // Clear previous timeout (if any)
      clearTimeout(messageTimeout);

      // Set new timeout to clear the success message after 3 seconds
      setMessageTimeout(setTimeout(() => {
        setSubmitted(false);
      }, 3000));
    })
    .catch(error => {
      setErrorMessage(error.message); 

      // Clear previous timeout (if any)
      clearTimeout(messageTimeout);

      // Set new timeout to clear the error message after 3 seconds
      setMessageTimeout(setTimeout(() => {
        setErrorMessage("");
      }, 3000));
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
                {/* <div className="captcha">
                  <ReCAPTCHA
                    sitekey="6LczU3opAAAAAEYbO-S2q32v7xMpgQ7x5TvE9cti"
                  />
                </div> */}
                <button type="submit">Submit</button>
                {submitted && <p style={{ color: 'green', textAlign: 'center' }}>Message has been submitted</p>}
                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
