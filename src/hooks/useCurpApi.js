import { useState, useCallback } from 'react'

const saveCurpToLocalStorage = (curp) => {
    try {
        const storedCurps = JSON.parse(localStorage.getItem('savedCurps')) || []
        if (curp && !storedCurps.includes(curp) && curp.length === 18) {
            const newCurps = [curp, ...storedCurps.slice(0, 9)]
            localStorage.setItem('savedCurps', JSON.stringify(newCurps))
        }
    } catch (e) {
            setError(`Error al guardar historial de CURP: ${e.message}`)
    }
}

const getSavedCurpsFromLocalStorage = () => {
    try {
        const storedCurps = JSON.parse(localStorage.getItem('savedCurps')) || []
        return storedCurps
    } catch (e) {
            setError(`Error al cargar historial de CURP: ${e.message}`)
        return []
    }
}

export const useCurpApi = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const API_KEY = import.meta.env.VITE_PROMETEO_API_KEY

    const resetState = useCallback(() => {
        setData(null)
        setError(null)
        setLoading(false)
    }, [])

    const fetchData = useCallback(async (endpoint, body) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`/.netlify/functions/prometeo-proxy${endpoint}`, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/x-www-form-urlencoded',
                },
                body: body, 
            })

            const result = await response.json()

            if (!response.ok) {
                const errorMessage = result.detail || result.message || 'Error desconocido al consultar el CURP.'
                setError(errorMessage)
                setData(null)
                return null
            }

            if (result.pdf_url) {
                delete result.pdf_url
            }

            setData(result.data)
            
            if (result.data && result.data.personal_data && result.data.personal_data.curp) {
                saveCurpToLocalStorage(result.data.personal_data.curp)
            }

            if (window.parent !== window) {
                window.parent.postMessage({ type: 'curpValidated', data: result.data }, '*')
            }

            return result.data

        } catch (err) {
            setError('No se pudo conectar con el servicio de verificación de CURP. Inténtalo de nuevo más tarde.')
            setData(null)
            return null
        } finally {
            setLoading(false)
        }
    }, [saveCurpToLocalStorage, setError]) 

    const consultCurp = useCallback((curpValue) => {
        const endpoint = '/curp/query'
        return fetchData(endpoint, `curp=${curpValue}`)
    }, [fetchData])

    const consultPersonalData = useCallback((personalData) => {
        const endpoint = '/curp/reverse-query'
        const params = new URLSearchParams()
        for (const key in personalData) {
          params.append(key, personalData[key])
        }
        return fetchData(endpoint, params.toString())        
    }, [fetchData])
      
    return { data, loading, error, consultCurp, consultPersonalData, resetState, getSavedCurpsFromLocalStorage }
}
