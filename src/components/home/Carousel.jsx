import React from 'react'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { RxDot, RxDotFilled } from 'react-icons/rx'

const Carousel = () => {
  const slides = [
    {
      url: 'https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY'
    },
    {
      url: 'https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI'
    },
    {
      url: 'https://fastly.picsum.photos/id/36/4179/2790.jpg?hmac=OCuYYm0PkDCMwxWhrtoSefG5UDir4O0XCcR2x-aSPjs'
    },
    {
      url: 'https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so'
    },
    {
      url: 'https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }


  return <>
    <div className='w-[100%] h-[100%] bg-cover bg-center bg-no-repeat rounded-2xl drop-shadow-2xl duration-500 group relative'
    style={{backgroundImage:`url(${slides[currentIndex].url})`}}>
      
      <div className='opacity-70 duration-200 group-hover:opacity-100 group-hover:duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer'>
        <button><ChevronLeftIcon onClick={prevSlide} className='chevron' /></button>
      </div>
      <div className='opacity-70 duration-200 group-hover:opacity-100 group-hover:duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer'>
        <button><ChevronRightIcon onClick={nextSlide} className='chevron' /></button>
      </div>
      <div className='flex items-end justify-center py-2 relative bottom-[-90%] rounded-full'>
        <div className='flex items-end justify-center bg-primary/80 rounded-full'>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-3xl cursor-pointer text-white rounded-full'>
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}

export default Carousel