import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({item}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 200 }}
            image={item.img}
            title="{item.nomre}"
        />
        
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Precio: Pavos (B-Vucks) {item.precio}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.descripcion}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Salir</Button>
            <Button size="small">Ver mas</Button>
        </CardActions>
        </Card>
    );
}

// import { Link } from "react-router-dom"



// const ItemCard = ({item}) => {

//     return (
//         <div className='col-3 m-2'>
//             <h4>{item.nombre}</h4>
//             <img src={item.img} alt={item.nombre}/>
//             <p>{item.descripcion}</p>
//             <p>Precio: ${item.precio}</p>
//             <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
//         </div>
//     )
// }

// export default ItemCard