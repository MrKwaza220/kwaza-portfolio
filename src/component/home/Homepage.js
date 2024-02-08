import React from "react";
import Typical from "react-typical";
import "./Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Homepage() {
  return (
    <div className="homepage_active">
      {/* <!--Navigation BAR--> */}
      
      
      <div className="homepage_logo">
        <i className="Name">Kwaza</i>
      </div>

      <div className="navigation">
        <ul className="navigation-bar" id="navbar">
          <li>
            <a href="#home" className="underline">
              <span>Home</span>
              <span>
                <i className="fa-solid fa-house" aria-hidden="true"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="#about_me" className="underline">
              <span>About Me</span>
              <span>
                <i className="fa-solid fa-address-card" aria-hidden="true"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="#myjourney" className="underline">
              <span>Journey</span>
              <span>
                <i className="fa-solid fa-school" aria-hidden="true"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="#my_skills" className="underline">
              <span>Skills</span>
              <span>
                <i className="fa-solid fa-laptop-code" aria-hidden="true"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="#myproject" className="underline">
              <span>Project</span>
              <span>
                <i className="fa-solid fa-code" aria-hidden="true"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="#contact" className="underline">
              <span>Contact</span>
              <span>
                <i className="fa-solid fa-address-book" aria-hidden="true"></i>
              </span>
            </a>
          </li>
          {/* <h2>View Count: <span id="viewCount">0</span></h2> */}
          {/* <i className="fas fa-times"></i> */}
        </ul>
        {/* <i className="fas fa-bars" id="menu-icon"></i> */}
      </div>

      <div className="homepage_content">
        <div className="homepage_left-content">
          <div className="homepage_names">
            <div className="my_name">HI, I'M SAKHUMZI</div>

            <div className="job_name">JUNIOR DEVELOPER</div>
          </div>
          <div className="homepage_icons">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/sakhumzi-kwaza-2690351b9/">
              <i className="fa fa-linkedin"></i>
            </a>

            <a href="https://github.com/MrKwaza220?tab=repositories">
              <i className="fa fa-github"></i>
            </a>
          </div>
          {/* <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i> */}

          <div className="downloadbtn">
            <button>
              <a href="Images/portfolio cv.pdf" download className="btn">
                download cv
              </a>
            </button>
          </div>
        </div>

        <div className="homepage_picture">
          <div className="homepage_picture_background">
            <img className="homepage_image" alt="" src="messi.jpg" height={"340"} width={"350"}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="homepage_container">
//   <div className="homepage_parent">
//     <div className="homepage_details">
//       <div className="homepage_icons">
//         <div className="homepage_icons_icolz">
//           <a href="#">
//             <i className="fa fa-facebook-square"></i>
//           </a>
//           <a href="#">
//             <i className="fa fa-instagram-square"></i>
//           </a>
//           <a href="https://www.linkedin.com/in/sakhumzi-kwaza-2690351b9/">
//             <i className="fa fa-linkedin"></i>
//           </a>
//           <a href="https://github.com/MrKwaza220?tab=repositories">
//             <i className="fa fa-github"></i>
//           </a>
//         </div>
//       </div>

//       <div className="homepage_details_name">
//         <span className="primary_text">
//           {" "}
//           Hello, I'm <span className="highlighted_text">Sakhumzi</span>
//         </span>

//       </div>
//       <div>
//         <span className="primary_text_tagline">
//             The easiest way to get icons on your website is with a Kit.
//         </span>
//       </div>
//       <div className="homepage_details_role">
//         <span>
//           {" "}
//           <h1>
//             {" "}
//             <Typical
//               loop={Infinity}
//               steps={[
//                 "Frontend Dev",
//                 1000,
//                 "Software Dev",
//                 1000,
//                 "Backend Dev",
//                 1000,
//               ]}
//             />
//           </h1>
//         </span>
//       </div>
//       <div className="homepageButtons">
//         <a href="images/large_devices.pdf" download="">
//           <button className="download_button"> download cv </button>
//         </a>
//         <a href="images/large_devices.pdf" download="">
//           <button className="download_button"> download cv </button>
//         </a>
//       </div>
//       <div className="homepage_picture">
//         <div className="homepage_picture_background">

//         </div>
//       </div>
//     </div>
//   </div>
// </div>
