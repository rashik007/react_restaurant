import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant" style={{ color: "white" }}>
      {title}
    </p>
    <img src={images.spoon} alt="divider spoon" />
  </div>
);
export default SubHeading;
