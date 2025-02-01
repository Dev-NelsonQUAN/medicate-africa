import React from 'react'
import Title from '../ui/Title'
import { FaPlus } from 'react-icons/fa6'
import Btn from '../ui/Btn'
import img from '../../assets/nurse-her-work-clinic-wearing-scrubs-gloves.jpg'
import { LiaStethoscopeSolid } from "react-icons/lia";


const AboutDetails = () => {
  return (
    <div className='relative lg:flex'>
      <div className='bg-[#F4F6F9] lg:w-1/2 lg:h-205
          md:w-full md:h-240 
          '></div>
      <div className='bg-[#14457B] lg:w-1/2 lg:h-205
      md:w-full md:h-50 md:pr-50 lg:pr-0
      '> </div>

      <div className='flex absolute lg:top-40 lg:left-35 lg:gap-0 
       lg:flex-row md:flex-col md:left-8 md:top-22 md:gap-10
      '>
        <div className='w-130'>
          <div className='flex'> 
            <Title> ABOUT US </Title>
          </div>

          <div>
            <h4 className='font-medium lg:text-5xl lg:w-105 leading-15 mt-4 
            md:text-5xl md:w-175
            '>Joining Hands to Eradicate illness </h4>
            <p className='text-s font-light lg:w-120  
            md:w-165
            leading-loose mt-4 '>
              Medicate is here for you, waving goodbye to the illness you always experience, with God's grace, We bring health in full,for Jesus paid in full.
            </p>
          </div>

          <div className='flex items-center gap-5 mt-8'>
            <div className='size-20 rounded-full bg-[#2490EB] flex justify-center items-center
            
            '>
              <LiaStethoscopeSolid color='white' size={45} />
            </div>
            <div>
              <h6 className='font-medium text-3xl'>Infection Prevention </h6>
              <p className='text-s font-light lg:mt-4 
              md:mt-2
              lg:w-89 md:100'> There are many variations of passages of patients in with us </p>
            </div>
          </div>

          <div className='flex mt-15'>
            <Btn> READ MORE <FaPlus /> </Btn>
          </div>
        </div>

        <div className='flex lg:flex-row md:flex-col
        md:justify-center items-center md:gap-20
        '>
          <div className='lg:w-135 md:w-177 lg:h-128'>
            <img 
              className='size-full object-cover'
            src={img} alt="Doctor And Patient" />
          </div>

            <div className='lg:px-6 flex lg:flex-col md:flex-row justify-center gap-7
            md:bg-[#14457B]
            '>
              <div className='flex flex-col items-center'>
                <h5 className='font-medium text-[#1B4B7F] text-4xl '> 450+ </h5>
                <h5 className='font-medium text-white text-4xl'> 450+ </h5>
                <p className='text-white text-2xl'> Happy Patients </p>
              </div>

              <div className='flex flex-col items-center'>
                <h5 className='font-medium text-[#1B4B7F] text-4xl'> 100+ </h5>
                <h5 className='font-medium text-white text-4xl'> 100+ </h5>
                <p className='text-white text-2xl'> Saved Hearts </p>
              </div>

              <div className='flex flex-col items-center'>
                <h5 className='font-medium text-[#1B4B7F] text-4xl'> 59+ </h5>
                <h5 className='font-medium text-white text-4xl' > 59+ </h5>
                <p className='text-white text-2xl'> Expert Doctors </p>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutDetails