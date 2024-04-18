import React, { useContext, useEffect, useState } from "react";

import logo from "../../images/nome_liras_azul-removebg-preview.png";

import { EpiListContext } from "../../context/EpiListContext";


import "./Header.css"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [totalTeste, setTotalTeste] = useState(0);

  const { epiList } = useContext(EpiListContext);


  useEffect(() => {
    let n = 0;
    if (epiList.length > 1) {
      epiList.map((prod) => (n += prod.prodTotal));
      setTotalTeste(n);
    } else {
      epiList.map((prod) => setTotalTeste(prod.prodTotal));
    }
  }, [epiList]);

  const home = () => navigate("/");
  return (
    <div className="Header">
      <div className="Logo">
      <button className="instaButton" onClick={home}><img src={logo} alt="logo" className="liras" /></button>
      </div>
      <span id="totalBuy">
          <p id="pTotal">Total do pedido</p>{" "}
          <span id="valorTotal">R$ {totalTeste.toFixed(2)}</span>
        </span>
    </div>
  );
};

export default Header;
