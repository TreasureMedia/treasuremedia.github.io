import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainApp from './src/Home.jsx'
import './src/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
