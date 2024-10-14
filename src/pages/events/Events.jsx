import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from '../../components/Menu'
import '../../index.css'
import Header from '../../components/events/Header'
import Footer from '../../components/Footer'
import Content from '../../components/events/Content'

createRoot(document.getElementById('events')).render(
  <StrictMode>
    <Menu />
    <div className='bg-gradient-to-t from-primary pb-20'>
      <Header />
      <Content />
    </div>
    <Footer />
  </StrictMode>,
)