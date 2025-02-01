import React from 'react'
import Title from '../ui/Title'
import CompLayout from '../../layout/CompLayout'
import OurClientsCard from './OurClientsCard';
import imgOne from '../../assets/dentalCare.jpeg'
import OurCleintsImg from './OurCleintsImg';
import logo from '../../assets/logo.png'

const OurClients = () => {
    return (
        <div className='flex flex-col px-16 item-center py-10 mb-20 '>
            <CompLayout>

                <div className='flex flex-col items-center'>
                    <div className='flex'>
                        <Title> OUR CLIENTS </Title>
                    </div>
                    <h1 className='text-4xl font-medium mt-4'>Our Client Happy Say About Us. </h1>
                </div>

                <div className='flex justify-between gap-8 mt-8'>
                    <OurClientsCard
                        txtp='There are more reasons regarding your health, so we need to watch out for it. Health is wealth they say.'
                        img={imgOne}
                        headHSix='Dr. Martin Luther'
                        position='SURGEON, HEAD'
                        />

                    <OurClientsCard
                        txtp='There are more reasons regarding your health, so we need to watch out for it. Health is wealth they say.'
                        img={imgOne}
                        headHSix='Dr. Lionell Asake'
                        position='SURGEON, HEAD'
                    />
                </div>


                <div className='border-t-1 border-zinc-500 
                py-10 flex 
                justify-between mt-30
                flex-wrap '>
                    <OurCleintsImg result={logo}  />
                    <OurCleintsImg result={logo}  />
                    <OurCleintsImg result={logo}  />
                    <OurCleintsImg result={logo}  />
                    <OurCleintsImg result={logo}  />
                </div>
            </CompLayout>
        </div>
    )
}

export default OurClients