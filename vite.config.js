import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.CR2'],
  root,
  plugins: [react()],
  base:'/Site/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'pages/about', 'index.html'),
        blog: resolve(root, 'pages/blog', 'index.html'),
        events: resolve(root, 'pages/events', 'index.html'),
        contact: resolve(root, 'pages/contact', 'index.html'),
      }
    }
  }
})
