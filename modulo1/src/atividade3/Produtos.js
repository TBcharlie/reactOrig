import React from "react";

const Produtos = ({ color, produtos }) => {
  return (
    <>
      <h1 style={{ color: color }}>Produtos</h1>
      {produtos.map(({ nome, propriedades }) => {
        return (
          <div key={nome} style={style.div}>
            <p style={style.p}>{nome}</p>
            <ul>
              {propriedades.map((propriedade) =>  <li key={propriedade}>{propriedade}</li>)}
            </ul>
          </div>
        );
      })}
    </>
  );
};

const style = {
  div: {
    marginTop: "15px",
    border: "1px solid black",
    width: "100%",
  },
  p :{
      marginLeft:"5px",
      textTransform: "capitalize",
  }
};

export default Produtos;
