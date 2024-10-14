import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.CR2'],
  plugins: [react()],
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/pages/about/index.html'),
        blog: resolve(__dirname, 'src/pages/blog/index.html'),
        events: resolve(__dirname, 'src/pages/events/index.html'),
        contact: resolve(__dirname, 'src/pages/contact/index.html'),
      }
    }
  }
})
