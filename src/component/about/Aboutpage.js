import React from "react";
import "./Aboutpage.css";

const Aboutpage = () => {
  let sections = document.querySelectorAll("section");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;

      if (top >= offset && top < offset + height) {
        sec.classList.add("show_animate");
      } else {
        sec.classList.add("show_animate");
      }
    });
  };

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
              {/* <div className="symbol">SAKHUMZI</div> */}
              <p className="my_paragraph animate">
                {/* I am a Hardworking, highly motivated junior developer eager to
                lend combined knowledge and skills to enhance business
                performance. Operates well in both individual and team
                capacities, leveraging seasoned work ethic to quickly adapt to
                different processes and drive company objectives. Resourceful
                and results-driven with a passion for growth and efficiency to
                meet company needs and increase service value. */}
                Hi, I am recent Computer Science graduate with a software
                development learnership at Capaciti, I possess a versatile skill
                set encompassing languages like HTML, CSS, JavaScript, ReactJs, 
                Flutter, Dart, Arduino, C++,
                VB.NET, Java, and Python. My adaptability, fostered through
                experiences like the MTN App Academy and hackathons, enables me
                to navigate diverse programming environments effortlessly.
                Beyond coding, I find relaxation in watching football and
                engaging in FIFA gaming during weekends. Eager to contribute my
                technical proficiency and passion for innovation to challenging
                software development endeavors, I am actively seeking
                opportunities to further enhance my skills and make a meaningful
                impact in the field.
              </p>
              {/* <div className="myboxes">
              <h5>SERVICES</h5>
              <div className="boxes">
                
                <div className="boxes_1">
                  <div className="box_1">
                    <h6>Graphic Design</h6>
                  </div>
              
                </div>

                <div className="boxes_2">
                  <div className="box_3">
                  <h6>Front End</h6>
                  </div>
                 
                </div>

                <div className="boxes_3">
                  <div className="box_5">
                  <h6>Backend developer</h6>
                  </div>
                </div>
              </div>
              </div> */}

              {/* <div className="wrapper animate">
              <a className="button animate" href="#contact">
                Contact Me
              </a>
              
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aboutpage;
