import "./Materials.css";

import React, { useContext, useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { FaChevronUp } from "react-icons/fa";


import { EpiListContext } from "../../context/EpiListContext";

import { Cards } from "../../components/cards/Cards.js";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header.js";

import { onValue, ref } from "firebase/database";

import { db } from "../../firebase/config";

const Materials = () => {
  const navigate = useNavigate();

  const { epiList } = useContext(EpiListContext);

  const [itens2, setItens2] = useState([]);

  useEffect(() => {
    onValue(
      ref(db, `products/`),
      (snapshot) => {
        setItens2([]);
        const data = snapshot.val();


        if (data !== undefined) {
          setItens2([...Object.values(data)]);
        } 
      },
      (error) => alert(error)
    );
  }, []);



  const Concluir = async () => {
    navigate("/Cart");
  };

  return (
    <div className="materials">
      <Header />
      <h2 id="tituloCatalogo">Catálogo</h2>
      <div className="divMaterialsList">
        <ol id="materialsList" style={{ padding: "0" }}>
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
                    descricao={item.descricao}
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
            height: "45px",
            width: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            boxShadow: "0 0 5px black",
            position: "fixed",
            bottom: "15px",
            right: "16px",
            zIndex: "1",
            color: "black",
            backgroundColor: "#77abbd",
            border: "1px solid black",
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
            height: "45px",
            width: "45px",
            fontWeight: "bold",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 5px black",
            position: "fixed",
            bottom: "15px",
            left: "16px",
            zIndex: "1",
            color: "black",
            backgroundColor: "#77abbd",
            border: "1px solid black",
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaChevronUp />
        </Button>
      </div>
      <div className="footerLogo">
        <Footer />
      </div>
    </div>
  );
};

export default Materials;
