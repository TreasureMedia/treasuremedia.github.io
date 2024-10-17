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
    className='w-[100%] h-[90vh] bg-[#0b2017] flex justify-center items-center relative overflow-hidden bg-cover bg-no-repeat'
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
          className='text-white flex flex-col items-center font-[600] text-5xl mx-[5%] md:mx-[10%] lg:mx-[13%]'>
            <div className=' w-[100%] z-[1] flex items-center flex-col max-sm:text-[30px] bg-background/50 p-8 lg:p-14 rounded-2xl'>
              <img src={img1}  width='550px' />
              <div className='mt-5 font-[400] flex flex-col items-center text-center text-[13px] lg:text-[20px] lg:w-[70%]'>
                <h1 className='font-[600] text-[20px] lg:text-[30px] leading-[50px]'>Welcome!</h1>
                <p>We invite you to explore our rich archive of articles, interviews, and features that have touched the lives of countless individuals in Cape Town and beyond. From inspiring stories of resilience and empowerment to practical advice on health, wellness, and lifestyle, Treasure Media offers a diverse range of content that is both informative and engaging.</p>
              </div>
            </div>
          </motion.div>

        </div>

    </motion.div>
  </>
}

export default Hero