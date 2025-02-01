import React from 'react'
import Title from '../ui/Title'
import CompLayout from '../../layout/CompLayout'
import OurBlogCards from './OurBlogCards'
import { CiMail } from 'react-icons/ci'
import GlobalBtn from '../ui/GlobalBtn'
import Btn from '../ui/Btn'

const OurBlog = () => {
  return (
    <div className='bg-[#F4F6F9] py-35 pb-50 px-18 relative' >
        <CompLayout>

        <div className='flex flex-col items-center '>
          <div className='flex'>
            <Title> OUR BLOG </Title>
          </div>
            <h1 className='text-3xl'>See Our Latest Blog</h1>
        </div>

        <div className='mt-8 flex flex-wrap justify-between'>
            <OurBlogCards />
            <OurBlogCards />
            <OurBlogCards />
        </div>
                    <div className='bg-[#2390EB] px-4 py-12 absolute bottom-[-60px]
                    flex gap-28
                    '>
                        <div className='flex items-center gap-4'>
                            <CiMail color='white' size={90} />
                            <h2 className='text-4xl w-110 font-medium'> Latest Updates Subscribe To Our Newsletter </h2>
                        </div>
        
                        <form className='flex py-4 gap-4'>
                            <input
                                className='w-130 bg-[#43A0EE] px-3 placeholder-white'
                                type='text' placeholder='Enter Your Email' />
                            <Btn padding='5px 10px' bg='white' color='#2390EB'> SIGN UP</Btn>
                        </form>
                    </div> 
        
        </CompLayout>
    </div>
  )
}

export default OurBlog