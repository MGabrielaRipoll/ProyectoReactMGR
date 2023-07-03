import React from 'react'
import { Header } from "../componentes/Header"
import { Saludo } from "../componentes/ItemListContainer"




function App() {
  
  return (
    <div>
      <Header />
      <Saludo nombre={"Gabi"} />
    </div>
  )
}

export default App
