import React from 'react'
import doc from "../../assets/front-view-black-nurses-work.jpg"
import Title from '../ui/Title'
import GlobalBtn from '../ui/GlobalBtn'

const Appointment = () => {
  return (
    <div className='relative'>
        <div className='bg-[#F4F6F9] h-50 mb-40'></div>
        <div className='bg-white h-80 '> </div>

        <div className='absolute bg-[#2390EB] top-20 flex left-34 pl-10 pr-2
             gap-10
        '>
            <div className='w-180'>
                <img 
                className='size-full object-cover
                
                '
                src={doc} alt="Doctor" />
            </div>

            <form className='py-20'>
                <div className='flex mb-2'>
                <Title> Appointment </Title>
                </div>
                <label className='text-5xl text-white'> Apply For Free Treatments </label>

                <div className='flex flex-wrap gap-6 mt-10'>
                    <input 
                    className='w-100
                    bg-[#43A0EE]
                    pl-4
                    py-4
                    placeholder-white
                    
                    '
                    type="text" placeholder='Your Name'/>
                    <input
                    className='w-100
                    bg-[#43A0EE]
                    pl-4
                    py-4
                    placeholder-white
                    '
                    type="email" placeholder='Your Email' />
                    <input 
                    className='w-100 
                    bg-[#43A0EE]
                    pl-4
                    py-4
                    placeholder-white
                    '
                    type="text" placeholder='Your Doctor Name' />
                    <input
                    className='w-100 
                    bg-[#43A0EE]
                    py-4
                    pl-4
                    placeholder-white
                    '
                    type="text" placeholder='Your Disease name' />
                </div>

                <div className='flex mt-10'>
                    <GlobalBtn bg='bg-white' 
                    padding='px-4'
                    paddingY='py-2'
                    rounded='rounded-[5px]' textBtn='SEND MESSAGE' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Appointment