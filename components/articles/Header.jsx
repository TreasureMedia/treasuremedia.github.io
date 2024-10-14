import React from 'react'

function Header() {
  return <>
    <div className='w-[100%] h-[70vh] flex items-center justify-center'>
        <div className='text-white w-[90%] h-[100%] rounded-3xl bg-cover bg-no-repeat bg-center  flex items-end'
        style={{backgroundImage: 'url(https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg)'}}>
            <div className='h-[100%] w-[100%] flex items-end rounded-[inherit] bg-gradient-to-t from-green-900'>
                <div className='w-[70%] my-10 mx-10'>
                    <h1 className='text-[40px] font-[600] leading-none mb-2'>
                        Feature Article Title
                    </h1>
                    <div className='w-[100%] text-[20px] mb-6'>
                        <p>Reem Ahmed - 1/1/2024</p>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    {/* Tags */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Header