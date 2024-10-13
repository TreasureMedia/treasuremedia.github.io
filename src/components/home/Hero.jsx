import React from 'react'
import img1 from '../../assets/logo_main.png'
import {easeIn, motion} from 'framer-motion'
const bg = "https://cdn1.img.sputniknews.africa/img/07e8/04/1b/1066258377_350:0:3081:2048_1920x0_80_0_0_1e8b09b00e4e3c706f7014d09a57bf25.jpg"

const Hero = () => {
  return <>
    <motion.div 
            initial = {{
              opacity:0,
            }}
            animate = {{
              opacity:1
            }}
            transition = {{
              delay:0.3,
              duration:0.3
            }}
    className='w-[100%] h-[90vh] bg-[#0b2017] flex justify-center items-center relative overflow-hidden  bg-cover bg-no-repeat'
    style={{backgroundImage: `url(${bg})`}}>

        <div

         className='h-[100%] w-[100%] bg-[#000000]/70 flex items-center justify-center  '>

          <motion.div 
              initial = {{
                opacity:0,
                scale:0.95
              }}
              animate = {{
                opacity:1,
                scale:1,
              }}
              transition = {{
                duration:0.7,
                delay:0.1,
                ease: "anticipate"
              }}
          className='text-white flex flex-col items-center font-[600] text-5xl mx-[13%]'>
            <div className=' max-sm:w-[100%] z-[1] flex items-center  flex-col max-sm:text-[30px] bg-background/50 p-14 rounded-2xl'>
              <img src={img1}  width='550px' />
              <div className='mt-5 font-[400] flex flex-col items-center text-center text-[20px] w-[50%]'>
                <h1 className='font-[600] text-[30px] leading-[50px]'>Welcome!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
              </div>
            </div>
          </motion.div>

        </div>

    </motion.div>
  </>
}

export default Hero