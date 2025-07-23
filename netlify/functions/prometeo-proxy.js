// netlify/functions/prometeo-proxy.js
const fetch = require('node-fetch')

exports.handler = async (event, context) => {
    const { path, httpMethod, headers, body } = event

    // Extrae el endpoint de la ruta de la función
    // Ejemplo: /.netlify/functions/prometeo-proxy/query  -> endpoint = /query
    // Ejemplo: /.netlify/functions/prometeo-proxy/curp/reverse-query -> endpoint = /curp/reverse-query
    const endpoint = path.replace('/.netlify/functions/prometeo-proxy', '')

    const PROMETEO_BASE_URL = 'https://identity.sandbox.prometeoapi.com'
    const PROMETEO_API_KEY = process.env.VITE_PROMETEO_API_KEY // Accede a la variable de entorno configurada en Netlify

    try {
        const response = await fetch(`${PROMETEO_BASE_URL}${endpoint}`, {
            method: httpMethod,
            headers: {
                'accept': 'application/json',
                'content-type': 'application/x-www-form-urlencoded',
                'X-API-Key': PROMETEO_API_KEY,
            },
            body: body, // El body ya viene como string de URLSearchParams
        })

        const data = await response.json()

        return {
            statusCode: response.status,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
    } catch (error) {
        console.error('Proxy error:', error)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error en el proxy de la API', detail: error.message })
        }
    }
}
