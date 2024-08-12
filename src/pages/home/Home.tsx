import React, { useState, useEffect} from 'react'
import './Home.css'
import homeLogo from '../../assets/glitch-background/2098049.jpg'

interface minhaProps {
    title: string;
    description: string;
}

const Home = (props:minhaProps) => {

    const [loggedIn,setLoggedIn] = useState(false);

    const [completed, setCompleted] = useState(false);
    const [tarefa,batatinha] = useState('');

    useEffect(() => {
        if (completed){
            batatinha("Parabéns, você concluiu a tarefa!");
        }

    },[completed])

  return (
    <>
    <h1 className='titulo'>{props.title}</h1>
    <p className='paragrafo'>{props.description}</p>
    {loggedIn ? (
      <h1>Bem-vindo de volta!</h1>
    ) : (
      <button onClick={() => setLoggedIn(true)}>Logar</button>
    )
     }
    <br></br>
    <h3>{tarefa}</h3>
    <p>Conclua a tarefa</p>
    <button onClick={() => setCompleted(true)}>Concluir tarefa</button>

    <img src= {homeLogo} className='img' alt='imagem tela inicial'></img>
    </>
  ) 
}

export default Home