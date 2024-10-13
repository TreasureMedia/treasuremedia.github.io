import React from 'react'


function Header() {
  return <>
    <div className='w-[100%] pt-[60px] pb-[50px] leading-none text-white flex items-center justify-center flex-col '>
      <div className='w-[100%] px-36 py-10 bg-primary drop-shadow-[0_0px_15px_rgba(0,0,0,0.8)]'>
        <h1 className='text-[60px]  font-[700] '>Events</h1>
        <p className='text-[24px]  font-[400]'>Check out expositions from our events.</p>
      </div>
    </div>
  </>
}

export default Header