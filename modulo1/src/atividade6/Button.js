import React from 'react'
import {GlobalContext} from '../atividade6/Global'

const Button = () => {
  const global = React.useContext(GlobalContext)

  function handleClick() {
    global.limparDadosG()
  }
  console.log(global)

    return (
      <button onClick={handleClick}>limpar</button>
    )
}

export default Button