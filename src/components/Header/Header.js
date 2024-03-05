import React from "react";
import logo from "../../images/Nova_logo_lira_s_2-removebg-preview (1).png";

import "./Header.css"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const home = () => navigate("/");
  return (
    <div className="Header">
      <div className="Logo">
      <button className="instaButton" onClick={home}><img src={logo} alt="logo" className="liras" /></button>
      </div>
    </div>
  );
};

export default Header;
