import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

let prometeoTheme = createTheme({ 
  palette: {
    primary: {
      main: '#DC3545',
      light: '#E57373',
      dark: '#A52A2A',
      contrastText: '#fff',
    },
    secondary: {
      main: '#333333',
      light: '#666666',
      dark: '#000000',
      contrastText: '#fff',
    },
    background: {
      default: '#f0f2f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#474747',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '1.8rem',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: '#E8F0F8',
            '&.Mui-focused fieldset': {
              borderColor: '#90CAF9',
              boxShadow: '0 0 0 3px rgba(144, 202, 249, 0.4)',
            },
            '& fieldset': {
              borderColor: '#e0e0e0',
            },
            '&:hover fieldset': {
              borderColor: '#90CAF9',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#333333',
            fontWeight: 500,
          },
          '& .MuiInputBase-input': {
            color: '#333333',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#E8F0F8',
          '&.Mui-focused fieldset': {
            borderColor: '#90CAF9',
            boxShadow: '0 0 0 3px rgba(144, 202, 249, 0.4)',
          },
          '& fieldset': {
            borderColor: '#e0e0e0',
          },
          '&:hover fieldset': {
            borderColor: '#90CAF9',
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          backgroundColor: '#f0f0f0',
          padding: 5,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
          fontSize: '1em',
          fontWeight: 500,
          color: '#333333',
          '&.Mui-selected': {
            backgroundColor: '#333333',
            color: '#ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              backgroundColor: '#A52A2A',
            },
          },
          '&:hover': {
            backgroundColor: '#e8e8e8',
            color: '#000000',
          },
        },
      },
    },
  },
})

prometeoTheme = responsiveFontSizes(prometeoTheme);

function CssVariablesInjector() {
  useEffect(() => {
    const root = document.documentElement

    root.style.setProperty('--mui-palette-primary-main', prometeoTheme.palette.primary.main)
    root.style.setProperty('--mui-palette-primary-light', prometeoTheme.palette.primary.light)
    root.style.setProperty('--mui-palette-primary-dark', prometeoTheme.palette.primary.dark)
    root.style.setProperty('--mui-palette-secondary-main', prometeoTheme.palette.secondary.main)
    root.style.setProperty('--mui-palette-secondary-light', prometeoTheme.palette.secondary.light)
    root.style.setProperty('--mui-palette-secondary-dark', prometeoTheme.palette.secondary.dark)
    root.style.setProperty('--mui-palette-background-default', prometeoTheme.palette.background.default)
    root.style.setProperty('--mui-palette-background-paper', prometeoTheme.palette.background.paper)
    root.style.setProperty('--mui-palette-text-primary', prometeoTheme.palette.text.primary)
    root.style.setProperty('--mui-palette-text-secondary', prometeoTheme.palette.text.secondary)
    
    root.style.setProperty('--color-dark-background', '#2E2E2E')
    root.style.setProperty('--color-light-grey-background', '#f0f0f0')
    root.style.setProperty('--color-light-hover', '#f3f2f2')
    root.style.setProperty('--color-dark-hover-text', '#3a2323')

  }, [])

  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={prometeoTheme}>
      <CssBaseline />
      <CssVariablesInjector />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
