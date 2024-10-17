import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'

function Introduction() {
  return <>
    <div className='w-[100%] bg-[#3a5a18] flex items-center justify-center max-[650px]:flex-col'>
        <motion.div 
        initial={{opacity:0, scale:0.9}}
        whileInView={{opacity:1, scale:1}}
        viewport={{margin:"-300px", once:true}} 
        transition={{ease: "easeOut", 
          duration:0.5,
        }}
        className='text-white lg:w-[50%] flex justify-center items-center lg:items-start flex-col my-9 lg:m-[70px]'>
            <h1 className='text-[33px] lg:text-[50px] font-[600] lg:mb-2'>
                Who we are.
            </h1> 
            <p className='text-[15px] lg:text-[20px] font-[600] w-[100%] text-center lg:text-justify'>
            Treasure Media is a South African media platform dedicated to telling the stories of our nation’s unsung heroes. We believe that by highlighting the contributions of those who fought for freedom and equality, we can inspire future generations and create a more just society. Our mission is to preserve the legacy of the South African liberation struggle through our publications and initiatives.
            </p>

            <button className='home-button'><a href='/pages/about/index.html'>Read more about us</a></button>
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