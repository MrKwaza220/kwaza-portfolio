import React from "react";
import "./Homepage.css";


const Homepage = () => {
  let sections = document.querySelectorAll('section');
  const spacing = 10;
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
  
      if (top >= offset && top < offset + height) {
        sec.classList.add('show_animate');
      } else {
        sec.classList.remove('show_animate');
      }
    });
  };

  return (
  <section className="show_animate sec_1" id="home">
    <div className="homepage_active animate">
      <div className="container animate" >
        <div className="homepage_picture animate" style={{ 'i':0}}>
          <div className="homepage_picture_background animate" style={{ 'i':1}}>
            <img className="homepage_image animate" alt="" src="sakhumzi.png"></img>
          </div>
        </div>

        <div className="homepage_left-content animate" >
          <div className="homepage_names animate " style={{ 'i':2}}>
            <div className="my_name animate" >HI, I'M SAKHUMZI </div>
            <div className="job_name animate" >A JUNIOR DEVELOPER</div>
          </div>
      
          <div className="Icons_button animate  ">
            <div className="homepage_icons animate" style={{ 'i':3}}>
              <a href="#">
                <i className="fa fa-instagram animate"></i>
              </a>
              <a href="https://www.linkedin.com/in/sakhumzi-kwaza-2690351b9/">
                <i className="fa fa-linkedin animate"></i>
              </a>

              <a href="https://github.com/MrKwaza220?tab=repositories">
                <i className="fa fa-github animate"></i>
              </a>
              <a href="Sakhumzi cv.pdf" download className="animate" style={{ 'i':4}}>
                <button>Download cv</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
export default Homepage;