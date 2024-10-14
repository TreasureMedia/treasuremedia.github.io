import React from 'react'

import Hero from '../../components/about/Hero'
import Info from '../../components/about/Info'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'

const About = () => {
  return <>
    <Menu />
    <Hero />
    <Info className=' absolute' />
    <Footer />
  </>
}

export default About