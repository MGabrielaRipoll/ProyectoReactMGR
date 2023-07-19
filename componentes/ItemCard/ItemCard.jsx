import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './ItemCard.scss'


export default function MediaCard({item}) {
    return (
        <div className='card__contenedor' >
            <Card className='card__completa' sx={{ maxWidth: 345 }}>
                <CardMedia className='card__imagen'
                    justifyContent="initial" 
                    spacing={2}
                    sx={{ height: 300 }}
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
                <CardActions>
                    <Button size="small">Comprar</Button>
                    <Button size="small">Ver mas</Button>
                </CardActions>
            </Card>
        </div>
    );
}

