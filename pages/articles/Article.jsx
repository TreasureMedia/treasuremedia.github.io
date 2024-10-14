import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/index.css'
import ArticleTemplate from '../../components/articles/ArticleTemplate'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'


createRoot(document.getElementById('article')).render(
  <StrictMode>
    <Menu />
    <ArticleTemplate />
    <Footer />
  </StrictMode>,
)
