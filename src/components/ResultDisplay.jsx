import React from 'react'
import { Box, Typography, Paper } from '@mui/material'

function ResultDisplay({ curpData }) {
    if (!curpData) {
        return (
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
                No hay datos de CURP para mostrar.
            </Typography>
        )
    }

    const { personal_data, address_data, document_data } = curpData

    return (
        <Box
            sx={{
                padding: 3, 
                border: '1px solid #e0e0e0',
                borderRadius: 2, 
                bgcolor: 'background.paper',
                boxShadow: 1,
                mt: 2.5, 
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <Typography variant="h5" component="h2" sx={{ mb: 2.5, textAlign: 'center', color: 'text.primary', fontWeight: 700 }}>
                Datos de CURP
            </Typography>

            <Paper
                elevation={0} 
                sx={{
                    bgcolor: '#e8f8f8', 
                    border: '1px solid #b3e0e0',
                    p: 2, 
                    borderRadius: 1, 
                    mb: 2.5, 
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6" component="p" sx={{ fontSize: '1.15em', fontWeight: 600, color: '#00796B' }}>
                    CURP: {personal_data?.curp || 'N/A'}
                </Typography>
            </Paper>

            <Box sx={{ mb: 3, p: 2, border: '1px solid #f0f0f0', borderRadius: 1, bgcolor: '#fcfcfc' }}>
                <Typography variant="h6" sx={{ mb: 1.5, color: 'primary.main', borderBottom: '2px solid #e0e0e0', pb: 0.5 }}>
                    Datos Personales
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}><strong>Nombre(s):</strong> {personal_data?.names || 'N/A'}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}><strong>Primer Apellido:</strong> {personal_data?.first_surname || 'N/A'}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}><strong>Segundo Apellido:</strong> {personal_data?.last_surname || 'N/A'}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}><strong>Fecha de Nacimiento:</strong> {personal_data?.birthdate || 'N/A'}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}><strong>Sexo:</strong> {personal_data?.gender === 'H' ? 'Hombre' : personal_data?.gender === 'M' ? 'Mujer' : 'N/A'}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}><strong>Estado de Nacimiento:</strong> {personal_data?.birth_state || 'N/A'}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}><strong>Nacionalidad:</strong> {personal_data?.nationality || 'N/A'}</Typography>
            </Box>

            {document_data && (
                <Box sx={{ mb: 3, p: 2, border: '1px solid #f0f0f0', borderRadius: 1, bgcolor: '#fcfcfc' }}>
                    <Typography variant="h6" sx={{ mb: 1.5, color: 'primary.main', borderBottom: '2px solid #e0e0e0', pb: 0.5 }}>
                        Datos del Documento
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>Clave de Elector:</strong> {document_data?.electoral_key || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>Número de Emisión:</strong> {document_data?.emission_number || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>OCR:</strong> {document_data?.ocr || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>CIC:</strong> {document_data?.cic || 'N/A'}</Typography>
                </Box>
            )}

            {address_data && (
                <Box sx={{ mb: 3, p: 2, border: '1px solid #f0f0f0', borderRadius: 1, bgcolor: '#fcfcfc' }}>
                    <Typography variant="h6" sx={{ mb: 1.5, color: 'primary.main', borderBottom: '2px solid #e0e0e0', pb: 0.5 }}>
                        Datos de Domicilio
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>Calle:</strong> {address_data?.street || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>Número Exterior:</strong> {address_data?.exterior_number || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>Número Interior:</strong> {address_data?.interior_number || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>Colonia:</strong> {address_data?.suburb || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>Municipio:</strong> {address_data?.municipality || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>Estado:</strong> {address_data?.state || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>Código Postal:</strong> {address_data?.zip_code || 'N/A'}</Typography>
                </Box>
            )}
        </Box>
    )
}

export default ResultDisplay
