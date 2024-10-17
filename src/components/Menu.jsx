import React from 'react'
import logo from '../assets/logo_main.png'
import {motion} from 'framer-motion'

const Menu = () => {
  return <>
    <div className="w-[100%] py-4 lg:px-36 sticky flex items-center lg:justify-between lg:top-0 lg:z-50 bg-[#3a5a18]/90">
      <button><a href="/index.html"><img className='w-[80px] lg:w-[170px]' src={logo}/></a></button>
      <div className='w-[32%] text-[10px] lg:text-[17px] flex font-[600] lg:rounded-full text-white items-center justify-around p-2 drop-shadow-[0_0px_10px_rgba(0,0,0,0.7)]'>
          <a href='/index.html'>
            <motion.p
            whileHover = {{
              scale:1.15
            }}>
              Home
            </motion.p>
          </a>
          <a href='/pages/about/index.html'>
          <motion.p
            whileHover = {{
              scale:1.15
            }}>About</motion.p>
          </a>
          <a href='/pages/blog/index.html'>
          <motion.p
            whileHover = {{
              scale:1.15
            }}>Blog</motion.p></a>
          <a href='/pages/events/index.html'>
          <motion.p
            whileHover = {{
              scale:1.15
            }}>Events</motion.p></a>
          <a href='/pages/contact/index.html'>
          <motion.p
            whileHover = {{
              scale:1.15
            }}>Contact</motion.p></a>
      </div>
    </div>
  </>
}

export default Menu