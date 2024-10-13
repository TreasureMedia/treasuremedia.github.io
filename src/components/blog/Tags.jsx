import React from 'react'

function Tags() {
  return <>
  <div className='mt-10 w-[93%] flex items-center justify-center flex-col'>
    <div className='w-[40%] grid grid-cols-4 gap-x-2 text-background text-[13px] mb-3 divide-x-[3px] divide divide-background font-[700]'>
        <button className='text-[15px]'>Cape Town</button>
        <button className='text-[15px]'>News</button>
        <button className='text-[15px]'>Public Affairs</button>
        <button className='text-[15px]'>Trending now  </button>
      </div>
    <div className='bg-primary w-[93%]  py-[3px] rounded-3xl flex justify-center items-center'> 
    </div>

  </div>
    
  </>
}

export default Tags