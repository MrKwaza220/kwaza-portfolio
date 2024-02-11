import React from 'react';
// import { Radar } from 'react-chartjs-2';

// const FrontendSkillsChart = () => {
//     const data = {
//       labels: ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'Dart', 'Flutter'],
//       datasets: [
//         {
//           label: 'Frontend Development Skills',
//           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//           borderColor: 'rgba(255, 99, 132, 1)',
//           borderWidth: 2,
//           pointBackgroundColor: 'rgba(255, 99, 132, 1)',
//           pointBorderColor: '#fff',
//           pointHoverBackgroundColor: '#fff',
//           pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
//           data: [4, 4, 4, 3, 2, 2], // Sample skill ratings (out of 5)
//         },
//       ],
//     };
  
//     const options = {
//       scale: {
//         ticks: { beginAtZero: true, max: 5 },
//       },
//     };
  
//     return <Radar data={data} options={options} />;
//   };
  
//   const BackendSkillsChart = () => {
//     const data = {
//       labels: ['Java', 'Python', 'C++', 'Mysql', 'Firebase', 'NodeJs'],
//       datasets: [
//         {
//           label: 'Backend Development Skills',
//           backgroundColor: 'rgba(54, 162, 235, 0.2)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 2,
//           pointBackgroundColor: 'rgba(54, 162, 235, 1)',
//           pointBorderColor: '#fff',
//           pointHoverBackgroundColor: '#fff',
//           pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
//           data: [4, 3, 3, 3, 2, 4], // Sample skill ratings (out of 5)
//         },
//       ],
//     };
  
//     const options = {
//       scale: {
//         ticks: { beginAtZero: true, max: 5 },
//       },
//     };
  
//     return <Radar data={data} options={options} />;
//   };

//   const Skillspage = () => {
//     return (
//       <div>
//         <h1>Frontend Development Skills</h1>
//         <FrontendSkillsChart />
//         <h1>Backend Development Skills</h1>
//         <BackendSkillsChart />
//       </div>
//     );
//   };
  
//   export default Skillspage;
  



function Skillspage(){
    return(
<div className="page">
  
    <div className="my_skills">
        <i className="fa- fa-angle-left"></i>
        <ul className="myskills_list">
  
          <li className="block_skill">
            <h2>HTML</h2>
            <div className="skill">
              <span><i className="fa iconfonts fa-html5 fa-fade"></i></span>
            </div>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star-half-stroke"></i></span>
            </div>
          </li>
          
          
          <li className="block_skill">
            <h2>CSS</h2>
            <div className="skill">
              <span><i className="fa iconfonts fa-css3 fa-fade"></i></span>
            </div>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star-half-stroke"></i></span>
            </div>
          </li>
          <li className="block_skill">
            <h2>JAVASCRIPT</h2>
            <div className="skill">
                <span><i className="fa iconfonts fa-js"></i></span>
            </div>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star-half-stroke"></i></span>
              <span><i className="fa-regular fa-star"></i></span>
            </div>
          </li>
          <li className="block_skill">
            <h2>NODEJS</h2>
            <div className="skill">
              <span><i className="fa iconfonts fa-node-js fa-fade"></i></span>
            </div>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star-half-stroke"></i></span>
              <span><i className="fa-regular fa-star"></i></span>
            </div>
          </li>
          <li className="block_skill">
            <h2>REACT NATIVE</h2>
            <div className="skill">
                <span><i className="fa iconfonts fa-react fa-fade"></i></span>
            </div>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star-half-stroke"></i></span>
              <span><i className="fa-regular fa-star"></i></span>
            </div>
          </li>
        
          <li className="block_skill">
            <h2>JAVA</h2>
            <div className="skill">
              <span><i className="fa iconfonts fa-java fa-fade"></i></span>
            </div>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fa-regular fa-star"></i></span>
            </div>
          </li>
          <li className="block_skill">
            <h2>PYTHON</h2>
            <div className="skill">
              <span><i className="fa iconfonts fa-python fa-fade"></i></span>
            </div>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fa-regular fa-star"></i></span>
            </div>
          </li>
          <li className="block_skill">
            <h2>C++</h2>
            <div className="skill">
              <span><i className="fa iconfonts fa-plus fa-fade"></i></span>
            </div>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fa-regular fa-star"></i></span>
              <span><i className="fa-regular fa-star"></i></span>
            </div>
          </li>
        
          <li className="block_skill">
            <h2>MYSQL</h2>
            <div className="skill">
              <span><i className="fa iconfonts fa-database fa-fade"></i></span>
            </div>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fa-regular fa-star"></i></span>
            </div>
          </li>
  
         
        </ul>
        <i id="right" className="fa fa-angle-right"></i>
      </div>
</div>
    );
}
export default Skillspage;