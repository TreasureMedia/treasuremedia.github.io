import React from 'react'
import Hero from './components/home/Hero'
import Gallery from './components/home/Gallery'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Introduction from './components/home/Introduction'
import Picture from './components/home/BlogList'
import ReachOut from './components/home/ReachOut'

const Home = () => {
  return <>
    <div className='no-scrollbar bg-white w-[100%]'>
      <Menu />
      <Hero />
      {/* Who we are */}
      <Introduction />   {/* Read about us button  */} {/* Slideshow */} 
      <Gallery />
      {/* Read from our blog-list */}
      <Picture />
      {/* Find us on social media and contact us */}
      <ReachOut />{/* contact us */}
      <Footer />
    </div>
  </>
}

export default Home