import React from "react";
import "./Aboutpage.css";

const Aboutpage =()=> {
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
  
    if(top >= offset && top < offset + height){
      sec.classList.add('about_animate');

    }
    else{
      sec.classList.add('about_animate')
    }
  });
}


  return (
    <section className="sec_2 about_animate">

    <div className="page">
      <div className="container">
        <div className="about_myself">
          
          <div className="about_image animate">
            <img src="sakhumzi.png " alt="messi" className="animate"/>
          </div>
          
          <div className="about_paragraph">
          <h2 className="animate">WHO I AM?</h2>
            {/* <div className="symbol">SAKHUMZI</div> */}
            <p className="my_paragraph animate">

              I am a Hardworking, highly motivated junior developer eager to
              lend combined knowledge and skills to enhance business
              performance. Operates well in both individual and team capacities,
              leveraging seasoned work ethic to quickly adapt to different
              processes and drive company objectives. Resourceful and
              results-driven with a passion for growth and efficiency to meet
              company needs and increase service value.
            </p>

            <div className="wrapper animate">
              <a className="button animate" href="#contact">
                Contact Me
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
export default Aboutpage;