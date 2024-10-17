import React from 'react'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'

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

        <div className='flex items-center justify-around w-[17%] mt-4 bg-primary p-5 rounded-full'>
            <img src={facebook} className='cursor-pointer' height={'35px'} width={'35px'} alt="" />
            <img src={instagram} className='cursor-pointer' height={'35px'} width={'35px'} alt="" />
            <img src={twitter} className='cursor-pointer' height={'35px'} width={'35px'} alt="" />
        </div>

        <button className='home-button bg-[#3a5a18]/85 w-[15%] mt-8'><a href='/pages/contact/index.html'>Contact us</a></button>
      </div>
      </div>
        {/* Social Media integration */}

    </div>
  </>
}

export default ReachOut