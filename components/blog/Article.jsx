import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'

function Article(info) {

  const [modal, setModal] = useState(false);
  const [text, setText] = useState("");

  const toggleModal = () => {
    fetch(info.url)
    .then(r => r.text())
    .then(t => {
      setText(t);
    })  
    setModal(!modal);
  };

  
  
  return <>
    <motion.div onClick={toggleModal} whileHover={{scale:1.05}}
    className=' w-[94%] flex items-center justify-center flex-col cursor-pointer'>

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

    </motion.div>

    {modal && (

      <div className='fixed w-[100%] h-[100vh] bg-black/30 top-0 z-[100] flex items-center justify-center'>

        <div className='w-[80%] h-[90%] bg-primary drop-shadow-[0_0px_20px_rgba(0,0,0,0.9)] rounded-3xl overflow-scroll overscroll-contain'>

          <div className='w-[100%] py-6 px-10 flex justify-end'>
            <button className='text-white text-xl' onClick={toggleModal}>Close</button>
          </div>
          
          {/* Content */}
          <div className=' flex items-center justify-center flex-col px-20'>
            <div className='w-[100%] text-white font-[500] flex flex-col items-start justify-center'>
              <h1 className='font-[700] text-[30px] leading-none mb-5'>{info.title}</h1>
              <div className='flex items-center space-x-7'>
                <h2 className='text-[20px]'>{info.author}</h2>
                <p className='text-white/80 italic'>Published on {info.date}</p>
              </div>
            </div>

            <img className='w-[600px] my-10 rounded-xl' src={info.img} alt="" />
            
            <p className='text-white text-[20px] font-[400]'>{text.split('\n').map((i) => {
              return <>
                <p>{i}<br/><br/></p>
              </>
            })}</p>
          </div>
        </div>

      </div>
    )}

  </>
}

export default Article