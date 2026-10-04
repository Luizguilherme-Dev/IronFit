import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração padrão do Vite para React + Tailwind
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
})