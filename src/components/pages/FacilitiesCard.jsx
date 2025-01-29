import React from 'react'


const FacilitiesCard = ({facilitiesImg, medical, services, icons}) => {
    return (
        <div className='bg-[#F4F6F9] p-7 rounded-2xl' >
            <div className='w-90 h-95 '>
                <img  
                className='size-full object-cover'
                src={facilitiesImg} alt="Health Images" />
            </div>

            <div className='flex justify-between mt-6 items-center'>
                <div>
                    <p className='text-s font-medium text-[#2490EB]'>{medical}</p>
                    <p className='text-3xl mt-2'>{services}</p>
                </div>

                <div>
                    {icons}
                </div>
            </div>
        </div>
    )
}

export default FacilitiesCard
