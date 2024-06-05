import React, { useState } from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import Conteudo from './components/Conteudo'
import { useEffect } from'react'
import './App.css'

const Spinner = styled(motion.div)`
      width: 50px;
      height: 50px;
      border: 4px solid black;
      border-radius: 50%;
      border-top: 4px solid red;
`

function App() {
  const [Carregando, setCarregado] = useState(true);
  useEffect(() =>{
    const timer = setTimeout(() => {
      setCarregado(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>

      {Carregando ? (
        
      <Spinner
      animate={{rotate: 360}}
      transition={{duration: 0.5, repeat: Infinity, ease: 'linear'}}
    />
    ):(
      
      <Conteudo visivel={!Carregando}/>
      )
    }
    
    </div>
  )
}

export default App
