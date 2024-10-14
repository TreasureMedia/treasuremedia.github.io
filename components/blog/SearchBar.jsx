import React from 'react'

function SearchBar() {
  return <>
    <div className='w-[96%] py-5 flex items-end justify-end '>
        <div className='flex justify-center items-center bg-primary px-2 py-1 rounded-xl'>
            <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" class="size-6">
                <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clip-rule="evenodd" />
            </svg>

            <input className='w-[250px] bg-none bg-[inherit] outline-none py-2 mx-2 rounded-xl text-white placeholder:text-white/70 placeholder:font-[500]' 
            type="text" placeholder='Search...' />

            <div className=''>
                <button className='flex items center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" class="size-6">
                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  </>
}

export default SearchBar