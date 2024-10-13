import React from 'react'

function ReachOut() {
  return <>
    <div style={{backgroundImage:'URL(https://img.static-kl.com/images/media/B2B667B6-DC8C-46DA-B9F0A9EBF1877EDE)'}} 
    className='w-[100%]  bg-orange-900  flex items-center justify-center flex-col bg-cover bg-center'>
      <div className='py-12 px-36 w-[100%] bg-[#3a5a18]/50'>

      <div className='w-[100%] flex items-center justify-center flex-col'>
        <div className='text-white leading-tight'>
          <h1 className='font-[800] text-[60px]'>Reach out to us!</h1>
          <p className='text-[20px]'>You can find us on these social media platforms:</p>
        </div>

        <div className='flex w-[20%] justify-between bg-[#3a5a18] px-10 rounded-full drop-shadow-xl mt-8'>
          <svg className='w-[30px] fill-white' 
          role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>

          <svg className='w-[35px] fill-white' 
          role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>

          <svg className='w-[45px] fill-white'
          xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
          </svg>
        </div>

        <button className='home-button bg-[#3a5a18]/85 w-[15%] mt-8'>Contact us</button>
      </div>
      </div>
        {/* Social Media integration */}

    </div>
  </>
}

export default ReachOut