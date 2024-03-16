import React, { useState } from "react";
import "./Aboutpage.css";

const Aboutpage = () => {
  // Define state to manage active tab
  const [activeTab, setActiveTab] = useState('education');

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="sec_2 show_animate" id="about">
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="sakhumzi.png" alt="Profile" />
            </div>

            <div className="about-col-2">
              <h2 className="sub-title">WHO I AM?</h2>
              <p>
              Hi, I am Kwaza Sakhumzi a Computer Science graduate with a software development Learnership at Capaciti,
              I possess a versatile skill set encompassing languages like HTML, CSS, JavaScript, ReactJs, Flutter, Dart, 
              Arduino, C++, VB.NET, Java, and Python. My adaptability, fostered through experiences like the MTN App Academy and hackathons, 
              enables me to navigate diverse programming environments effortlessly.
              </p>
              <br />
              <h4>WHAT I CAN DO?</h4>
              <div className="tab-title">
                
                <p className={`tab-skill ${activeTab === 'education' ? 'active-skill' : ''}`} onClick={() => handleTabClick('education')}>GRAPHIC DESIGNER</p>
                <p className={`tab-skill ${activeTab === 'skills' ? 'active-skill' : ''}`} onClick={() => handleTabClick('skills')}>FRONTEND DEVELOPER</p>
                <p className={`tab-skill ${activeTab === 'experience' ? 'active-skill' : ''}`} onClick={() => handleTabClick('experience')}>BACKEND DEVELOPER</p>
              </div>

              <div className={`tab-container ${activeTab === 'education' ? 'active-container' : ''}`} id="education">
                <ul>
                  <li>Customized graphic design solutions tailored to your brand.</li>
                  <li>Elevate your visual identity with my expert design services.</li>
                  <li>Transform your ideas into stunning visuals with my graphic design expertise.</li>
                </ul>
              </div>
              <div className={`tab-container ${activeTab === 'skills' ? 'active-container' : ''}`} id="skills">
                <ul>
                  <li>Crafting intuitive and seamless user interfaces.</li>
                  <li>Enhancing user experience and engagement.</li>
                  <li>Utilizing clean, responsive, and accessible web designs.</li>
                </ul>
              </div>
              <div className={`tab-container ${activeTab === 'experience' ? 'active-container' : ''}`} id="experience">
                <ul>
                  <li>Developing robust server-side architectures and databases.</li>
                  <li>Powering dynamic web apps with secure functionality.</li>
                  <li>Creating scalable and optimized databases for efficient performance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
