import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'./src'),
      '@lib': path.resolve(__dirname,'./src/lib'),
      '@assets': path.resolve(__dirname,'./src/assets'),
      '@img': path.resolve(__dirname,'./src/assets/img'),
      '@styles': path.resolve(__dirname,'./src/assets/styles'),
      '@components': path.resolve(__dirname,'./src/components'),
      '@lib': path.resolve(__dirname,'./src/lib'),
      '@ui': path.resolve(__dirname,'./src/ui')
    }
  }
})
