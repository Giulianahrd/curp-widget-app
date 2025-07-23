import React from 'react'
import { CircularProgress, Box, Typography } from '@mui/material'

function LoadingSpinner() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3, 
                mt: 2.5, 
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <CircularProgress
                size={40} 
                sx={{
                    color: 'primary.main', 
                }}
            />
            <Typography variant="body1" sx={{ mt: 2, fontSize: '1.1em', color: 'text.secondary' }}>
                Cargando...
            </Typography>
        </Box>
    )
}

export default LoadingSpinner
