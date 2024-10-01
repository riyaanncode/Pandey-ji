// import React from 'react';
// import "./styleCss/navbar.css";

// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleNavigation = (path) => {
//     navigate(path); // Programmatically navigate
//   };
//   return (
//     <div className='nav-section'>
//       <div className='warper'>
//         <div className='title'>
//           <h1>RIYA PANDEY</h1>
//         </div>
//         <nav>
//           <ul className='navigation-bar'>
//           {/* <li><a href='Home'>Home </a></li> */}
//             <li><button onClick={() => handleNavigation('/')} className="link-button">Home</button></li>
//             <li><button onClick={() => console.log('Experience clicked')} className="link-button">Experience</button></li>
//             <li><button onClick={() => console.log('Skills clicked')} className="link-button">Skills</button></li>
//             <li><button onClick={() => console.log('Projects clicked')} className="link-button">Projects</button></li>
//             <li><button onClick={() => console.log('Contact clicked')} className="link-button">Contact</button></li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./styleCss/navbar.css";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//     setIsMenuOpen(false); // Close menu after clicking a link
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="nav-section">
//       <div className="warper">
//         <div className="title">
//           <h1>RIYA PANDEY</h1>
//         </div>
//         <div
//           className={`menu-icon ${isMenuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//         >
//           &#9776;
//         </div>
//         <nav className={`navigation-bar ${isMenuOpen ? "open" : ""}`}>
//           <ul>
//             <li>
//               <button
//                 onClick={() => handleNavigation("/")}
//                 className="link-button"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleNavigation("/experience")}
//                 className="link-button"
//               >
//                 Experience
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleNavigation("/skills")}
//                 className="link-button"
//               >
//                 Skills
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleNavigation("/projects")}
//                 className="link-button"
//               >
//                 Projects
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleNavigation("/contact")}
//                 className="link-button"
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./styleCss/navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-section">
      <div className="warper">
        <div className="title">
          <h1>RIYA PANDEY</h1>
        </div>
        <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">&times;</span> // Cross (X) icon
          ) : (
            <span className="hamburger-icon">&#9776;</span> // Hamburger icon
          )}
        </div>
        <nav className={`navigation-bar ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <button onClick={() => handleNavigation("/")} className="link-button">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/Experiance")} className="link-button">
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/Skills")} className="link-button">
                Skills
              </button>
            </li>
            {/* <li>
              <button onClick={() => handleNavigation("/Projects")} className="link-button">
                Projects
              </button>
            </li> */}
            <li>
              <button onClick={() => handleNavigation("/contact")} className="link-button">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
