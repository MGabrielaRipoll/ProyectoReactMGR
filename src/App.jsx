import React from 'react'
import { Header } from "../componentes/Header"
import { Saludo } from "../componentes/saludo"
import { LogoConContador } from '../componentes/contador';




function App() {
  
  const contador = 10;

  return (
    <div>
      <Header />
      <LogoConContador contador={contador} />
      <Saludo nombre={"Gabi"} />

    </div>
  )
}

export default App
