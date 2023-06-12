import React from "react";
import "./headerNav.css";
import logo from "../photos/beat_blend_logo_1_transparent.png";

const HeaderNav = () => {
  return (
    <div className="mainHeaderContainer">
      <div className="headerNav">
        <img className="logoTop" src={logo}></img>
        <h1>Beat Blend</h1>
      </div>
    </div>
  );
};

export default HeaderNav;
