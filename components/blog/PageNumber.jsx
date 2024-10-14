import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react'

const PageNumber = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return <>
    <div className='w-[100%] flex justify-center items-center my-8'>
        
        <ChevronLeftIcon className='text-white w-[40px] mr-5 bg-background/80 rounded-full flex items-center justify-center p-2'/>
        <div className='flex justify-between w-[23%] '>
            {numbers.map((i) => {
                return <p className='w-[30px] h-[30px] flex items-center justify-center text-background font-[500]  rounded-full text-[20px]'>{i}</p>
            })}
        </div>
        <ChevronRightIcon className='text-white w-[40px] ml-5 bg-background/80 rounded-full p-2 flex items-center justify-center' />
    </div>
  </>
}

export default PageNumber