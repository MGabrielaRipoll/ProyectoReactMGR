import { Header } from "../componentes/Header/Header"
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import Contacto from "../componentes/Contacto/Contacto";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "../componentes/Context/CartContext";
import { AuthProvider } from '../componentes/Context/AuthContext';
import CartView from "../componentes/CartView/CartView";
import Checkout from "../componentes/Checkout/Checkout";

import "./App.scss"

function App() {

  return (
      <CartProvider>
        <AuthProvider>

          <BrowserRouter>
              <Header />        

              <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
                <Route path="/contacto" element={ <Contacto /> }/>
                <Route path="/cart" element={ <CartView /> }/>
                <Route path="/checkout" element={ <Checkout /> }/>
                <Route path="*" element={ <Navigate to="/"/> }/>
              </Routes>

          </BrowserRouter>
        </AuthProvider>
      </CartProvider>

  )
}

export default App