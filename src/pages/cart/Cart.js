import "dotenv/config";
import React, { useContext, useEffect, useState } from "react";
import CardsCart from "../../components/CardsCart/CardsCart";
import { useNavigate } from "react-router-dom";
import { EpiListContext } from "../../context/EpiListContext";

import "./Cart.css";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Cart = () => {
  const navigate = useNavigate();

  const { epiList } = useContext(EpiListContext);

  const [totalTeste, setTotalTeste] = useState(0);

  useEffect(() => {
    let n = 0;
    if (epiList.length > 1) {
      epiList.map((prod) => (n += prod.prodTotal));
      setTotalTeste(n);
    } else {
      epiList.map((prod) => setTotalTeste(prod.prodTotal));
    }
  }, [epiList]);

  let texto = `PEDIDO`;

  epiList.map((obj) => {
    texto += `
   ${obj.name}
   -  quantidade: ${obj.quantidadeEpi}  
   -  valor: R$ ${obj.prodTotal.toFixed(2)}

   `;
    return obj;
  });

  texto += `Valor total do pedido: 
    R$ ${totalTeste.toFixed(2)}`;

  let conteudo = encodeURIComponent(texto)
    .replace(/['()]/g, escape)
    .replace(/\*/g, "%2A")
    .replace(/%(?:7C|60|5E)/g, unescape);

  const n = process.env.REACT_APP_NWPP;
  // const url = "https://api.whatsapp.com/send?text=" + conteudo;
  const url = `https://wa.me//${n}?text=${conteudo}`;

  const enviar = () => {
    window.location.href = url;
  };

  const voltar = () => {
    navigate("/");
  };

  return (
    <div className="rootCart">
      <Header />
      <h2>Carrinho</h2>

      <div className="cart">
        <div className="itemsCartList">
          <ul id="cartList" style={{ paddingLeft: "0" }}>
            {epiList.map((item) => {
              return (
                <li key={item.id}>
                  <CardsCart
                    id={item.id}
                    name={item.name}
                    quantidadeEpi={item.quantidadeEpi}
                    image={item.image}
                    preco={item.preco}
                    prodTotal={item.prodTotal}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <span id="totalBuy">
          <p id="pTotal">Total do pedido</p>{" "}
          <span id="valorTotal">R$ {totalTeste.toFixed(2)}</span>
        </span>

        <div className="CartFooter">
          <div className="footerCart">
            <Button id="buttonCart" onClick={voltar}>
              Voltar
            </Button>
            <Button id="buttonCartEnviar" onClick={enviar}></Button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Cart;
