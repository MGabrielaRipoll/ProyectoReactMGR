import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import "./CartView.scss"






const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)
    
    if (cart.length === 0) {
        return (
            <div className="container_carritovacio">
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="info">Olvido agregar un producto a su carrito</Alert>
                </Stack>
                <hr/>
                <Link className="link_volver" to="/">
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success">
                            Ir a Comprar
                        </Button>
                    </Stack>
                </Link>
            </div>
        )
    }

    return (
        <div className="cart__container">
            <div className="alert_add">
                <Stack  sx={{ width: '100%' }} spacing={2}>
                    <Alert
                        action={
                        <Button onClick={vaciarCarrito} color="inherit" size="small">
                            <strong>DESHACER</strong>
                        </Button>
                        }
                    >
                        TU COMPRA ESTA LISTA!!!
                    </Alert>
                </Stack>
            </div>

            <div className="compra_detail">
                {
                    cart.map((item) => (
                        <div key={item.id}>
                            <h3>{item.nombre}</h3>
                            <img src={item.img} alt={item.nombre} width={200}/>
                            <strong>Cantidad: {item.cantidad}</strong>
                            <Stack direction="row" spacing={1}>
                                <IconButton onClick={() => removerDelCarrito(item.id)}  aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                          
                        </div>
                    ))
                }
            </div>

            <div className="cart_resumen">
                <Stack className="alert_total">
                    <Alert severity="success">
                        <AlertTitle>Agregado con exito</AlertTitle>
                        <strong>Total: ${totalCompra()}</strong>
                    </Alert>
                </Stack>
                <div className="button_container">
                    <Stack className="button_fin">
                        <Button onClick={vaciarCarrito}  variant="contained" color="error">
                            Vaciar Carrito
                        </Button>
                    </Stack>
                    <Link className="link_terminar" to="/checkout">
                        <Stack className="button_fin" direction="row" spacing={2}>
                            <Button variant="contained" color="success">
                                Terminar mi compra
                            </Button>
                        </Stack>
                    </Link> 
                </div>            
            </div>
        </div>
    )
}

export default CartView