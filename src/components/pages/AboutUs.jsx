import React from 'react'
import docNPatient from '../../assets/doctor-patient-ophthalmologist-s-office (1).jpg'
import Title from '../ui/Title'
import { FaPlus } from 'react-icons/fa'
import { FaCheck } from "react-icons/fa6";
import Btn from '../ui/Btn'


const AboutUs = () => {
    return (
        <div className='px-34 flex py-20 pb-30 bg-[#F4F6F9] gap-12'>
            <div className='w-300'>
                <img
                    className='w-full h-full object-cover'
                    src={docNPatient}
                    alt="Doctor and patients" />
            </div>

            <div className='py-4'>
                <div className=' '>
                    <div className='pr-107'>
                        <Title> WHAT ABOUT US </Title>
                    </div>

                    <div className='mt-2'>
                        <h1 className='text-5xl font-medium leading-13'>The Heart and Science of Medicate test</h1>
                        <p 
                            className='font-light text-s leading-7 mt-2'
                        >It is a long established fact that a reader will be distracted by at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className='my-7 flex flex-col gap-5 font-bold'>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Comprehensive Inpatient Services</p>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Medical And Surgical Services</p>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Outpatient Services</p>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Medicine & instrument</p>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Specialised Support Service</p>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Instant Operation & Appointment</p>
                </div>

                <div className='pt-5 pr-100'>
                    <Btn> READ MORE <FaPlus /> </Btn>
                </div>
            </div>
        </div>
    )
}

export default AboutUs 