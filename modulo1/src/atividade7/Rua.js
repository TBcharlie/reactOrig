import React from "react";


const Rua = (form,hadChange) => {


  return ( 
    <>
    <label htmlFor="rua">Rua</label>
    <input type="text" id="rua" value={form.rua} onChange={hadChange}/>
    </>
  );
};

export default  Rua
