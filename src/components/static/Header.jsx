import React from 'react'
import { BsInstagram, } from 'react-icons/bs'
import { CgMail, CgPhone } from 'react-icons/cg'
import { FaGooglePlusG, FaPhoneAlt } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { PiArrowLineDownThin, PiPinterestLogoFill } from 'react-icons/pi'
import logo from '../../assets/logo.png'
import { IoArrowDown, IoArrowDownOutline, IoMail } from 'react-icons/io5'
import { TbArrowNarrowDown } from 'react-icons/tb'
import { BiArrowFromBottom, BiPlus, BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import Btn from "../ui/Btn"

const Header = () => {

  return (
    <>
      {/* <div className=' flex items-center justify-between bg-[#14457B] px-34 text-white'>
          <div className='flex gap-4 text-s'>
            <div className='flex items-center border-x-1 gap-2 px-5 py-2'>
              <CgPhone />
              <p >+234(783203898)</p>
            </div>

            <div className='flex items-center gap-2 border-r-1 pr-3'>
              <CgMail color='' />
              </div>
              
          <div className='flex items-center gap-10 border-x-1 px-2'>
          </div>
          </div>
          
        </div> */}

      <div className='w-full px-34 bg-[#13457a]'>
        <div className='w-full outline-1 text-[#d6d6d642] flex justify-between items-center border-r-2'>
          <div className='flex font-medium cursor-pointer'>
            <div className='flex py-3 px-6 gap-3 justify-center items-center border-r-2'>
              <FaPhoneAlt color='white' />
              <p className='text-white'>+234(783203898)</p>
            </div>

            <div className='flex py-3.5 px-6 gap-3 justify-center items-center border-r-2'>
              <IoMail color='white' />
              <p className='text-white'>info@nelsonthemes.com</p>
            </div>
          </div>

          <div className='flex justify-center items-center cursor-pointer'>
            <div className='border-l-2 py-4 px-6 hover:bg-blue-500 delay-100 transition-all ease-in-out'>
              <FaFacebookF color='white'/>
            </div>
            <div className='border-l-2 py-4 px-6 hover:bg-blue-500 delay-100 transition-all ease-in-out'>
              <BsInstagram color='white' />
            </div>
            <div className='border-l-2 py-4 px-6 hover:bg-blue-500 delay-100 transition-all ease-in-out'>
              <FaGooglePlusG color='white' />
            </div>
            <div className='border-l-2 py-4 px-6 hover:bg-blue-500 delay-100 transition-all ease-in-out'>
              <PiPinterestLogoFill color='white' />
            </div>

          </div>
        </div>

      </div>


      <div className='flex justify-between bg-white px-34 py-4'>
        <div className='w-50'>
          <img src={logo} alt="Medicate Logo" />
        </div>

        <div className='flex items-center gap-10'>
          <nav>
            <ul className='flex gap-4 '>
              <li className='flex items-center gap-2 cursor-pointer'>HOME <IoIosArrowDown /> </li>
              <li className='flex items-center gap-2 cursor-pointer'> PAGES <IoIosArrowDown />  </li>
              <li className='flex items-center gap-2 cursor-pointer'> SERVICES <IoIosArrowDown />  </li>
              <li className='flex items-center gap-2 cursor-pointer'> PROJECTS <IoIosArrowDown />  </li>
              <li className='flex items-center gap-2 cursor-pointer'> BLOG <IoIosArrowDown />  </li>
              <li> CONTACT US </li>
            </ul>
          </nav>

          <BiSearch size={25}
            className='cursor-pointer'
          />

          <Btn padding='13px 30px'> APPOINTMENTS
            <BiPlus size={20} />
          </Btn>
        </div>

      </div>

      <header className=''>

      </header>
    </>

  )
}

export default Header