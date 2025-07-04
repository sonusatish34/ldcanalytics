import React from "react";

import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="top__nav-right">
          
          <div className="header_text">
            Long Drive Cars Analytics Data
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
