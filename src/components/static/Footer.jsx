import React from 'react'
import { CiMail } from "react-icons/ci";
import GlobalBtn from '../ui/GlobalBtn';
import Btn from '..//ui/Btn'
import footerLogo from '../../assets/footer_logo-2.png'
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#14457B] px-34 py-30  '>

            <footer className='flex'>
                <div>
                    <div className='w-70'> <img src={footerLogo} alt="Footer Logo" /> </div>

                    <p className='w-85 text-white mt-8 text-[20px]'>It helps designers plan out where the content will sit, the content to be written and approved</p>

                    <div className='flex gap-4 mt-10'>
                        <div className='flex bg-[#2C5888] p-4'>
                            <FaFacebookF className="text-white text-xl md:text-sm" />
                        </div>

                        <div className='bg-[#2C5888] p-4'>
                            <FaGooglePlusG className="text-white text-2xl md:text-sm" />
                        </div>
                        <div className='bg-[#2C5888] p-4'>
                            <FaInstagram className="text-white text-xl md:text-sm" />
                        </div>
                        <div className='bg-[#2C5888] p-4'>
                            <FaPinterest className="text-white text-2xl md:text-sm" />

                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div>  </div>
            </footer>
        </div>
    )
}

export default Footer