import React from 'react'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'


function Info() {
  return <>
    <div className='w-[100%] h-[90vh] bg-cover flex items-center justify-center'
    style={{backgroundImage: "url(https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww)"}}>

        <div className='bg-green-900/50 w-[50%] h-[100%] flex items-center justify-center text-primary'>
            <div className='w-[100%] h-[100%] flex items-center justify-end'>

                <div className='flex items-center justify-center flex-col bg-white/60 w-[50%] h-[83%] rounded-l-[40px] z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)]'>
                    <div>
        
                        {/* Header */}
                        <div className='w-[100%] flex items-center justify-center'>
                            <p className='font-[600] text-[35px] mb-10 '>Reach out to us.</p>
                        </div>
                        
                        <div className='flex mb-4'>
                            <div className='h-[100%] bg-primary text-white p-3 rounded-full'>
                                <svg className='w-[30px] h-[30px]' 
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className='ml-5'>
                                <p className='text-[20px] font-[500] leading-6'>Give us a call</p>
                                <p className='text-[15px]'>+27 73 478 1728</p>
                            </div>
                        </div>

                        <div className='flex mb-4'>
                            <div className='h-[100%] bg-primary text-white p-3 rounded-full'>
                                <svg className='w-[30px] h-[30px]' 
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>

                            </div>
                            <div className='ml-5'>
                                <p className='text-[20px] font-[500] leading-6'>E-mail us</p>
                                <p className='text-[15px]'>fadia@treasuremag.co.za</p>
                                <p className='text-[15px]'>editor@treasuremag.co.za</p>

                            </div>
                        </div>

                        <div className='flex items mb-4'>
                            <div className='bg-primary p-3 text-white rounded-full h-[100%]'>
                                <svg className='w-[30px] h-[30px]'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div className='ml-5'>
                                <p className='text-[20px] font-[500] leading-6'>Find us</p>
                                <div>
                                    <p className='text-[15px]'>Goodwood</p>
                                    <p className='text-[15px]'>Cape Town, South Africa</p>
                                    <p className='text-[15px]'>7460</p>

                                </div>
                            </div>
                        </div> 
                        <div className='flex items-center justify-center flex-col'>
                            <p className='text-2xl font-[700]'>Find us online here:</p>
                           
                           <div className='flex items-center justify-around w-[70%] mt-4 bg-primary p-2 rounded-full'>
                                <img src={facebook} className='cursor-pointer' height={'35px'} width={'35px'} alt="" />
                                <img src={instagram} className='cursor-pointer' height={'35px'} width={'35px'} alt="" />
                                <img src={twitter} className='cursor-pointer' height={'35px'} width={'35px'} alt="" />
                           </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>

        {/* form */}

        <div className='w-[50%] h-[100%] flex items-center'>
            <div className='w-[60%] h-[83%] bg-primary rounded-r-[40px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)] flex items-center justify-center flex-col shadow-inner-[0_35px_60px_-15px_rgba(0.8,0.8,0.1,0.1)]'>

                <form className='w-[75%] h-[100%] flex flex-col items-center justify-center' action=''>
                    <div className='text-white text-[25px] font-[500] mb-5'>
                        <h1>Send us a message.</h1>
                    </div>
                    <div className='w-[100%] mb-5 flex flex-col'>
                        <label className='mb-1 text-[15px] text-white'>Full name*</label>
                        <input maxLength={60} className='rounded-[5px] py-1 px-3 text-[14px]' type="text" />
                    </div>
                    <div className='w-[100%] mb-5 flex flex-col'>
                        <label className='mb-1 text-[15px] text-white'>Email*</label>
                        <input maxLength={60} className='rounded-[5px] py-1 px-3 text-[14px]' type="text" />
                    </div>
                    <div className='w-[100%] mb-5 flex flex-col'>
                        <label className='mb-1 text-[15px] text-white'>Message*</label>
                        <textarea className='resize-none bg-white rounded-[5px] py-2 px-3 text-[14px]' 
                        
                            cols={5} rows={7} name="" id=""></textarea>
                    </div>
                    
                    <div className='p-3 bg-white rounded-[7px] font-[600]'>
                        <input type="Submit" />
                    </div>
                </form>
            </div>
        </div>

        
        
    </div>

  </>
}

export default Info