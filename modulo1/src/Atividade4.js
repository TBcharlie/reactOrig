import React,{useState} from 'react';
import Button from './Atividade4/Button'
import Loader from './Atividade4/Loader'
import Produto from './Atividade4/Produto'


// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const Atividade4 = () => {
    const [dados,setDados] = useState(null)
    const [loader,setLoader] = useState(false)

    return (
        <>
        <Button tipo="tablet" setDados={setDados} setLoader={setLoader}/>
        <Button tipo="smartphone" setDados={setDados} setLoader={setLoader}/>
        <Button tipo="notebook" setDados={setDados} setLoader={setLoader}/>
        {loader?<Loader/>:null}
        {!loader&&dados&&<Produto dados={dados}/>}
        </>
    )
}

export default Atividade4