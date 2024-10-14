import React from 'react'
import { motion } from 'framer-motion'
import img1 from '../../assets/images/about_1.JPG'
import img2 from '../../assets/images/about_2.JPG'

const Info = () => {
  return <>
    <div className='w-[100%] bg-gradient-to-b from-[#2f4616] to-background from-10% flex justify-center items-center flex-col text-white'>

        <motion.div 
        transition={{
            delay:0.5,
            type:'easeOut',
            stiffness:200,
            duration:0.5
          }}
          
        className='about-section mt-20 mb-36 '>
            <div className='h-[550px] w-[550px] rounded-2xl bg-bg bg-cover bg-no-repeat bg-center'
            style={{backgroundImage:`URL(${img1})`}}>
                <div className='bg-gradient-to-t from-bg/45 w-[100%] h-[100%] rounded-[inherit]'>

                </div>
            </div>
            <div className='w-[50%] font-[500] text-[18px]'>
                <h1 className='about-header text-bg'>Empowering the Cape Community: The Journey of Treasure Media</h1>
                <p>
                Originally launched as a bi-monthly magazine, Treasure
                quickly established itself as a trusted voice in the community, providing insightful content on
                contemporary lifestyle issues, including health and well-being, fashion, parenting, food,
                motivational pieces, and legal advice.
                </p>
                <br/>
                <p>
                However, Treasure Media is far more than just a publication—it is a movement dedicated to
                empowering its readers and improving the lives of individuals in the Cape community. With a
                firm belief that true progress begins at the grassroots level, the magazine has committed
                itself to creating employment opportunities, with this mission remaining at its core over the
                past two decades. As Treasure grew, it became a household name, valued not only for its
                rich content but also for its meaningful engagement with readers and its drive to make a
                tangible impact on society.
                </p>
                <br/>
                <p>
                Treasure Media has forged powerful partnerships with community organizations and
                institutions, particularly in addressing critical issues such as Gender-Based Violence.
                Through collaborations with safe houses for women, Treasure Media has been a tireless
                advocate, bringing the plight of victims to the forefront and ensuring that their voices are
                heard. Moreover, Treasure has embraced the youth, supported youth organizations, and
                promoted sports events to uplift the younger generation.
                </p>
            </div>
        </motion.div>

        <div className='about-section mt-10 '>
            <div className='w-[50%] font-[500] text-[18px]'>
                <h1 className='about-header  text-bg'>Commitment to Honoring Unsung Heroes</h1>
                <p>
                During the COVID-19 pandemic,
                when unemployment surged, Treasure stepped up with workshops on gardening and
                sustainable living, teaching people how to cultivate their own vegetable gardens. The team
                also hosted events, giving home-based businesses a lifeline and a space to trade.
                One of Treasure Media’s most notable achievements is the creation of exhibitions in
                collaboration with the Cape Castle of Good Hope. This exhibition, inspired by the media
                house’s rich content, serves as a tribute to the unsung heroes of today, preserving their
                stories for future generations.
                </p>
                <br/>
                <p>
                Looking ahead, Treasure aims to deepen its impact by creating an exhibition specifically
                focusing on the South African Liberation Veterans and Sports Veterans. Shedding light on
                the Unsung Heroes. This initiative provides an opportunities whereby future generations can
                learn about the unsung heroes of today and access valuable information for personal and
                community development. The media house’s dedication to creating employment, hosting
                educational symposiums, and promoting societal upliftment remains stronger than ever, with
                a vision to shape a brighter, more inclusive future for all.    
                </p>
            </div>
            <div className='h-[550px] rounded-2xl w-[550px] bg-bg bg-cover bg-center bg-no-repeat '
            style={{backgroundImage:`URL(${img2})`}}>
                <div className='bg-gradient-to-t from-bg/45 w-[100%] h-[100%] rounded-[inherit]'>

                </div>
            </div>

        </div>

        <div className='about-section my-24'>
            <p className='text-[50px] text-center font-[900] p-10 text-[#ffde8b]'>
            Treasure is, indeed, a treasure in every sense of the word.
            </p>
        </div>
    </div>
  </>
}

export default Info