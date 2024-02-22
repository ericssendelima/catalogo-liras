import React from "react";

import "./Footer.css";
import logo from "../../images/logo.png";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Instagram">
      <span className="insta">Siga-nos </span>
        <a rel="Lira's Instagram" href="https://instagram.com/liras.cosmeticos">
          <FaInstagram />
        </a>
      </div>

      <div className="LogoFooter">
        <img src={logo} alt="logo" className="lirasFooter" />
      </div>
      <p className="pFooter">
        Copyright Lira's Cosméticos - 2024
      </p>
    </div>
  );
};

export default Footer;
