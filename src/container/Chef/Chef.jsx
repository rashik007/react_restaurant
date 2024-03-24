import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.scss";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
            auctor sit iaculis in arcu.
          </p>
        </div>
        <p className="p__opensans">
          Vulputate nulla lobortis mauris eget sit. Nulla scelerisque
          scelerisque congue ac consequat, aliquam molestie lectus eu. Congue
          iaculis integer curabitur semper sit nunc.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Lui</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="chef signature"></img>
      </div>
    </div>
  </div>
);

export default Chef;
