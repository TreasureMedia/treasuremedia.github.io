import React from 'react'
import logo from '../../public/logo_main.png'
import {motion} from 'framer-motion'

const Menu = () => {
  return <>
    <div className="w-[100%] py-4 px-36 fixed flex items-center justify-between top-0 z-50 bg-[#3a5a18]/90">
      <button><a href="/src/index.html"><img src={logo} width='170px'/></a></button>
      <div className='w-[32%] text-[17px] flex font-[600] lg:rounded-full text-white  items-center justify-around p-2 lg:drop-shadow-[0_0px_10px_rgba(0,0,0,0.7)]'>
          <a href='/src/index.html'>
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