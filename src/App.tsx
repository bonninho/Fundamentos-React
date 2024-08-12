import React, { useState } from 'react'
import Home from './pages/home/home'

const App = () => {
  const [valor,setValor] = useState(0);
  function handleClick() {
    setValor(valor + 1);
  }
  return (
    <>
    <Home
    title='Componente Home'
    description='Componente inicial que recebe props'
    />
    <p>O valor é: {valor}</p>
    <button onClick={handleClick}>Adicionar 1</button>
    </>
  )
}

export default App