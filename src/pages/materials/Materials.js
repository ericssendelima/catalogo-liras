import "./Materials.css";
import "dotenv/config";

import React, { useContext, useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";

import { EpiListContext } from "../../context/EpiListContext";

import { Cards } from "../../components/cards/Cards.js";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Footer from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header.js";

const Materials = () => {
  const navigate = useNavigate();

  const { epiList } = useContext(EpiListContext);

  const [itens2, setItens2] = useState([]);

  const baseURL = process.env.REACT_APP_BASE_URL;



  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(baseURL);

        const data = res.data;
        await sessionStorage.setItem("produtos", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }

      await setItens2(JSON.parse(sessionStorage.getItem("produtos")));
    };

    if (sessionStorage.length === 0) {
      getData();
    } else {
      setItens2(JSON.parse(sessionStorage.getItem("produtos")));
    }
  }, [baseURL]);

  const Concluir = async () => {
    navigate("/Cart");
  };

  return (
    <div className="materials">
      <Header />
      <h2>Catálogo de produtos</h2>
      <div className="divMaterialsList">
        <ol className="materialsList" style={{ padding: "0" }}>
          {itens2.map(
            (item) =>
              !epiList.filter((epi) => epi.id === item.id).length > 0 && (
                <li className="materialItems" key={item.id}>
                  <Cards
                    id={item.id}
                    name={item.name}
                    quantidadeEpi={item.quantidade}
                    image={item.image}
                    preco={item.preco}
                    estoque={item.estoque}
                    prodTotal={item.prodTotal}
                  />
                </li>
              )
          )}
        </ol>
      </div>
      <div className="footerList">
        <Button
          id="concluir"
          style={{
            height: "50px",
            width: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            boxShadow: "0 0 30px rgb(13, 13, 50, 0.9)",
            position: "fixed",
            bottom: "6.5%",
            right: "16px",
            zIndex: "1",
            color: "rgb(13, 13, 88)",
            backgroundColor: "#f7d9d9",
            border: "none",
            fontWeight: "bold",
          }}
          variant="info"
          size="lg"
          onClick={Concluir}
        >
          <BsCartCheck />
          <span id="visorCarrinho">{epiList.length}</span>
        </Button>

        <Button
          id="subir"
          style={{
            height: "50px",
            width: "50px",
            fontWeight: "bold",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: "6.5%",
            left: "16px",
            zIndex: "1",
            color: "rgb(13, 13, 88)",
            backgroundColor: "#f7d9d9",
            border: "none",
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          {"^"}
        </Button>
      </div>
      <div className="footerLogo">
        <Footer />
      </div>
    </div>
  );
};

export default Materials;
