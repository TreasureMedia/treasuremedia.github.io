import React from 'react'
import Featured from './Featured'
import Article from './Article'
import articles from '../../pages/blog/list/posts.json'
import SearchBar from './SearchBar'
import img1 from "../../pages/blog/list/pictures/zelda.jpg"
import txt1 from "../../pages/blog/list/zelda.txt"

function Articles() {

  const files = [
    {
      txt:txt1,
      img:img1
    }
  ]

  return <>
    <div className='w-[100%] flex items-center justify-center flex-col'>
        <Featured />
        {/* Tags sorting */}
        <SearchBar />

        {/* Articles */}
        <div className='w-[98%] pb-10 grid grid-cols-4 gap-y-10 justify-items-center place-items-start'>
            
          {articles.map((item, index) => {
            return <Article img={`${files[0].img}`}
            title={`${item.title}`}
            author={item.author}
            text={item.introduction} 
            date={item.date}
            url= {files[0].txt}
            className=""/>
          })}
            
            
        </div>
    </div>
  </>
}

export default Articles