import React from 'react'
import { Alert, Box, Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

function ErrorMessage({ message }) {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Alert
                severity="error"
                sx={{
                    width: '100%',
                    borderRadius: 4,
                    bgcolor: '#ffebeb',
                    color: '#cc0000',
                    border: '1px solid #ffcccc',
                    p: 2,
                    fontWeight: 600,
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                icon={
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 0.5,
                    }}>
                        <ErrorOutlineIcon sx={{ fontSize: '1.5rem', mr: 0.5 }} />
                        <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', color: 'inherit' }}>
                            Error
                        </Typography>
                    </Box>
                }
            >
                <Typography variant="body2" sx={{ textAlign: 'center', color: 'inherit' }}>
                    {message || 'Ha ocurrido un error inesperado.'}
                </Typography>
            </Alert>
        </Box>
    )
}

export default ErrorMessage
