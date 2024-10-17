import React from 'react'
import Featured from './Featured'
import Article from './Article'
import articles from '../../pages/blog/list/posts.json'
import SearchBar from './SearchBar'
import posts from '../../pages/blog/list/pictures/index'

function Articles() {

  return <>
    <div className='w-[100%] flex items-center justify-center flex-col'>
        <Featured />
        {/* Tags sorting */}
        <SearchBar />

        {/* Articles */}
        <div className='w-[98%] pb-10 grid grid-cols-4 gap-y-10 justify-items-center place-items-start'>
            
          {articles.map((item, index) => {
            return <Article img={`${item.img}`}
            title={`${item.title}`}
            author={item.author}
            text={item.introduction} 
            date={item.date}
            url= {item.url}
            className=""/>
          })}

          <img src={posts.img} alt="" />
            
            
        </div>
    </div>
  </>
}

export default Articles