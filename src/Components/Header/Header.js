import React from "react";
import logo from "../../../src/images/heroteam.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header d-flex flex-column justify-content-center align-items-center">
      <img src={logo} alt="" />
      <h1>Hero Competitive Programming Club</h1>
      <h4>
        <b>Creating World's Best Competitive Programming Team</b>
      </h4>
      <h2>Total Budget : $1000M </h2>
    </div>
  );
};

export default Header;
