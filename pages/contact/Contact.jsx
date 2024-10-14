import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from '../../components/Menu'
import '../../index.css'

import Footer from '../../components/Footer'
import Info from '../../components/contact/Info'


createRoot(document.getElementById('contact')).render(
  <StrictMode>
    <Menu />
    <Info />
    <Footer />
  </StrictMode>,
)