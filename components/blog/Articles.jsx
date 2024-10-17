import React from 'react'
import Featured from './Featured'
import Article from './Article'
import articles from '../../pages/blog/list/posts.json'
import SearchBar from './SearchBar'
import img1 from "../../pages/blog/list/pictures/zelda.jpg"
import txt1 from "../../pages/blog/list/zelda.txt"
import img2 from "../../pages/blog/list/pictures/yaseen.jpeg"
import txt2 from "../../pages/blog/list/yaseen.txt"
import img3 from "../../pages/blog/list/pictures/patricia.jpeg"
import txt3 from "../../pages/blog/list/patricia.txt"
import img4 from "../../pages/blog/list/pictures/farid.jpeg"
import txt4 from "../../pages/blog/list/farid.txt"
import img5 from "../../pages/blog/list/pictures/desmond.jpeg"
import txt5 from "../../pages/blog/list/desmond.txt"
import img6 from "../../pages/blog/list/pictures/dehran.jpeg"
import txt6 from "../../pages/blog/list/dehran.txt"
import img7 from "../../pages/blog/list/pictures/charles.jpeg"
import txt7 from "../../pages/blog/list/charles.txt"
import img8 from "../../pages/blog/list/pictures/bonita.jpeg"
import txt8 from "../../pages/blog/list/bonita.txt"
import img9 from "../../pages/blog/list/pictures/temp1.jpg"   
import txt9 from "../../pages/blog/list/asa.txt"
import img10 from "../../pages/blog/list/pictures/richard.jpeg"
import txt10 from "../../pages/blog/list/richard.txt"
import img11 from "../../pages/blog/list/pictures/temp2.jpg"
import txt11 from "../../pages/blog/list/geraldine.txt"
import img12 from "../../pages/blog/list/pictures/julian.jpeg"
import txt12 from "../../pages/blog/list/julian.txt"
import img13 from "../../pages/blog/list/pictures/deaf.jpeg"
import txt13 from "../../pages/blog/list/deaf.txt"
import img14 from "../../pages/blog/list/pictures/fidel.jpeg"
import txt14 from "../../pages/blog/list/fidel.txt"
import img15 from "../../pages/blog/list/pictures/issel.jpg"
import txt15 from "../../pages/blog/list/issel.txt"
import img16 from "../../pages/blog/list/pictures/fatima.jpeg"
import txt16 from "../../pages/blog/list/fatima.txt"
import img17 from "../../pages/blog/list/pictures/thandi.jpg"
import txt17 from "../../pages/blog/list/thandi.txt"
import img18 from "../../pages/blog/list/pictures/majiedie.jpeg"
import txt18 from "../../pages/blog/list/majiedie.txt"
import img19 from "../../pages/blog/list/pictures/mansoor.jpeg"
import txt19 from "../../pages/blog/list/mansoor.txt"
import img20 from "../../pages/blog/list/pictures/temp3.jpg"
import txt20 from "../../pages/blog/list/hanief.txt"
import img21 from "../../pages/blog/list/pictures/shahid.jpg"
import txt21 from "../../pages/blog/list/shahid.txt"
import img22 from "../../pages/blog/list/pictures/waheed.jpeg"
import txt22 from "../../pages/blog/list/waheed.txt"

function Articles() {

  const files = [
    {
      txt:txt1,
      img:img1
    },
    {
      txt:txt2,
      img:img2
    },
    {
      txt:txt3,
      img:img3
    },
    {
      txt:txt4,
      img:img4
    },
    {
      txt:txt5,
      img:img5
    },
    {
      txt:txt6,
      img:img6
    },
    {
      txt:txt7,
      img:img7
    },
    {
      txt:txt8,
      img:img8
    },
    {
      txt:txt9,
      img:img9
    },
    {
      txt:txt10,
      img:img10
    },
    {
      txt:txt11,
      img:img11
    },
    {
      txt:txt12,
      img:img12
    },
    {
      txt:txt13,
      img:img13
    },
    {
      txt:txt14,
      img:img14
    },
    {
      txt:txt15,
      img:img15
    },
    {
      txt:txt16,
      img:img16
    },
    {
      txt:txt17,
      img:img17
    },
    {
      txt:txt18,
      img:img18
    },
    {
      txt:txt19,
      img:img19
    },
    {
      txt:txt20,
      img:img20
    },
    {
      txt:txt21,
      img:img21
    },
    {
      txt:txt22,
      img:img22
    },

  ]

  return <>
    <div className='w-[100%] flex items-center justify-center flex-col'>
        <Featured />
        {/* Tags sorting */}
        <SearchBar />

        {/* Articles */}
        <div className='w-[98%] pb-10 grid grid-cols-4 gap-y-10 justify-items-center place-items-start'>
            
          {articles.map((item, index) => {
            return <Article img={`${files[index].img}`}
            title={`${item.title}`}
            author={item.author}
            text={item.introduction} 
            date={item.date}
            url= {files[index].txt}
            className=""/>
          })}
            
            
        </div>
    </div>
  </>
}

export default Articles