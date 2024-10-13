import React from 'react'
import {motion} from "framer-motion"

function EventTemplate(info) {
  return <>
    
  
    <motion.div 
    whileHover={{scale:1.025}}
    transition={{
      duration:0.15,
      type:"Spring"
    }}
    className='w-[95%] h-[30vh] bg-cover bg-none-repeat bg-center rounded-3xl cursor-pointer'
    style={{backgroundImage: `url(${info.img})`}}>
    <a href={info.link}>
      <div className='w-[100%] h-[100%] bg-gradient-to-r from-background flex items-center justify-center rounded-3xl'>
        <div className='text-white text-[35px] font-[500] mx-10'>
          <h1>
            {info.title}
          </h1>
        </div>
      </div>
      </a>
    </motion.div>
  </>
}

export default EventTemplate