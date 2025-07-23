import React, { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'

function CurpForm({ onSubmit }) {
    const [curp, setCurp] = useState('')
    const [error, setError] = useState('')

    const validateCurp = (value) => {
        const curpRegex = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9]{2}$/i
        if (!value) {
            return 'El CURP es obligatorio.'
        }
        if (value.length !== 18 || !curpRegex.test(value)) {
            return 'Formato de CURP inválido (debe tener 18 caracteres alfanuméricos).'
        }
        return ''
    }

    const handleChange = (e) => {
        const value = e.target.value.toUpperCase()
        setCurp(value)
        setError(validateCurp(value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationError = validateCurp(curp)
        if (validationError) {
            setError(validationError)
            return
        }
        onSubmit(curp)
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5, 
                padding: 3,
                borderRadius: 2, 
                bgcolor: 'background.paper',         
                mt: 2.5,
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <TextField
                fullWidth 
                label="CURP" 
                variant="standard" 
                value={curp}
                onChange={handleChange}
                error={!!error} 
                helperText={error} 
                inputProps={{ maxLength: 18 }} 
                placeholder="ABCD123456GHIJKL01"
            />

            <Button
                type="submit"
                variant="contained" 
                color="primary" 
                disabled={!curp || !!error} 
                sx={{
                    padding: '14px 25px',
                    fontSize: '1.15em',
                    fontWeight: 600,
                    mt: 2, // margin-top: 16px
                    boxShadow: '0 4px 10px rgba(220, 53, 69, 0.3)',
                    borderRadius: '4rem'
                }}
            >
                Consultar CURP
            </Button>
        </Box>
    )
}

export default CurpForm