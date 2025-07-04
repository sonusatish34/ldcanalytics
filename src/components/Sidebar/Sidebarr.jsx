import React from "react";

import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import Logo from "../../assets/images/logo-white.webp";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2 style={{paddingTop:'20px'}}>
          <img  src={Logo}></img>
        </h2>
      </div>

      <div className="sidebar__content">
        

      </div>
    </div>
  );
};

export default Sidebar;
