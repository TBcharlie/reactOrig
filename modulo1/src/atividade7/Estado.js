import React from "react";


const Estado = (form,hadChange) => {


  return ( 
    <>
    <label htmlFor="estado">Estado</label>
    <input type="text" id="estado" value={form.estado} onChange={hadChange}/>
    </>
  );
};

export default Estado