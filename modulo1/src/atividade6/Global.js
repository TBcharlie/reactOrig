import React from 'react'


export const GlobalContext = React.createContext()


export const GlobalStorage = ({children }) =>{
  const [dadosG,setDadosG] = React.useState(null)

  React.useEffect(async()=>{
     await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/`
    ).then((response) => response.json())
    .then((json) => setDadosG(json))
  },[])

  function  limparDadosG(){
    setDadosG(null)
  }

  return(
    <GlobalContext.Provider value={{ dadosG, setDadosG, limparDadosG }}>
    {children}
  </GlobalContext.Provider>
  )





}