import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Only keep this:
export default defineConfig({
  plugins: [tailwindcss(),react()],
})
