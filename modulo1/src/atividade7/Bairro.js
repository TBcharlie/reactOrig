import React from "react";


const Bairro = (form,hadChange) => {


  return ( 
    <>
    <label htmlFor="bairro">Bairro</label>
    <input type="text" id="bairro" value={form.bairro} onChange={hadChange}/>
    </>
  );
};

export default Bairro