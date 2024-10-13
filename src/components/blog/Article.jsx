import React from 'react'

function Article(info) {
  return <>

    <div className=' w-[94%] flex items-center justify-center flex-col'>
      {/* Picture */}
      <div className='w-[100%] h-[230px] bg-background rounded-2xl bg-center bg-cover'
      style={{backgroundImage: `url(${info.img})`}}>
        <div className='h-[100%] w-[100%] bg-gradient-to-t from-primary/60 rounded-[inherit]'></div>
      </div>

      {/* Text */}
      <div className='mt-5 px-2 leading-tight'>
          <div className='flex justify-between mb-5 font-[700] text-[16px] text-black/60'>
            <p>{info.author}</p>
            <p>{info.date}</p>
          </div>
          <p className='font-[700] text-[23px] mb-2'>{info.title}</p>
          <p className='font-[500] text-[15px]'>{info.text}</p>
      </div>
    </div>
  </>
}

export default Article