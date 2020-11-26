import React from 'react'
const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']

const Atividade8 = () => {
  const [cores, setCores] = React.useState([])
  

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor)=>(
        <label>
          <input 
            type="checkbox" 
            name={cor} 
            value={cor} 
            checked={handleChecked(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  )
}

export default Atividade8