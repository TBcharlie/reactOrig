import React from 'react';
import Radio from './Atividade9/Radio.js'

const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];
  

const Atividade9 = () =>{
    const [respostas, setRespostas] = React.useState({
        p1: '',
        p2: '',
        p3: '',
        p4: '',
      })

    const [slide, setSlide] = React.useState(0);
    const [resultado, setResultado] = React.useState(null);

    const handleChange = ({target }) =>{
        setRespostas({...respostas,[target.id]:target.value})
        

    }

    const resultadFinal = ()=>{
        const corretas = perguntas.filter(({resposta,id}) =>
          respostas[id] === resposta
        )

        setResultado(<label>Você acertou: {corretas.length} de {perguntas.length} </label>)
    }

    const handleClick = () =>{
        if(slide < perguntas.length -1){
            setSlide(slide +1)
        }
        else{
            setSlide(slide+1)
            resultadFinal()
        }

    }

    return(

        <form onSubmit={(event)=> event.preventDefault()}>
            {perguntas.map((perguntas, index)=>{
                return( <Radio key={perguntas.id} {...perguntas} active={slide === index} value={respostas[perguntas.id]} onChange={handleChange}/>)
            }) }
            {resultado ? (resultado) : 
            <button onClick={handleClick}>Proximo</button>
            }
        </form>
    )
}

export default Atividade9;