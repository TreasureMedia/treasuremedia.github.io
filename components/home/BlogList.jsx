import React from 'react'
import img1 from '../../assets/images/zelda.jpg'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


function Picture() {
  return <>
    <div className='w-[100%] h-[70vh] bg-green-900 lg:flex text-white leading-none flex items-center justify-center '>
      <div className='w-[50%] h-[100%] bg-yellow-400 bg-center bg-cover ' style={{backgroundImage:`url(${img1})`}}>

      </div>

      <div className='w-[50%] flex justify-center items-center flex-col'>

        <div className='w-[90%] '>
          <h1 className='text-[50px] font-[600] mb-2'>Read from our blog.</h1> 
          <p className='text-[22px] font-[500]'>Check out articles on various topics from our authors. Explore the stories of many important figures from South Africa's history.</p>
          <button className='home-button bg-bg'><a href='/pages/blog/index.html'>See our blog</a></button>
        </div>


      </div>

    </div>
  </>
}

export default Picture