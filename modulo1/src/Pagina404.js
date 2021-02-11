import React from 'react'
import {Link} from 'react-router-dom'

const Pagina404 = () =>{
    const { pathname } = window.location
    console.log(pathname)

    return (
        <>
        <h1>{pathname === "/" ?"Pagina Home Master,": "Pagina não encontrada,"} possiveis paginas para usar</h1>
        <Link to="atividade1"><h2>Atividade1</h2></Link>
        <Link to="atividade2"><h2>Atividade2</h2></Link>
        <Link to="atividade3"><h2>Atividade3</h2></Link>
        <Link to="atividade4"><h2>Atividade4</h2></Link>
        <Link to="atividade5"><h2>Atividade5</h2></Link>
        <Link to="atividade6"><h2>Atividade6</h2></Link>
        <Link to="atividade7"><h2>Atividade7</h2></Link>
        <Link to="atividade8"><h2>Atividade8</h2></Link>
        <Link to="atividade9"><h2>Atividade9</h2></Link>
        <Link to="slidesModelo"><h2>Modelo de slide do curso</h2></Link>
        </>
    )

}

export default Pagina404