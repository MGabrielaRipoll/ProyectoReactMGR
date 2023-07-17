
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './Header.scss'


export const Header = () => {   
    
    const contador = 0;
    return (
    
        <div className="contenedor__header"> 
            <h1 className="titulo">
                Skin Mannia              
            </h1>
            <CartWidget contador={contador} />
            <nav className="nav__bar">
                <ul className="menu__contenedor">
                    <Link className="menu__opciones" to="/">Inicio</Link>
                    <Link className="menu__opciones" to="/productos/legendaria">Legendaria</Link>
                    <Link className="menu__opciones" to="/productos/epico">Epico</Link>
                    <Link className="menu__opciones" to="/productos/raro">Raro</Link>
                    <Link className="menu__opciones" to="/productos/comun">Comun</Link>
                    <Link className="menu__opciones" to="/productos/superheroes">Superheroes</Link>
                    <Link className="menu__opciones" to="/contacto">Contacto</Link>
                </ul>
            </nav>
            
        </div>
    )
}
