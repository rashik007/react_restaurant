import React from "react";

import { images } from "../../constants";
import "./Header.scss";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the New FLavor" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Welcome to the ultimate course, where you will learn how to take Figma
        designs, turn them into four modern, responsive, beautifully-designed
        applications, and get hired as a front-end developer.{" "}
      </p>
      <button type="button" className="custom__button">
        Explore More
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
    {/* <div className="app__wrapper_img"></div> */}
  </div>
);

export default Header;
