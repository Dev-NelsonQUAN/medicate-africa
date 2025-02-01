import React from 'react'
import GlobalBtn from '../ui/GlobalBtn'
import { BsPerson, BsPersonFill } from 'react-icons/bs'
import { RiChatSmile2Fill } from 'react-icons/ri'
import { FaPlus } from 'react-icons/fa'

const OurBlogCards = () => {
  return (
    <div className='rounded-[5px]'>
      <div className='bg-[url(./assets/happyFemaleDoc.jpg)]
       w-100 h-80 bg-center bg-cover
       flex items-end p-4
       '>
        <div className='bg-[#0a3e69] p-2 '>
          <p className='text-white font-medium'> DECEMBER 5, 2024 
          </p>
        </div>

      </div>

      <div className='bg-white px-6 pt-2 pb-8'>
        <div className='flex gap-4 py-4'>
          <p className='flex items-center gap-2 font-medium'> <BsPersonFill size={22} color='#2390EB' /> ADMIN</p>
          <p className='flex items-center gap-2 font-medium'> <RiChatSmile2Fill size={22}  color='#2394EB'/> 0 COMMENTS </p>
        </div>

        <div className='border-t-1 border-gray-600'>
          <h3 className='text-3xl w-90 mt-4'> Heart Failure Treatment: High Blood Pressure</h3>
          <p className='w-80 mt-6'>It is a long established otganization asa regarding healt, best for your health isshhhh</p>
        </div>

        <div className='mt-4'>
          <GlobalBtn textBtn='READ MORE' iconBtn={<FaPlus />} gap='gap-4' color='text-[#2394EB]' />
        </div>
      </div>
    </div>
  )
}

export default OurBlogCards