import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/index.css'
import Menu from '/components/Menu'
import Articles from '/components/blog/Articles'
import Footer from '/components/Footer'
import SearchBar from '/components/blog/SearchBar'
import PageNumber from '../../components/blog/PageNumber'

createRoot(document.getElementById('blog')).render(
  <StrictMode>
    <Menu />
    {/* from-70% to-[#ffae45] */}
    <div className='bg-gradient-to-b from-[#ffedd5]  pt-[4vh] flex flex-col items-center'>
      <Articles />
      <PageNumber />
    </div>
    <Footer />
  </StrictMode>,
)
