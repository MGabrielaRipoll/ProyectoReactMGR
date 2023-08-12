


import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }
    
    return (
        <div className='card__contenedor' >
            <Card className='card__completa' sx={{ maxWidth: 345 }}>
                <CardMedia className='card__imagen'
                    justifyContent="initial" 
                    spacing={2}
                    variant="outlined"
                    sx={{ height: 500 }}
                    image= {item.img}
                    title= {item.nomre}
                />      
                <CardContent className='card__texto'>
                    <Typography gutterBottom variant="h5" component="div">
                        Precio: Pavos (B-Vucks) {item.precio}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.descripcion}
                    </Typography>
                </CardContent>
            </Card>
        {/* </div>
        // <div className="container my-5">
        //     <h2>{item.nombre}</h2>
        //     <img src={item.img} alt={item.nombre}/>
        //     <p>{item.descripcion}</p>
        //     <p>Precio: ${item.precio}</p> */}

            {
                isInCart(item.id)
                    ? <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                    : <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
            }
        </div>
    )
}

export default ItemDetail