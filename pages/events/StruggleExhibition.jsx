import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from '../../components/Menu'
import '/index.css'


createRoot(document.getElementById('struggle_exhibition')).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)