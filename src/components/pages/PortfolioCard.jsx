import React from 'react'
import { FaPlus } from 'react-icons/fa'
// import doc from '../../assets/optalmologist.jpg'
import img from '../../assets/portrait-african-american-man-working-hospital-ward-desk.jpg';


const PortfolioCard = ({ headTxt, pTxt , doc}) => {


    return (
        <div className='bg-cover bg-top w-80 h-90 cursor-pointer p-5 flex flex-col justify-between
        '
            style={{ backgroundImage: `url(${doc})` }}
        >
            <div className='pl-20'>
                <div className='bg-[#2394EB]
            justify-self-end
            p-3
            rounded-[5px]
            flex items-center justify-center
            '> <FaPlus color='white' size={20} /> </div>
            </div>

            <div className='bg-white flex flex-col items-center self-start px-4'>
                <h6 className='text-[#2490EB] 
                text-[14px]
                '>{headTxt}</h6>
                <p className='text-2xl'> {pTxt} </p>
            </div>
        </div>
    )
}


export default PortfolioCard