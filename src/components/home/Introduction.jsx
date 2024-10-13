import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'

function Introduction() {
  return <>
    <div className='w-[100%] bg-[#3a5a18] flex items-center justify-center '>
        <motion.div 
        initial={{opacity:0, scale:0.9}}
        whileInView={{opacity:1, scale:1}}
        viewport={{margin:"-300px", once:true}} 
        transition={{ease: "easeOut", 
          duration:0.5,
        }}
        className='text-white w-[50%] flex  justify-center flex-col m-[70px]'>
            <h1 className='text-[33px] lg:text-[50px] font-[600] mb-2'>
                Who we are.
            </h1> 
            <p className='text-[15px] lg:text-[20px] font-[600] w-[100%] text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>

            <button className='home-button'>Read more about us</button>
        </motion.div>
        <div className='w-[60%] h-[70vh] flex items-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)]'>
          <div className='w-[95%] h-[90%]'>
            <Carousel />
          </div>
        </div>
    </div>
  </>
}

export default Introduction