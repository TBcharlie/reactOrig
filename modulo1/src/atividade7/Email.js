import React from "react";


const Email = (form,hadChange) => {


  return ( 
    <>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" value={form.email} onChange={hadChange}/>
    </>
  );
};

export default Email