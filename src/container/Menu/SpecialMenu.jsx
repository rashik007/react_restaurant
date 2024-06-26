import React from "react";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.scss";
import { images, data } from "../../constants";

const SpecialMenu = () => (
  <div className="app_specialMenu flex__center section__padding">
    SpecialMenu
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app_specialMenu-menu_heading">Wine & Beer</p>
        <div className="app_specialMenu-menu_items ">
          {data.wines.map((wine, index) => (
            // <p>{wine.title}</p>
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu-img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app_specialMenu-menu_heading">Wine & Beer</p>
        <div className="app_specialMenu-menu_items ">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "1rem" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
