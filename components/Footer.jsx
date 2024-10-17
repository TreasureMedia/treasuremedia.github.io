import React from 'react'
import footer_logo from '../assets/logo_main.png'

const Footer = () => {
  return <>
    <div className='w-[100%] font-[500] bg-black text-[#548124] text-[14px] pt-14 pb-10 lg:px-16 flex items-center justify-center flex-col'>
        <div className='flex items-center justify-between max-lg:flex-col text-[16px] w-[80%]'>

                <div className=' flex justify-center items-center flex-col text-[33px] leading-none'>
                    <img src={footer_logo} width='250px'/>
                    <p className='mt-4 text-[14px]'>Copyright ©2024</p>
                </div>

            <div className='flex items-center justify-around w-[40%]'>
                <div className='flex justify-center flex-col'>
                    <a href='/index.html' className='footer-link'>Home</a>
                    <a href='/pages/about/index.html' className='footer-link'>About</a>
                    <a href='/pages/blog/index.html' className='footer-link'>Blog</a>
                    <a href='/pages/events/index.html' className='footer-link'>Events</a>
                    <a href='/pages/contact/index.html' className='footer-link' >Contacts</a>
                </div>

                {/* Social Media */}
                <div className='flex justify-center flex-col'>
                    <h1 className='text-[22px] font-[700] mb-2'>Social Media</h1>
                    <a className='footer-link'>Facebook</a>
                    <a className='footer-link'>Instagram</a>
                    <a className='footer-link'>Tiktok</a>
                </div>    

            </div>

        </div>

        {/* Disclaimer */}
        <div className='text-gray-400 font-[400] mt-10 w-[100%] flex items-center justify-center text-center'>
            <p className='w-[80%]'>Disclaimer: The opinions expressed by the authors of the articles published on Treasure Media
            website do not necessarily reflect the views of Treasure Media. Treasure Media does not accept any
            responsibility for information given in the articles featured on the website of Treasure Media.
            Treasure Media does not grant permission for republishing of the content on this website without
            official permission.</p>
        </div>

        <div className='text-gray-400 font-[400] mt-10 w-[100%] flex items-center justify-center text-center'>
            <p className='w-[80%]'>Designed and developed by <a className='footer-link'>Reem Ahmed.</a></p>
        </div>
    </div>
  </>
}

export default Footer