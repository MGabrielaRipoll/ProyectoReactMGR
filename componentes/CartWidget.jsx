import './CartWidget.scss'


export const CartWidget = ({ contador }) => {
    return (
        <div className='contenedor__cartwidget'>
            <img src="/carrito.png" className='logo__carrito' alt="Logo de carrito"/>
            <span>{contador}</span>
        </div>
    );
}


