import React from "react";
import "./Skillspage.css";

function Skillspage() {
  return (
    <div className="skill_page">
      <h2>Skills</h2>
      <div className="container">
        <div className="front_back">
          <div className="front">
            <div>
              <h3>Front-End Development</h3>
              <p>
                <i className="fa fa-html5" /> {" "}
                HTML <i className=" fa fa-battery-full skills-icons"></i>
              85%</p>
              <p>
                <i className="fa fa-css3" />{" "}
                CSS <i className="fa fa-battery-full skills-icons"></i>
                80%
              </p>
              <p>
                <i className="fa fa-react" />{" "}
                 REACTJS
              
                <i className="fa fa-battery-three-quarters skills-icons"></i>
                75%
              </p>
              <p>
                <i className="fa fa-js" />{" "}
                JAVASCRIPT <i className="fa fa-solid fa-battery-half skills-icons"></i>
                50%
              </p>
             
            </div>
          </div>

          <div className="back">
            <h3>
              <i className="" />
              Backend Development
            </h3>
            <p>
              <i className="fa fa-server " />{" "}
              SQL <i className="fa fa-battery-fa-solid fa-battery-half skills-icons"></i>
              50%
            </p>
            <p>
              <i className="fa fa-database" /> {" "}
              MYSQL <i className="fa fa-battery-three-quarters skills-icons"></i>
              60%
            </p>
            <p>
            <i className="fa fa-coffee"></i>{" "}
              JAVA <i className="fa fa-battery-three-quarters skills-icons"></i>
              70%
            </p>
            <p>
              <i className="fa fa-python" />{" "}
              PYTHON <i className="fa fa-fa-solid fa-battery-half skills-icons"></i>
              60%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skillspage;

{
  /* <FontAwesomeIcon icon="fa-solid fa-battery-full" />
<FontAwesomeIcon icon="fa-solid fa-battery-quarter" />
<FontAwesomeIcon icon="fa-solid fa-battery-half" />
<FontAwesomeIcon icon="fa-solid fa-battery-three-quarters" /> */
}

// function Skillspage(){
//     return(
// <div className="page">

//     <div className="my_skills">
//         <i className="fa- fa-angle-left"></i>
//         <ul className="myskills_list">

//           <li className="block_skill">
//             <h2>HTML</h2>
//             <div className="skill">
//               <span><i className="fa iconfonts fa-html5 fa-fade"></i></span>
//             </div>
//             <div className="rating">
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star-half-stroke"></i></span>
//             </div>
//           </li>

//           <li className="block_skill">
//             <h2>CSS</h2>
//             <div className="skill">
//               <span><i className="fa iconfonts fa-css3 fa-fade"></i></span>
//             </div>
//             <div className="rating">
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star-half-stroke"></i></span>
//             </div>
//           </li>
//           <li className="block_skill">
//             <h2>JAVASCRIPT</h2>
//             <div className="skill">
//                 <span><i className="fa iconfonts fa-js"></i></span>
//             </div>
//             <div className="rating">
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star-half-stroke"></i></span>
//               <span><i className="fa-regular fa-star"></i></span>
//             </div>
//           </li>
//           <li className="block_skill">
//             <h2>NODEJS</h2>
//             <div className="skill">
//               <span><i className="fa iconfonts fa-node-js fa-fade"></i></span>
//             </div>
//             <div className="rating">
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star-half-stroke"></i></span>
//               <span><i className="fa-regular fa-star"></i></span>
//             </div>
//           </li>
//           <li className="block_skill">
//             <h2>REACT NATIVE</h2>
//             <div className="skill">
//                 <span><i className="fa iconfonts fa-react fa-fade"></i></span>
//             </div>
//             <div className="rating">
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star-half-stroke"></i></span>
//               <span><i className="fa-regular fa-star"></i></span>
//             </div>
//           </li>

//           <li className="block_skill">
//             <h2>JAVA</h2>
//             <div className="skill">
//               <span><i className="fa iconfonts fa-java fa-fade"></i></span>
//             </div>
//             <div className="rating">
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fa-regular fa-star"></i></span>
//             </div>
//           </li>
//           <li className="block_skill">
//             <h2>PYTHON</h2>
//             <div className="skill">
//               <span><i className="fa iconfonts fa-python fa-fade"></i></span>
//             </div>
//             <div className="rating">
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fa-regular fa-star"></i></span>
//             </div>
//           </li>
//           <li className="block_skill">
//             <h2>C++</h2>
//             <div className="skill">
//               <span><i className="fa iconfonts fa-plus fa-fade"></i></span>
//             </div>
//             <div className="rating">
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fa-regular fa-star"></i></span>
//               <span><i className="fa-regular fa-star"></i></span>
//             </div>
//           </li>

//           <li className="block_skill">
//             <h2>MYSQL</h2>
//             <div className="skill">
//               <span><i className="fa iconfonts fa-database fa-fade"></i></span>
//             </div>
//             <div className="rating">
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fas fa-star"></i></span>
//               <span><i className="fa-regular fa-star"></i></span>
//             </div>
//           </li>

//         </ul>
//         <i id="right" className="fa fa-angle-right"></i>
//       </div>
// </div>
//     );
// }
// export default Skillspage;
