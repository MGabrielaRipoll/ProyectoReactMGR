
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import './CartWidget.scss'



const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <div className='contenedor__cartwidget'>
            <Link to="/cart" alt="Logo de carrito">
                <img src="../public/carrito.png" className='logo__carrito'  alt="logo de carrito" />
                    <span>{totalCantidad()}</span>
            </Link>
        </div>
    )
}
export default CartWidget
