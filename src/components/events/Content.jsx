import React from 'react'
import { useState } from 'react'
import EventTemplate from './EventTemplate'



function Content() {
  
  return <>
    <div className='w-[100%] h-[67vh] flex items-center justify-between flex-col'>
        <EventTemplate
        title='Coming soon...'
        img='https://www.apartheidmuseum.org/uploads/_imager/files/7194/apartheid_metal_0a3455fa8f579c24474e4b32da322bf3.webp'/>

        <EventTemplate 
        title='Coming soon...'
        img='https://images.squarespace-cdn.com/content/v1/6124c24af233570e0f9a2f46/051facaa-2d6d-4552-9088-b24b9a4d4c32/B22HESR2351.JPG' />
    </div>
  </>
}

export default Content