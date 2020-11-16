import React from "react";
import Loader from "./atividade5/Loader";
import Produto from "./atividade5/Produto";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const Atividade5 = () => {
  const [loader, setLoader] = React.useState(false);
  const [dados, setDados] = React.useState(null);
  const [preferPro, setPreferProd] = React.useState(null);

  React.useEffect(async () => {
    if (localStorage.getItem("preferenciaProduto") !== null) {
      const produtoPrefer = localStorage.getItem("preferenciaProduto");
      setLoader(true);
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produtoPrefer}`
      );
      const json = await response.json();
      setDados(json);
      setLoader(false);
      setPreferProd(produtoPrefer);
    }
  }, []);

  const HanderClick = async (event) => {
    setLoader(true);
    const escolha = event.target.innerText;
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${escolha}`
    );
    const json = await response.json();
    setPreferProd(escolha);
    localStorage.setItem("preferenciaProduto", escolha);
    setDados(json);
    setLoader(false);
  };

  return (
    <div>
      <h1>Produto Preferido: {preferPro}</h1>
      <button onClick={HanderClick} style={{ marginRight: "10px" }}>
        notebook
      </button>
      <button onClick={HanderClick} style={{ marginRight: "10px" }}>
        smartphone
      </button>
      {loader ? <Loader /> : null}
      {!loader && dados && <Produto dados={dados} />}
    </div>
  );
};

export default Atividade5;
