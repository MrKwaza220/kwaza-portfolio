import React from "react";
import "./about.css"

export default function about() {
    return (
        <div className="page">
        <div className="container">
            <div className="about_myself">
                <div className="about_image">
                    {/* <img src="Images/Blank 2 Grids Collage2.png"> */}
                </div>
                <div className="about_paragraph">
                    <h2>About Me</h2>
                    <p>
                      Hi! I'm Sakhumzi Kwaza, a motivated Junior Developer with a strong coding background and a passion for software development. 
                      My experience includes participation in a challenging hackathon program, providing valuable technical exposure. 
                      Currently engaged in a Software Development Learnership, I collaborate on projects involving API design and micro-services architecture. 
                      I bring a combination of strong analytical skills, excellent problem-solving, and effective time management to the table. 
                      Proficient in Java, JavaScript, Python, and more, I'm a fast learner and flexible team player committed to both personal and professional growth. 
                      Explore my portfolio for a closer look at my projects and experiences. Let's connect and explore how I can contribute to your team!
                    </p>
        
                    <div className="wrapper">
                         <a className="button" href="#contact">Contact Me</a>
                        <a className="button" href="#contact">Contact Me</a>
                    </div>
                    
                </div>
            </div>
            
        </div> 
    </div>
    );
}