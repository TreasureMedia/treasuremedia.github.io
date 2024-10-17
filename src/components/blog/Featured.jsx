import React from 'react'

function Featured() {
  return <>
    <div className='bg-bg w-[98%] h-[40vh] rounded-3xl flex'>
        {/* Picture */}
        <div className='w-[100%] h-[100%] bg-white rounded-[inherit] bg-cover bg-center '
        style={{backgroundImage: 'url(https://www.iziko.org.za/wp-content/uploads/2022/03/South-African-Museum-min-1-1-scaled.jpg)'}}>
            <div className='bg-gradient-to-t from-primary h-[100%] w-[100%] rounded-[inherit] px-20 flex justify-center flex-col'>
                <h1 className='text-white text-[60px] font-[800] '>Blog</h1>
                <p className='text-white text-[30px] font-[400] leading-none'>Read articles from our diverse authors.</p>
            </div>
        </div>
    </div>
  </>
}

export default Featured