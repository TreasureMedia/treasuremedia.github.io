import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/index.css'
import Nav from '../../../components/blog/editor/Nav'
import HeaderImageUpload from '../../../components/blog/editor/HeaderImageUpload'
import TextContent from '../../../components/blog/editor/TextContent'

createRoot(document.getElementById('blog')).render(
  <StrictMode>
    <Nav />
    <HeaderImageUpload />
    <TextContent />
  </StrictMode>,
)
