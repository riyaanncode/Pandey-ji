// import React from "react";
// import React, { useState } from 'react';
// import "./styleCss/home.css";
// import Pdf from "../pdf/RIYA-PANDEY-RESUME (1).pdf";
// import dataComponent from "./dataComponent/profile-img/profileImg.jpeg";
// const Home = () => {
//   const [bgColor, setBgColor] = useState('lightblue');

//   const handleImageClick = () => {
//     // Cycle through colors: purple -> pink -> blue
//     if (bgColor === 'purple') {
//       setBgColor('pink');
//     } else if (bgColor === 'pink') {
//       setBgColor('blue');
//     } else {
//       setBgColor('purple');
//     }
//   };
//   return (
//     <>
//       <div className="container">
//         <div className="left-container">
//           <div className="content-section">
//             <div className="content-data">
//               <h1>I Am Frontend Devloper</h1>
//               <a
//                 className="download-cv"
//                 href={Pdf}
//                 download="RIYA-PANDEY-RESUME (1).pdf"
//                 title="Download Resume"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="right-container" style={{ backgroundColor: bgColor }} >
//           <div className="img-container">
//             <div className="img-containt"  >
//               <img
//                 src={dataComponent}
//                 alt="your profile is not show "
//                 width="20%"
//                 height="20%"
//                 className="profile-img"
//                 onClick={handleImageClick}
               
//               />
//             </div>
//           </div>
//           helo
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import "./styleCss/home.css";
// import Pdf from "../pdf/RIYA-PANDEY-RESUME (1).pdf";
// import dataComponent from "./dataComponent/profile-img/profileImg.jpeg";

// const Home = () => {
//   const [bgColor, setBgColor] = useState('lightblue');

//   // const handleImageClick = () => {
//   //   // Cycle through colors: purple -> pink -> blue
//   //   if (bgColor === 'purple') {
//   //     setBgColor('pink');
//   //   } else if (bgColor === 'pink') {
//   //     setBgColor('blue');
//   //   } else {
//   //     setBgColor('purple');
//   //   }
//   // };

//   return (
//     <div className="container">
//       <div className="left-container">
//         <div className="content-section">
//           <div className="content-data">
//             <h1>I Am Frontend Developer</h1>
//             <a
//               className="download-cv"
//               href={Pdf}
//               download="RIYA-PANDEY-RESUME (1).pdf"
//               title="Download Resume"
//             >
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="right-container" style={{ backgroundColor: bgColor }}>
//         <div className="img-container">
//           <div className="img-containt">
//             <img
//               src={dataComponent}
//               alt="Profile"
//               className="profile-img"
//               onClick={handleImageClick}
//             />
//           </div>
//         </div>
//         <p>Hello</p>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
import "./styleCss/home.css";
import Pdf from "../pdf/RIYA-PANDEY-RESUME (1).pdf";
import dataComponent from "./dataComponent/profile-img/profileImg.jpeg";

const Home = () => {
  // const [bgColor, setBgColor] = useState('');

  // const handleImageClick = () => {
  //   if (bgColor === 'purple') {
  //     setBgColor('pink');
  //   } else if (bgColor === 'pink') {
  //     setBgColor('blue');
  //   } else {
  //     setBgColor('purple');
  //   }
  // };

  return (
    <div className="container">
      <div className="left-container">
        <div className="content-section">
          <div className="content-data">
            <h1>I Am Frontend Developer</h1>
            <a
              className="download-cv"
              href={Pdf}
              download="RIYA-PANDEY-RESUME (1).pdf"
              title="Download Resume"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="img-container">
          <div className="img-containt">
            <img
              src={dataComponent}
              alt="Profile"
              className="profile-img"
              // onClick={handleImageClick}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;

