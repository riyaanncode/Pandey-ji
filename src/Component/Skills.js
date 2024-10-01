import React from "react";
import HtmlLogo from "./dataComponent/profile-img/html-logo.png";
import CssLogo from "./dataComponent/profile-img/css.png";
import JavaScriptLogo from "./dataComponent/profile-img/jslogo.png";
import ReactLogo from "./dataComponent/profile-img/react.png";
import NodeLogo from "./dataComponent/profile-img/nodejs.png";
import MongoDBLogo from "./dataComponent/profile-img/mongo-logo.jpeg";
import ShopiftLogo from "./dataComponent/profile-img/shopify-logo.png";
import "./styleCss/Skills.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-warper">
        <div className="skills-content">
          <h2 className="title-skills">Skills</h2>
          <div className="all-skills">
            <span className="skilss-boxs">
              <span className="skills-box1">
                <img
                  src={HtmlLogo}
                  width="20px"
                  height="20px"
                  className="img-con"
                  alt="no-img"
                />
                <h4>HTML</h4>
              </span>
              <span className="skills-box1 box-1">
                <img
                  src={CssLogo}
                  width="20px"
                  height="20px"
                  className="img-con"
                  alt="no-img"
                />
                <h4>CSS</h4>
              </span>

              <div className="skills-box1 box-3 ">
                <img
                  src={JavaScriptLogo}
                  width="20px"
                  height="20px"
                  className="img-con"
                  alt="no-img"
                />
                <h4>JAVASCRIPT</h4>
              </div>
              <div className="skills-box1 box-4 ">
                <img
                  src={ReactLogo}
                  width="20px"
                  height="20px"
                  className="img-con"
                  alt="no-img"
                />
                <h4>React Js</h4>
              </div>
              <div className="skills-box1 box-5 ">
                <img
                  src={NodeLogo}
                  width="20px"
                  height="20px"
                  className="img-con"
                  alt="no-img"
                />
                <h4>NodeJs</h4>
              </div>
              <div className="skills-box1 box-6 ">
                <img
                  src={MongoDBLogo}
                  width="20px"
                  height="20px"
                  className="img-con"
                  alt="no-img"
                />
                <h4>MongoDB</h4>
              </div>
              <div className="skills-box1 box-6 ">
                <img
                  src={ShopiftLogo}
                  width="20px"
                  height="20px"
                  className="img-con"
                  alt="no-img"
                />
                <h4>Shopify & Shopify Plus</h4>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
