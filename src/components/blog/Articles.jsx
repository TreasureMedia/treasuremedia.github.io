import React from 'react'
import Featured from './Featured'
import Article from './Article'
import data from '../../pages/blog/posts.json'
import SearchBar from './SearchBar'

function Articles() {

  // const apiKey = "AIzaSyBB4Kuv0wYarmOz1EdFOFwH7nr9Mg7VrjI";
  // const blogId = "5594908279712012107";
  // fetch(
  //   `https://www.googleapis.com/blogger/v3/blogs/${blogId}`
  // ).then(res => console.log(res));

  


  return <>
    <div className='flex items-center justify-center flex-col'>
        <Featured />
        {/* Tags sorting */}
        <SearchBar />

        {/* Articles */}
        <div className='w-[98%] pb-10 grid grid-cols-4 gap-y-10 justify-items-center place-items-start'>

          {/* {info.map((item, index) => {
            return <Article img={`${item.img}`}
            title={`${item.title}`}
            author='Reem Ahmed'
            text="If you're willing to go to unethical lengths, this story will bring inspiration for your next successful endeavours." 
            date="1/1/2024"/>
          })}
             */}
            
        </div>
    </div>
  </>
}

export default Articles