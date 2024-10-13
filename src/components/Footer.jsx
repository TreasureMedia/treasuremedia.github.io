import React from 'react'
import footer_logo from '../assets/logo_main.png'

const Footer = () => {
  return <>
    <div className='w-[100%]  bg-black text-[#548124] text-[14px] pt-10 pb-6 lg:px-16'>
        <div className='flex items-center justify-around max-lg:flex-col'>
            <div className='mb-7'>
                <div className='font-[400] flex justify-center items-center flex-col text-[33px] leading-none'>
                    <img src={footer_logo} width='250px'/>
                    <p className='mt-4 text-[14px]'>Copyright ©2024 information</p>
                </div>
            </div>
            
            <div className='flex flex-col lg:flex-row lg:justify-around w-[50%] font-[500]'>
                <div className='max-lg:mb-5'>
                    <h1 className='font-[700] text-[17px]'>Category 1</h1>
                    <div>
                        <p>Link 1</p>
                        <p>Link 2</p>
                        <p>Link 3</p>
                        <p>Link 4</p>
                    </div>
                </div>
                <div className='max-lg:mb-5'>
                    <h1 className='font-[700] text-[17px]'>Category 2</h1>
                    <div>
                        <p>Link 1</p>
                        <p>Link 2</p>
                        <p>Link 3</p>
                        <p>Link 4</p>
                        <p>Link 3</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-[700] text-[17px]'>Category 3</h1>
                    <div>
                        <p>Link 1</p>
                        <p>Link 2</p>
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div>
                
            </div>   
        </div>

        {/* Disclaimer */}
        <div className='text-gray-400 mt-10 w-[100%] flex items-center justify-center text-center'>
            <p className='w-[95%]'>Disclaimer: The opinions expressed by the authors of the articles published on Treasure Media
            website do not necessarily reflect the views of Treasure Media. Treasure Media does not accept any
            responsibility for information given in the articles featured on the website of Treasure Media.
            Treasure Media does not grant permission for republishing of the content on this website without
            official permission.</p>
        </div>
    </div>
  </>
}

export default Footer