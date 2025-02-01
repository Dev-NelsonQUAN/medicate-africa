import React from 'react'
import Title from '../ui/Title'
import PortfolioCard from './PortfolioCard'
import imgOne from '../../assets/eyeCare.jpeg'
import imgTwo from '../../assets/dentalCare.jpeg'
import imgThree from '../../assets/happy-afro-kid-regular-check-up-teeth-dental-clinic.jpg'
import imgFour from '../../assets/nurse-her-work-clinic-wearing-scrubs-gloves.jpg' 

const Portfolio = () => {
  return (
    <div className='bg-[#2490EB] relative flex flex-col items-center  pt-25'>
      <div>
        <div className='flex justify-center' >
          {/* qfyqey */}
          <Title > OUR PORTFOLIO </Title>
        </div>
        <h1 className='text-white text-4xl mt-6'>All The Great Work That We Done </h1>
      </div>

      <div className='h-110 w-full mt-30 bg-white'>

      </div>

      <div className='mt-8 flex gap-6 absolute py-35
      top-20
      ' >
        <PortfolioCard headTxt='Family' 
        doc={imgOne}
          pTxt='Eye Health for families'
        />
        <PortfolioCard headTxt='Health'
        doc={imgTwo}
          pTxt='Dental Care for families'
        />
        <PortfolioCard headTxt='Personal'
        doc={imgThree}
          pTxt="We care for Your seeds."        
          />

        <PortfolioCard headTxt='Insured'
        doc={imgFour}
          pTxt='Providing Health for all'
        />
      </div>


    </div>
  )
}

export default Portfolio