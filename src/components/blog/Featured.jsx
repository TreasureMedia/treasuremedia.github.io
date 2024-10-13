import React from 'react'

function Featured() {
  return <>
    <div className='bg-bg w-[98%] h-[84vh] rounded-3xl flex'>
        {/* Picture */}
        <div className='w-[100%] h-[100%] bg-white rounded-[inherit] bg-cover'
        style={{backgroundImage: 'url(https://www.iziko.org.za/wp-content/uploads/2022/03/South-African-Museum-min-1-1-scaled.jpg)'}}>

            <div className='bg-gradient-to-t from-primary h-[100%] w-[100%] rounded-[inherit] flex items-end p-10'>

                <div>
                    <h1 className='text-white text-[40px] font-[500] leading-1 '>Feature Article</h1>
                    <h2 className='text-white mb-5'>Reem Ahmed</h2>

                    <div className='w-[95%] h-[100%] text-white font-[500] text-[18px] flex items-center justify-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>

                <a href='/pages/articles/test.html' className='text-[17px] w-[40%] drop-shadow-xl home-button flex items-center justify-center'>
                    <button className=''>
                        Read more
                    </button>
                </a>

                

            </div>
            
        </div>
        
        
    </div>
  </>
}

export default Featured