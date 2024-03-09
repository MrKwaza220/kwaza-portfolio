import React from "react";
import "./Aboutpage.css";

const Aboutpage = () => {
  // let sections = document.querySelectorAll("section");

  // window.onscroll = () => {
  //   sections.forEach((sec) => {
  //     let top = window.scrollY;
  //     let offset = sec.offsetTop - 150;
  //     let height = sec.offsetHeight;

  //     if (top >= offset && top < offset + height) {
  //       sec.classList.add("show_animate");
  //     } else {
  //       sec.classList.add("show_animate");
  //     }
  //   });
  // };

  return (
    <section className="sec_2 show_animate" id="about">
    <div className="page animate">
      <div className="container animate">
        <div className="about_myself animate">
          <div className="about_image animate">
            <img src="sakhumzi.png " alt="" className="animate" />
          </div>
          
          <div className="about_paragraph animate">
            <h2 className="animate">WHO I AM?</h2>
            <p className="my_paragraph animate">
             
              Hi, I am Kwaza Sakhumzi a Computer Science graduate with a software
              development Learnership at Capaciti, I possess a versatile skill
              set encompassing languages like HTML, CSS, JavaScript, ReactJs, 
              Flutter, Dart, Arduino, C++, VB.NET, Java, and Python. My adaptability,
              fostered through experiences like the MTN App Academy and hackathons, enables me
              to navigate diverse programming environments effortlessly.

              {/* Beyond coding, I find relaxation in watching football and
              engaging in FIFA gaming during weekends. */}
              Eager to contribute my technical proficiency and passion for innovation to challenging
              software development endeavors, I am actively seeking 
              opportunities to further enhance my skills and make a meaningful
              impact in the field.

              <p className="services">
                <h5>WHAT I CAN OFFER?</h5>
                <ul>
                  <li>
                    <div className="myservices">
                      <h6>FRONTEND DEVELOPERMENT</h6>
                      <p>Crafting intuitive and seamless user interfaces.</p>
                      <p>Enhancing user experience and engagement.</p>
                      <p>Utilizing clean, responsive, and accessible web designs.</p>

                    </div>
                  </li>
                  <li>
                    <div className="myservices">
                      <h6>BACKEND DEVELOPERMENT</h6>
                      <p>Building robust and scalable 
                        server-side architectures
                         and databases to power 
                         dynamic and efficient
                          web applications with
                         secure and optimized functionality.</p>
                    </div>
                  </li>
                  
                </ul>
              </p>
              
            </p>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
};
export default Aboutpage;
