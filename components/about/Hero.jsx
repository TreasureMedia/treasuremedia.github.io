import React from 'react'
import { motion, transform } from 'framer-motion'

const bg = 'https://www.sahistory.org.za/sites/default/files/article_image/163374101.jpg';

const Hero = () => {
  return <>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
      type:'easeOut',
      damping:20,
      delay:0.3,
      duration:0.4
    }}
    className='w-[100%] h-[100vh] text-white bg-cover bg-no-repeat bg-center'
    style={{backgroundImage: `url(${bg})`}}>
        <div className='bg-black/50 bg-gradient-to-t from-[#2f4616] w-[100%] h-[100%] p-32 flex justify-center items-center'>
            <motion.div>
                <div className='text-[90px] font-[600] flex flex-col'>
                  <motion.div
                  transition={{
                    delay:0.5,
                    type:'easeOut',
                    stiffness:200,
                    duration:0.5
                  }}
                  initial={{
                    x:'-50px',
                    opacity:0
                  }}
                  animate={{
                    x:'0',
                    opacity:1}}
                  
                  className='leading-[80px]'>
                    <h1 className=''>About</h1>
                    <h1 className='text-background font-[800] '>Treasure Media</h1>
                  </motion.div>
                    <motion.p
                    transition={{
                      delay:0.65,
                      type:'easeOut',
                      stiffness:200,
                      duration:0.5
                    }}
                    initial={{
                      x:'-50px',
                      opacity:0
                    }}
                    animate={{
                      x:'0',
                      opacity:1}}
                     className='text-[23px] font-[400] leading-none mt-10 w-[50%]'>Since its inception in 2002 by visionary founder Fadia Mohamed, Treasure Media has risen to become Cape Town’s premier women’s lifestyle publication, particularly cherished in Cape Town and surrounding areas.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    </motion.div>
  </>
}

export default Hero