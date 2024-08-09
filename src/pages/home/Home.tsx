import React from 'react'
import './Home.css'
import homeLogo from '../../assets/glitch-background/2098049.jpg'

const Home = () => {
  return (
    <>
    <h1 className='titulo'>Home</h1>

    <img src= {homeLogo} className='img' alt='imagem tela inicial'></img>
    </>
  ) 
}

export default Home