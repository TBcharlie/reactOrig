//atividade 0212
import React from 'react'
import Header from './atividade3/Header'
import Home from './atividade3/Home'
import Produtos  from './atividade3/Produtos'

const Atividade3 = () =>{
    const { pathname } = window.location

    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
      ]

    return (
        <>
        <Header />
        {pathname=== "/atividade3"?<Home color="green"/>:<Produtos color="green" produtos={produtos}/>}
        </>
    )
}


export default Atividade3