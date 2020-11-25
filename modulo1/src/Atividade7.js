import React from "react"
import Nome from "./atividade7/Nome"
import Email from "./atividade7/Email"
import Senha from "./atividade7/Senha"
import Cep from "./atividade7/Cep"
import Rua from "./atividade7/Rua"
import Numero from "./atividade7/Numero"
import Bairro from "./atividade7/Bairro"
import Cidade from "./atividade7/Cidade"
import Estado from "./atividade7/Estado"


// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST

// Mostre uma mensagem na tela, caso a resposta da API seja positiva


const Atividade7 = () => {
  const [form,setForm] = React.useState({
    nome:'',
    email : '',
    senha : '',
    cep: '',
    rua: '',
    numero: '',
    bairro:'',
    cidade: '',
    estado:'',
  })

  const [response, setResponse] = React.useState(null)

  const handerSubmit = (event) => {
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response)=>{
        setResponse(response)
    })

  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <> 
    <form onSubmit={handerSubmit}>
      <Nome form={form} hadChange={handleChange}/>
      <Email form={form} hadChange={handleChange}/>
      <Senha form={form} hadChange={handleChange}/>
      <Cep form={form} hadChange={handleChange}/>
      <Rua form={form} hadChange={handleChange}/>
      <Numero form={form} hadChange={handleChange}/>
      <Bairro form={form} hadChange={handleChange}/>
      <Cidade form={form} hadChange={handleChange}/>
      <Estado form={form} hadChange={handleChange}/>
      <button type="submit">Salvar</button>
    </form>
    {response && response.ok && <p>Usuario cadastrado</p>}
    </>
  )
}

export default Atividade7