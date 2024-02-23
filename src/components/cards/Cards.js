import "./Cards.css";
import React, { useContext } from "react";
import { EpiListContext } from "../../context/EpiListContext";

import { Card, Button } from "react-bootstrap";

export const Cards = (props) => {
  const { epiList, setEpiList } = useContext(EpiListContext);

  let { id, name, quantidadeEpi, image, preco, estoque, prodTotal } = props;

  //criar um objeto para controlar aqueles que serão adicionados no cartContext
  const objControl = {
    id,
    name,
    quantidadeEpi,
    image,
    preco,
    estoque,
    prodTotal
  };

  //se for = 0 seta o objControl completo, se não, seta apenas a quantidade
  const Adicionar = () => {
    if (!epiList.filter((obj) => obj.id === objControl.id).length > 0) {
      setEpiList([...epiList, objControl]);
    }
  };

  return (
    <Card
      border="secondary"
      style={{
        color: "white",
        width: "16rem",
        height: "300px",
        padding: "0",
        border: "0",
        margin: "20px",
        marginBottom: "0",
        display: "block",
        justifyContent: "center",
      }}
      bg="dark"
      text="white"
    >
      <Card.Header
        style={{
          padding: "0",
          // backgroundColor: "#edc3c4",
          width: "15rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "160px", width: "15rem", objectFit: "scale-down" }}
        />
      </Card.Header>
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "79px",
          // backgroundColor: "violet"
        }}
      >
        <Card.Text style={{ color: "white" }}>
          <strong>{name}</strong>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="priceButton">
          <div className="prodInfo">
            <span id="price">R$ {preco.toFixed(2)}</span>
            <span id="estoque">Estoque: {estoque}</span>
          </div>

          <Button
            className="buttonCard"
            onClick={Adicionar}
            style={{
              backgroundColor: "#f7d9d9",
              color: "rgb(13, 13, 88)",
              border: "none",
              marginTop: "11px",
              width: "100px",
              height: "40px",
              fontWeight: "bold",
            }}
          >
            Adicionar
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};
