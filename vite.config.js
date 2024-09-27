import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/<repository-name>/',  // Remplacez <repository-name> par le nom de votre repo GitHub
  build: {
    outDir: 'dist',
  },
})
