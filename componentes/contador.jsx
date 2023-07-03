import './contador.scss'


export const LogoConContador = ({ contador }) => {
    return (
        <div>
            <img src="/carrito.png" className='logo__carrito' alt="Logo de carrito"/>
            <span>{contador}</span>
        </div>
    );
}


