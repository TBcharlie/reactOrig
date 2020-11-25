import React from "react";


const Cep = (form,hadChange) => {


  return ( 
    <>
    <label htmlFor="cep">Cep</label>
    <input type="number" id="cep" value={form.cep} onChange={hadChange}/>
    </>
  );
};

export default  Cep
