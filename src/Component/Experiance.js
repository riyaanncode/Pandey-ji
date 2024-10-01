// import React from 'react'
// import './styleCss/experiance.css';
// import AnncodeLogo from './dataComponent/profile-img/AnncodeLogo.png'

// const Experiance = () => {
//   return (
//     <div className='Experiance-section'>
//     <div className='experiance-container'>
//       <div className='experiance-wraper'>
//         <h2 className='heading-experiance'>Experiance</h2>
//         <div className='exper-section-boxs'>
//           <div className='box1'>
//             <h2> Frontend Software Devloper internship </h2>
//             <p className='time-line'> 20 May 2023 -10 Oct 2023 </p>
//             <p className='place-Name'><pre className='anncodelogo'><img src={AnncodeLogo} width='50px' height='50px'/></pre> Ann Pro IT Solution Bhopal (MP) </p>
//           </div>
//           <div className='box2'>
//             <h2> Frontend Software Devloper</h2>
//             <p className='time-line'> 1 Nov  2023 - Prasent </p>
//             <p className='place-Name'> Ann Pro IT Solution Bhopal (MP)</p>
//           </div>
//         </div>

//       </div>
//     </div>

//     </div>
//   )
// }

// export default Experiance

import React from "react";
import "./styleCss/experiance.css";
import AnncodeLogo from "./dataComponent/profile-img/AnncodeLogo.png";

const Experiance = () => {
  return (
    <div className="experiance-section">
      <div className="experiance-container">
        <div className="experiance-wraper">
          <h2 className="heading-experiance">Experience</h2>
          <div className="exper-section-boxs">
            <div className="box1">
              <div className="company-logo">
                <img
                  src={AnncodeLogo}
                  alt="Anncode Logo"
                  className="anncode-logo"
                />
              </div>
              <div className="experience-details">
                <h2>Frontend Software Developer Internship</h2>
                <p className="time-line">20 May 2023 - 10 Oct 2023</p>
                <p className="place-Name">Ann Pro IT Solution, Bhopal (MP)</p>
              </div>
            </div>

            <div className="box2">
              <div className="company-logo">
                <img
                  src={AnncodeLogo}
                  alt="Anncode Logo"
                  className="anncode-logo"
                />
              </div>
              <div className="experience-details">
                <h2>Frontend Software Developer</h2>
                <p className="time-line">1 Nov 2023 - Present</p>
                <p className="place-Name">Ann Pro IT Solution, Bhopal (MP)</p>
              </div>
            </div>
            <div className="box2">
              <h4 className="Workrd-details">Worked Details  </h4>
              <p className="worked-on">
              <p className="shopify-plus">
              Shopify Plus
              </p>
                
                <p>
                  theme implementation & customization, Liquid & create Responsive Desgin
                </p>
               <p>
                Multibuy App (Frontend)
               </p>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
