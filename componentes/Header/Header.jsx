
import { CartWidget } from '../CartWidget/CartWidget'
import './Header.scss'


export const Header = () => {   
    
    const contador = 0;
    return (
    
        <div className="contenedor__header"> 
            <h1 className="titulo">
                BIENVENIDO A MI TIENDA                
            </h1>
            <CartWidget contador={contador} />
            <nav className="nav__bar">
                <ul className="menu__contenedor">
                    <li className="menu__opciones"><a href="">HOME</a></li>
                    <li className="menu__opciones"><a href="">PRODUCTOS</a></li>
                    <li className="menu__opciones"><a href="">CONTACTO</a></li>
                </ul>
            </nav>
            
        </div>
    )
}
