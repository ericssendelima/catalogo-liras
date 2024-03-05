import { useState, useContext } from "react";
import { EpiListContext } from "../../context/EpiListContext";

import { Button, Image } from "react-bootstrap";
import { ImBin } from "react-icons/im";

import "./CardsCart.css";

const CardsCart = (props) => {
  const { epiList, setEpiList } = useContext(EpiListContext);

  let { id, name, quantidadeEpi, image, preco, prodTotal } = props;

  const [quantity, setQuantity] = useState(quantidadeEpi);
  const [totalPrice, setTotalPrice] = useState(preco * quantity);

  const objControl = {
    id,
    name,
    quantidadeEpi,
    image,
    preco,
    prodTotal,
  };

  //funções
  const sum = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);

    let newArr = epiList.map((obj) => {
      if (obj.name === objControl.name) {
        obj.quantidadeEpi = quantity + 1;
        obj.prodTotal = preco * (quantity + 1);
      }
      return obj;
    });
    setEpiList(newArr);
    setTotalPrice(preco * (quantity + 1));
  };

  const sub = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setTotalPrice(preco * (quantity - 1));

      let newArr = epiList.map((obj) => {
        if (obj.name === objControl.name) {
          obj.quantidadeEpi = quantity - 1;
          obj.prodTotal = preco * (quantity - 1);
        }
        return obj;
      });
      setEpiList(newArr);
    } else {
      setEpiList((prevEpiList) => {
        return prevEpiList.filter((epi) => objControl.id !== epi.id);
      });
    }
  };

  const Excluir = () => {
    setEpiList((prevEpiList) => {
      return prevEpiList.filter((epi) => objControl.id !== epi.id);
    });
  };

  return (
    <div className="container">
      <div className="header">
        <Image
          style={{
            // height: "auto",
            objectFit: "scale-down",
            width: "80px",
            height: "100%",
            marginRight: "15px",
            boxSizing: "border-box",
            backgroundColor: "white",
            backgroundSize: "cover",
          }}
          src={props.image}
          rounded
        />

        <div className="info">
          <h5 id="prodName">{props.name}</h5>
          <h6 id="valorProd">Valor: R$ {totalPrice.toFixed(2)}</h6>

          <div className="footer">
            <div className="controls">
              <Button
                className="button"
                variant="info"
                size="sm"
                onClick={sub}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  margin: "0",
                  fontWeight: "bold",
                  color: "rgb(13, 13, 88)",
                  backgroundColor: "#38b6ff",
                  border: "none",
                  boxShadow: "0 0 5px black",
                }}
              >
                {"-"}
              </Button>

              <p
                id="quantidade"
                style={{
                  margin: "0",
                  padding: "5px",
                  fontWeight: "bold",
                  height: "29px",
                  width: "25px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 5px black",
                }}
              >
                {quantity}
              </p>

              <Button
                className="button"
                variant="info"
                size="sm"
                onClick={sum}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  color: "rgb(13, 13, 88)",
                  backgroundColor: "#38b6ff",
                  border: "none",
                  margin: "0",
                  // fontSize: "20px",
                  padding: "0",
                  boxShadow: "0 0 5px black",

                }}
              >
                {"+"}
              </Button>
            </div>

            <Button
              variant="danger"
              size="sm"
              onClick={Excluir}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                borderRadius: "8px",
                width: "30px",
                height: "30px",
                marginRight: "4px",
                fontSize: "17px",
                padding: "0",
                boxShadow: "0 0 10px black",
              }}
            >
              <ImBin />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCart;
