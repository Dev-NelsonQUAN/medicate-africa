import React from 'react'
import Title from '../ui/Title'
import { FaPlus } from 'react-icons/fa6'
import Btn from '../ui/Btn'
import img from '../../assets/nurse-her-work-clinic-wearing-scrubs-gloves.jpg'
import { LiaStethoscopeSolid } from "react-icons/lia";


const AboutDetails = () => {
  return (
    <div className='relative flex'>
      <div className='bg-[#F4F6F9] w-1/2 h-205'></div>
      <div className='bg-[#14457B] w-1/2 h-205'> </div>

      <div className='flex absolute top-40 left-35 gap-0'>
        <div className='w-130'>
          <div className='pr-106'> 
            <Title> ABOUT US </Title>
          </div>

          <div>
            <h4 className='font-medium text-5xl w-105 leading-15 mt-4 '>Joining Hands with Eradicating illness </h4>
            <p className='text-s font-light w-120 leading-loose mt-4 '>
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
              <p className='text-s font-light mt-4 w-89'> There are many variations of passages of patients in with us </p>
            </div>
          </div>

          <div className='pr-90 mt-15'>
            <Btn> READ MORE <FaPlus /> </Btn>
          </div>
        </div>

        <div className='flex'>
          <div className='w-135'>
            <img 
              className='size-full object-cover'
            src={img} alt="Doctor And Patient" />
          </div>

            <div className='px-6 flex flex-col justify-center gap-7'>
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