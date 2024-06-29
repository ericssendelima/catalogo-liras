import "./Cards.css";
import React, { useContext, useState } from "react";
import { EpiListContext } from "../../context/EpiListContext";

import { Card } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";
import Descricao from "../Descricao/Descricao";

export const Cards = (props) => {
  const { epiList, setEpiList } = useContext(EpiListContext);

  let { id, name, quantidadeEpi, image, preco, estoque, prodTotal, descricao, categoria } = props;

  //criar um objeto para controlar aqueles que serão adicionados no cartContext
  const objControl = {
    id,
    name,
    quantidadeEpi,
    image,
    preco,
    estoque,
    prodTotal,
    descricao,
    categoria
  };

  const [openDescription, setOpenDescription] = useState(false);

  //funcões
  const Adicionar = () => {
    if (!epiList.filter((obj) => obj.id === objControl.id).length > 0) {
      setEpiList([...epiList, objControl]);
    }
  };

  const detalhes = () => {
    setOpenDescription(!openDescription);
  };

  return (
    <Card
      style={{
        width: "150px",
        height: "260px",
        padding: "0",
        border: "none",
        margin: "8px",
        marginBottom: "10px",
        display: "block",
        justifyContent: "center",
        backgroundColor: "#457B9D",
        // boxShadow: "0 0 3px black",
        borderRadius: "8px",
      }}
    >
      <Card.Header
        style={{
          padding: "0",
          paddingTop: "4px",
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          border: "none",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "130px", width: "6rem", objectFit: "scale-down" }}
        />
      </Card.Header>
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "69px",
          padding: "0 6px 0 5px",
          backgroundColor: "white",
        }}
      >
        <Card.Text
          style={{ color: "black", fontSize: "14px", textAlign: "center" }}
        >
          <strong>{name}</strong>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="priceButton">
          <div className="prodInfo">
            <span id="price">R$ {preco.toFixed(2)}</span>
            {/* <span id="estoque">Estoque: {estoque}</span> */}
            <span id="saibaMais" onClick={() => detalhes()}>
              Descrição
            </span>
          </div>

          <button id="buttonCard" onClick={Adicionar}>
            <span id="adicionar">
              <MdAddShoppingCart />
            </span>
          </button>
        </div>
      </Card.Footer>
      {openDescription && (
        <Descricao
          product={objControl}
          openDescription={{ openDescription, setOpenDescription }}
        />
      )}
    </Card>
  );
};
