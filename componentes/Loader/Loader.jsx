
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import "./Loader.scss"


const Loader = () => {

    return (
        <div className='loader'>
            <Stack direction="row" spacing={2}>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="outlined"
                >
                    Cargando
                </LoadingButton> 
            </Stack>
        </div>
    )
}

export default Loader