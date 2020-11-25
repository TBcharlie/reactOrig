import React from "react";


const Numero = (form,hadChange) => {


  return ( 
    <>
    <label htmlFor="numero">Numero</label>
    <input type="number" id="numero" value={form.numero} onChange={hadChange}/>
    </>
  );
};

export default  Numero
