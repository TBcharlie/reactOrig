import React from 'react'

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const Atividade1 = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return(
    <>
      <h3>Nome: {dados.nome}</h3>
      <h3>Idade: {dados.idade}</h3>
      <h3>Situação: <span style={{color:dados.ativa?'green':'red'}}>{dados.ativa? "ativa" : "inativa"}</span></h3>
      <h3>Total gasto R$ {total}</h3>
      <h3>{total <10000?'Tudo tranguilo':'Você esta gastando muito'}</h3>
    </>
  )
}


export default Atividade1
