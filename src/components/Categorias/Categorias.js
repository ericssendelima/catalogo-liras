import React, { useState } from "react";
import "./Categorias.css";

const Categorias = ({ config }) => {
  const categories = [
    "Hidratante facial",
    "Limpeza facial",
    "Sabonete facial",
    "Gel facial",
    "Sérum",
    "Protetor solar",
    "Argila",
    "Máscara facial",
    "Sobrancelhas",
    "Acessórios",
    "Maquiagem",
    "Mãos e Pés",
    "Escova",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const filtering = (categoria, index) => {
    setSelectedCategory(index);
    const newObj = config.itens.filter((item) => item.categoria === categoria);
    config.setFilterItens(newObj);
  };
  

  const fecharFiltro = () => {
    config.setFilterItens([...config.itens]);
    config.setIsCategoriesOpen(!config.isCategoriesOpen);
  };

  return (
    <div id="filterButtons">
      <button className="filter" onClick={() => fecharFiltro()}>
        Todos os Produtos
      </button>
      {categories.map((categoria, index) => (
        <button
          key={index}
          className="filter"
          id={selectedCategory === index ? "Active" : ""}
          onClick={() => filtering(categoria, index)}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
};

export default Categorias;
