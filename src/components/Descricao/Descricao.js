import React from "react";
import "./Descricao.css";

import { IoClose } from "react-icons/io5";

const Descricao = ({ openDescription, product }) => {
  const fechar = () => {
    openDescription.setOpenDescription(!openDescription.openDescription);
  };
  return (
    <div id="descricaoContainer">
      <div id="headerdescricaoContainer">
        <button id="fecharDescricao" onClick={() => fechar()}>
          <IoClose />
        </button>
      </div>
     
      <div id="image">
        <img src={product.image} alt={product.name} />
      </div>
      <div id="description">
        <h4>{product.name}</h4>
        <h5>R$ {product.preco.toFixed(2)}</h5>
        <h6>Descrição:</h6>
        <p id="productDescription">{product.descricao}</p>
      </div>
    </div>
  );
};

export default Descricao;
