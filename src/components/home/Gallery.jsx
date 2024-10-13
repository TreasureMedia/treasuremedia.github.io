import React from 'react'
import { motion } from 'framer-motion'


const Gallery = () => {
  return <>
  <div className='w-[100%] h-[100vh] bg-bg flex justify-center items-center'>
    <div className='text-white lg:w-[95%] h-[95%] flex max-sm:flex-col items-center justify-center '>
      
      <motion.div 
          initial={{x:'-75px', opacity:0}} 
          whileInView={{x:'0px', opacity:1}} 
          viewport={{margin:"-200px", once:true}} 
          transition={{ease: "easeOut", 
            duration:0.5,
          }}
          className='w-[80%] max-sm:mb-10 lg:w-[40%] flex items-center lg:items-start justify-center flex-col mx-10'
        >
        <h1 className='text-[80px] leading-tight max-sm:text-[20px] text-[#619729] font-[700]'>What we do.</h1>
        <p className='font-[500] text-[12px] lg:text-[20px] max-sm:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </motion.div>
      <motion.div
      initial={{x:'-75px', opacity:0}} 
      whileInView={{x:'0px', opacity:1}} 
      viewport={{margin:"-200px", once:true}} 
      transition={{ease: "easeOut", 
        duration:0.5,
      }}
      className='bg-[#3c5e19] w-[90%] h-[40%] lg:h-[70%] lg:mx-10 lg:w-[40%] rounded-[40px]'>
        
      </motion.div>
    </div>
  </div>
</>
} 

export default Gallery