import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // Set this to your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000, // Set the desired port for development server
    open: true, // Automatically open the browser on start
  }
});
