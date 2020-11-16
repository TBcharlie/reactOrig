import React from 'react';

const Button = ({tipo,setDados,setLoader}) => {
    const HanderClick = async ()=>{
        setLoader(true)
        const response = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${tipo}`,
          )
        const json = await response.json();
        setDados(json)
        setLoader(false)
    }

    return (
        <button onClick={HanderClick} style={{ marginRight:"10px" }}>
            {tipo}
        </button>
    )
}

export default Button