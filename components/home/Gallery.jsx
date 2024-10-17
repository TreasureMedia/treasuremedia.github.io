import React from 'react'
import { motion } from 'framer-motion'
import img1 from "../../assets/images/team.jpg"


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
        <p className='font-[500] text-[12px] lg:text-[20px] max-sm:text-center'>Treasure Media is a South African media platform dedicated to preserving the legacy of the liberation struggle. We conduct in-depth interviews with veterans and activists, write thought-provoking articles, and create engaging multimedia content that highlights their contributions to our nation. Our goal is to inspire future generations, promote social upliftment, and ensure that the stories of these unsung heroes are never forgotten.</p>
      </motion.div>
      <motion.div
      initial={{x:'-75px', opacity:0}} 
      whileInView={{x:'0px', opacity:1}} 
      viewport={{margin:"-200px", once:true}} 
      transition={{ease: "easeOut", 
        duration:0.5,
      }}
      className='bg-[#3c5e19] w-[100%] h-[40%] lg:h-[70%] lg:mx-10 lg:w-[60%] rounded-[40px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${img1})`}}>
        
      </motion.div>
    </div>
  </div>
</>
} 

export default Gallery