import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    proxy: {
      '/api/reverse-query': {
        target: 'https://identity.sandbox.prometeoapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/reverse-query/, '/curp/reverse-query'),
      },
      '/api': { 
        target: 'https://identity.sandbox.prometeoapi.com',
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    }    
  },
})
