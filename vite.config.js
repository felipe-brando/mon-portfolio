import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000, open: true },
  css: {
    preprocessorOptions: {
      scss: {
        // Permet d'importer depuis la racine : @use 'src/styles/vars'
        loadPaths: [path.resolve(__dirname, '.')],
      },
    },
  },
})
