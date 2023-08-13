import { clases } from "../helpers/utils"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import "./ItemCount.scss"


const ItemCount = ({max, cantidad, setCantidad, agregar}) => {
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }


    return (
        <div className="button_cantidad">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button
                onClick={handleRestar} 
                disabled={cantidad === 1}
                >
                <strong className="signo" >-</strong>    
                </Button>
                
                <span className="span" >{cantidad}</span>

                <Button
                onClick={handleSumar} 
                disabled={cantidad === max}
                >
                <strong className="signo" >+</strong>    
                </Button>
            </ButtonGroup>        
            <Stack direction="row" spacing={2}>
                <Button className="button_agregar" onClick={agregar} variant="contained" color="success">
                    Agregar
                </Button>
            </Stack>

        </div>
    )
}

export default ItemCount