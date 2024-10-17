import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import Articles from '../../components/blog/Articles'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'

createRoot(document.getElementById('blog')).render(
  <StrictMode>
    <Menu />
    {/* from-70% to-[#ffae45] */}
    <div className='bg-gradient-to-b from-[#ffedd5]  pt-[4vh] flex flex-col items-center'>
      <Articles />
    </div>
    <Footer />
  </StrictMode>,
)
