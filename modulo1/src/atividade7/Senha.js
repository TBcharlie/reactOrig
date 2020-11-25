import React from "react";


const Senha = (form,hadChange) => {


  return ( 
    <>
    <label htmlFor="senha">Senha</label>
    <input type="password" id="senha" value={form.senha} onChange={hadChange}/>
    </>
  );
};

export default Senha