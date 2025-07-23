import React, { useState } from 'react'
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material'

function PersonalDataForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        first_surname: '',
        last_surname: '',
        birthdate: '',
        gender: '',
        state: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const validateForm = () => {
        let newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.'
        if (!formData.first_surname.trim()) newErrors.first_surname = 'El primer apellido es obligatorio.'
        if (!formData.birthdate) newErrors.birthdate = 'La fecha de nacimiento es obligatoria.'
        if (!formData.gender) newErrors.gender = 'El sexo es obligatorio.'
        if (!formData.state) newErrors.state = 'El estado es obligatorio.'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            const dataToSend = { ...formData }

            if (dataToSend.birthdate) {
                const [year, month, day] = dataToSend.birthdate.split('-')
                dataToSend.birthdate = `${day}/${month}/${year}`
            }
            onSubmit(dataToSend)
        }
    }

    const states = [
        { code: 'AGS', name: 'Aguascalientes' },
        { code: 'BC', name: 'Baja California' },
        { code: 'BCS', name: 'Baja California Sur' },
        { code: 'CAM', name: 'Campeche' },
        { code: 'CHIS', name: 'Chiapas' },
        { code: 'CHIH', name: 'Chihuahua' },
        { code: 'COAH', name: 'Coahuila' },
        { code: 'COL', name: 'Colima' },
        { code: 'DF', name: 'Ciudad de México' },
        { code: 'DUR', name: 'Durango' },
        { code: 'GTO', name: 'Guanajuato' },
        { code: 'GRO', name: 'Guerrero' },
        { code: 'HGO', name: 'Hidalgo' },
        { code: 'JAL', name: 'Jalisco' },
        { code: 'MEX', name: 'México' },
        { code: 'MICH', name: 'Michoacán' },
        { code: 'MOR', name: 'Morelos' },
        { code: 'NAY', name: 'Nayarit' },
        { code: 'NL', name: 'Nuevo León' },
        { code: 'OAX', name: 'Oaxaca' },
        { code: 'PUE', name: 'Puebla' },
        { code: 'QRO', name: 'Querétaro' },
        { code: 'QR', name: 'Quintana Roo' },
        { code: 'SLP', name: 'San Luis Potosí' },
        { code: 'SIN', name: 'Sinaloa' },
        { code: 'SON', name: 'Sonora' },
        { code: 'TAB', name: 'Tabasco' },
        { code: 'TAMPS', name: 'Tamaulipas' },
        { code: 'TLAX', name: 'Tlaxcala' },
        { code: 'VER', name: 'Veracruz' },
        { code: 'YUC', name: 'Yucatán' },
        { code: 'ZAC', name: 'Zacatecas' },
        { code: 'NE', name: 'Nacido en el Extranjero' }
    ]

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
                boxShadow: 0, 
                mt: 2.5, 
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <TextField
                fullWidth
                label="Nombre(s)"
                variant="standard" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Juan"
                error={!!errors.name}
                helperText={errors.name}
            />

            <TextField
                fullWidth
                label="Primer Apellido"
                variant="standard" 
                name="first_surname"
                value={formData.first_surname}
                onChange={handleChange}
                placeholder="Perez"
                error={!!errors.first_surname}
                helperText={errors.first_surname}
            />

            <TextField
                fullWidth
                label="Segundo Apellido (opcional)"
                variant="standard" 
                name="last_surname"
                value={formData.last_surname}
                onChange={handleChange}
                placeholder="Gonzalez"
            />

            <TextField
                fullWidth
                label="Fecha de Nacimiento"
                type="date"
                variant="standard" 
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                error={!!errors.birthdate}
                helperText={errors.birthdate}
                InputLabelProps={{ shrink: true }} 
            />

            <FormControl fullWidth variant="standard" error={!!errors.gender} sx={{
              
                '& .MuiInputBase-root': {
                    bgcolor: 'white',
                },
                '& .MuiSelect-select': {
                    bgcolor: 'white', 
                },
            
                '& .MuiInput-underline:before': {
                    borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottomColor: 'rgba(0, 0, 0, 0.87)',
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: 'primary.main',
                },
                
                '& .MuiInputLabel-root': {
                    color: 'text.primary',
                },
            }}>
                <InputLabel id="gender-label" shrink={true}>Sexo</InputLabel>
                <Select
                    labelId="gender-label"
                    id="gender-select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <MenuItem value="">Selecciona</MenuItem>
                    <MenuItem value="M">Hombre</MenuItem>
                    <MenuItem value="w">Mujer</MenuItem>
                </Select>
                {errors.gender && <Typography variant="caption" color="error" sx={{ ml: 1.75, mt: 0.5 }}>{errors.gender}</Typography>}
            </FormControl>

            <FormControl fullWidth variant="standard" error={!!errors.state} sx={{
               
                '& .MuiInputBase-root': {
                    bgcolor: 'white', 
                },
                '& .MuiSelect-select': {
                    bgcolor: 'white', 
                },
                
                '& .MuiInput-underline:before': {
                    borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottomColor: 'rgba(0, 0, 0, 0.87)',
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: 'primary.main',
                },
                 
                '& .MuiInputLabel-root': {
                    color: 'text.primary',
                },
            }}>
                <InputLabel id="state-label" shrink={true}>Estado de Nacimiento</InputLabel>
                <Select
                    labelId="state-label"
                    id="state-select"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                >
                    <MenuItem value="">Selecciona</MenuItem>
                    {states.map(s => (
                        <MenuItem key={s.code} value={s.code}>{s.name}</MenuItem>
                    ))}
                </Select>
                {errors.state && <Typography variant="caption" color="error" sx={{ ml: 1.75, mt: 0.5 }}>{errors.state}</Typography>}
            </FormControl>

            <Button
                type="submit"
                variant="contained"
                color="primary" 
                sx={{
                    padding: '14px 25px',
                    fontSize: '1.15em',
                    fontWeight: 600,
                    mt: 2,
                    boxShadow: '0 4px 10px rgba(220, 53, 69, 0.3)',
                    borderRadius: '4rem'
                }}
            >
                Consultar CURP
            </Button>
        </Box>
    )
}

export default PersonalDataForm
