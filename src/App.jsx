import React, { useState } from 'react'
import { useCurpApi } from './hooks/useCurpApi'

import { Box, Typography, Button, ToggleButton, ToggleButtonGroup } from '@mui/material'

import CurpForm from './components/CurpForm'
import PersonalDataForm from './components/PersonalDataForm'

import ResultDisplay from './components/ResultDisplay'
import ErrorMessage from './components/ErrorMessage'
import LoadingSpinner from './components/LoadingSpinner'

import './App.css'

function App() {
    const { data, loading, error, consultCurp, consultPersonalData, resetState } = useCurpApi()
    const [currentForm, setCurrentForm] = useState('curp')

    const handleCurpSubmit = async (curpValue) => {
      resetState()
      await consultCurp(curpValue)
    }

    const handlePersonalDataSubmit = async (personalData) => {
      resetState()
      await consultPersonalData(personalData)
    }

    const handleFormChange = (event, newForm) => {
      if (newForm !== null) {
        setCurrentForm(newForm)
        resetState()
      }
    }

    const handleResetAndSwitchToCurp = () => {
        setCurrentForm('curp')
        resetState()
    }

    return (
        <Box
            className="curp-widget-container" 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="h1" component="h1" className="h1">
                Verificación de CURP
            </Typography>

            <ToggleButtonGroup
                value={currentForm}
                exclusive
                onChange={handleFormChange}
                aria-label="método de consulta"
                className="form-selector" 
            >
                <ToggleButton
                    value="curp"
                    aria-label="consultar por curp"
                    className={currentForm === 'curp' ? 'active' : ''} 
                >
                    <span className="long-text">Consultar por CURP</span>
                    <span className="short-text">CURP</span>
                </ToggleButton>
                <ToggleButton
                    value="personal"
                    aria-label="consultar por datos personales"
                    className={currentForm === 'personal' ? 'active' : ''} 
                >
                    <span className="long-text">Consultar por Datos Personales</span>
                    <span className="short-text">DATOS PERSONALES</span>
                 </ToggleButton>
            </ToggleButtonGroup>

            {loading && <LoadingSpinner />} 

            {error && (
                <Box sx={{ width: '100%', mt: 2 }}>
                    <ErrorMessage message={error} /> 
                    <Button
                        variant="contained"
                        color="primary" 
                        onClick={handleResetAndSwitchToCurp}
                        className="reset-button" 
                        sx={{
                            display: 'block',
                            width: 'fit-content',
                            mx: 'auto',
                            mt: 2, 
                        }}
                    >
                        Hacer nueva consulta
                    </Button>
                </Box>
            )}

            {data && !loading && !error ? (
                <Box sx={{ width: '100%' }}>
                    <ResultDisplay curpData={data} />
                    <Button
                        variant="contained"
                        color="primary" 
                        onClick={handleResetAndSwitchToCurp}
                        className="reset-button" 
                        sx={{
                            display: 'block',
                            width: 'fit-content',
                            mx: 'auto',
                            mt: 3, 
                        }}
                    >
                        Hacer otra consulta
                    </Button>
                </Box>
            ) : (
                <>
                    {currentForm === 'curp' && !loading && !error && (
                        <CurpForm onSubmit={handleCurpSubmit} /> 
                    )}
                    {currentForm === 'personal' && !loading && !error && (
                        <PersonalDataForm onSubmit={handlePersonalDataSubmit} /> 
                    )}
                </>
            )}
            {!loading && !error && !data && (
                <Typography variant="body2" className="p" sx={{
                    textAlign: 'center',
                    color: '#666', 
                    mt: 2, 
                }}>
                    Selecciona un método de consulta para empezar.
                </Typography>
            )}
        </Box>
    )
}

export default App
