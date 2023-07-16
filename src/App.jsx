import { Header } from "../componentes/Header/Header"
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Header />        
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          {/* <Route path="*" element={ <Error404 /> }/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App