import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


function Picture() {
  return <>
    <div className='w-[100%] h-[80vh]  bg-green-900 lg:flex text-white leading-none flex items-center justify-center flex-col'>

      <div className='w-[100%] mb-14 flex items-center justify-center flex-col'>
        <h1 className='text-[50px] font-[600] mb-2'>Read more from our blog.</h1> 
        <p className='text-[22px] font-[500]'>Check out articles on various topics from our authors.</p>
      </div>
      
      
      <div className='w-[100%] h-[60%] flex items-center justify-center'>
        <div className='flex justify-between w-[100%] px-10 absolute'>
            <button><ChevronLeftIcon className='chevron' /></button>
            <button><ChevronRightIcon className='chevron' /></button>
          </div>
        <div className='w-[90%] h-[100%] grid grid-cols-3 gap-20 px-20'>
          <div className='blog-article'>
              
              </div>
              <div className='blog-article'>
                
              </div>
              <div className='blog-article'>
               
              </div>

        </div>
      </div>
    </div>
  </>
}

export default Picture