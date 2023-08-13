
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import './CartWidget.scss'



const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <div className='contenedor__cartwidget'>
            <Link to="/cart" alt="Logo de carrito" className='logo__carrito'>
                <img src="082a18f6-b217-4a73-9482-0cdc9f1e11c8" className='logo__carrito' alt="logo de carrito" />
                    <span>{totalCantidad()}</span>
            </Link>
        </div>
    )
}
export default CartWidget
