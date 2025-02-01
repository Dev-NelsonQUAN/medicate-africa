import React from 'react'

const StepCard = ({imgss, roundedInTxt, emregTxt, emergP}) => {
  return (
    <div className='relative'>
        <div> 
            <div className='h-55 w-55 rounded-full  bg-center bg-cover'
            style={{backgroundImage: `url(${imgss})`}}
            >
              
            </div>

            <div className='bg-[#2490EB] w-15 h-15 rounded-full
                absolute top-1 flex justify-center items-center
            '>
                <p className='text-white text-2xl'>{roundedInTxt}</p>
            </div>
        </div>

        <div className='mt-5'>
            <h3 className='text-3xl font-medium'>{emregTxt}</h3>
            <p className='w-70 mt-2 text-[#747474]'>{emergP}</p>
        </div>
    </div>
  )
}

export default StepCard