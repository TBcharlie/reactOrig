import React from "react";


const Cidade = (form,hadChange) => {


  return ( 
    <>
    <label htmlFor="cidade">Cidade</label>
    <input type="text" id="cidade" value={form.cidade} onChange={hadChange}/>
    </>
  );
};

export default Cidade