import React from "react";


const Nome = (form,hadChange) => {


  return ( 
    <>
    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" value={form.nome} onChange={hadChange}/>
    </>
  );
};

export default Nome