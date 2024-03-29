import React from "react";
import "./Skillspage.css";




function Skillspage() {
  return (
    <section id="myskills">
    <div className="skill_page">  
      <div className="container">
      <h2>SKILLS</h2>
        <div className="front_back">
          <div className="front">
            <div>
              <h3>FRONT-END</h3>
              <p>
              <img src="html-50.png" alt="" height={""}/>
                HTML <i className=" fa fa-battery-full html_icon"></i>{" "}
              85%</p>
              <p>
              <img src="css-50.png" alt="" height={""} />
                CSS <i className="fa fa-battery-full css-icon"></i>{" "}
                80%
              </p>
              <p>
               <img src="reactjs.png" alt="" height={50}/>
                 REACTJS
                <i className="fa fa-battery-three-quarters react_icon"></i>{" "}
                60%
              </p>
              <p>
               <img src="flutter.png" alt="" height={50}/>
                 FLUTTER
                <i className="fa fa-battery-three-quarters react_icon"></i>{" "}
                60%
              </p>
              <p>
              <img src="javascript.png" alt="" />
                JAVASCRIPT <i className="fa fa-solid fa-battery-half javaScript_icon"></i>{" "}
                50%
              </p>

              <p>
              <img src="visualbasic.png" alt="" />
                VISUAL BASIC <i className="fa fa-solid fa-battery-quarter vb-icon"></i>{" "}
                20%
              </p>
              
             
            </div>
          </div>

          <div className="back">
            <h3>
              <i className="" />
              BACKEND
            </h3>

            <p>
            <img src="sql.png" alt="" />
              SQL <i className="fa fa-battery-fa-solid fa-battery-half sql-icon"></i>{" "}
              50%
            </p>
            <p>
            <img src="mysql.png" alt="" />
              MYSQL <i className="fa fa-battery-three-quarters mysql_icon"></i>{" "}
              60%
            </p>
            <p>
            <img src="firebase.png" alt="" height={50} />
              FIREBASE <i className="fa fa-battery-three-quarters firebase_icon"></i>{" "}
              60%
            </p>

            <p>
            <img src="java.png
            " alt="" />
              JAVA <i className="fa fa-battery-three-quarters java_icon"></i>{" "}
              70%
            </p>

            <p>
            <img src="dart-50.png
            " alt="" />
              DART <i className="fa fa-battery-three-quarters java_icon"></i>{" "}
              70%
            </p>
            
            <p>
            <img src="python.png" alt="" />
              PYTHON <i className="fa fa-fa-solid fa-battery-half python_icon"></i>{" "}
              60%
            </p>
            {/* <p>
              <i className="fa fa-code" /> {" "}
              C++ <i className="fa fa-fa-solid fa-battery-half cplus_plus_icon"></i>{" "}
              60%
            </p> */}
          </div>
        </div>
      </div>
    </div>
    </section>
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
