import React from 'react'
import Header from './Header'
import Content from './Content'

function ArticleTemplate() {
  return <>
    <div className='bg-black w-[100%]'>
      <div className='w-[100%] py-12'>

      </div>
      <Header />
      <Content />
    </div>
  </>
}

export default ArticleTemplate