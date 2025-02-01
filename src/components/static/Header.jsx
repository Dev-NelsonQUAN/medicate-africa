import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Logo from "../../assets/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Btn from "../ui/Btn"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:block md:block w-full lg:px-34 bg-[#13457a] md:px-2">
        <div className="w-full text-[#d6d6d642] flex flex-col md:flex-row justify-between items-center">

          <div className="flex flex-wrap md:flex-nowrap font-medium cursor-pointer">
            <div className="flex py-2 md:py-3.5 px-4 md:px-6 gap-2 md:gap-3 justify-center items-center border-r border-gray-400">
              <FaPhoneAlt className="text-white text-lg md:text-sm" />
              <p className="text-white">+234-808-395-1403</p>
            </div>
            <div className="flex py-2 md:py-3.5 px-4 md:px-6 gap-2 md:gap-3 justify-center items-center border-r border-gray-400">
              <IoMail className="text-white text-lg md:text-sm" />
              <p className="text-white">medicate@gmail.com</p>
            </div>
          </div>

          <div className="flex space-x-3 md:space-x-0">
            <div className="border-l border-gray-400 py-2 md:py-4 px-3 md:px-6 hover:bg-blue-500 transition-all">
              <FaFacebookF className="text-white text-xl md:text-sm" />
            </div>
            <div className="border-l border-gray-400 py-2 md:py-4 px-3 md:px-6 hover:bg-blue-500 transition-all">
              <FaGooglePlusG className="text-white text-2xl md:text-sm" />
            </div>
            <div className="border-l border-gray-400 py-2 md:py-4 px-3 md:px-6 hover:bg-blue-500 transition-all">
              <FaInstagram className="text-white text-xl md:text-sm" />
            </div>
            <div className="border-l border-gray-400 py-2 md:py-4 px-3 md:px-6 hover:bg-blue-500 transition-all">
              <FaPinterest className="text-white text-2xl md:text-sm" />
            </div>
          </div>
        </div>
      </div>

      <header className="
      lg:top-12 top-0 md:top-15 left-0 w-full bg-white shadow-md z-50 md:px-8 py-4 flex justify-between items-center 
      lg:px-34
      ">
        <img className="w-40 md:w-50 cursor-pointer" src={Logo} alt="Medicate Logo" />

        <nav className="hidden md:flex justify-center items-center gap-6">
          <ul className="lg:flex justify-center items-center gap-5 hidden">
            {["HOME", "PAGES", "SERVICES", "PROJECTS", "BLOG", "CONTACT US"].map((item, index) => (
              <li key={index} className="flex justify-center items-center gap-2 text-lg text-gray-500 font-medium">
                <p className={`cursor-pointer hover:text-blue-500 duration-300 ${item === "HOME" ? "text-blue-500" : "text-black"}`}>
                  {item}
                </p>
                {item !== "CONTACT US" && <IoIosArrowDown />}
              </li>
            ))}
          </ul>
          <IoIosSearch size={30} className="cursor-pointer" />
          <Btn padding='13px 30px'> APPOINTMENTS            
            <BiPlus size={20} />
          </Btn>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-3xl text-blue-500">
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center gap-4 py-5">
            {["HOME", "PAGES", "SERVICES", "PROJECTS", "BLOG", "CONTACT US"].map((item, index) => (
              <li key={index} className="text-lg text-gray-500 font-medium">
                <p className="cursor-pointer hover:text-blue-500 duration-300">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;


// import React from 'react'
// import { BsInstagram, } from 'react-icons/bs'
// import { CgMail, CgPhone } from 'react-icons/cg'
// import { FaGooglePlusG, FaPhoneAlt } from 'react-icons/fa'
// import { FaFacebookF } from 'react-icons/fa6'
// import { PiArrowLineDownThin, PiPinterestLogoFill } from 'react-icons/pi'
// import logo from '../../assets/logo.png'
// import { IoArrowDown, IoArrowDownOutline, IoMail } from 'react-icons/io5'
// import { TbArrowNarrowDown } from 'react-icons/tb'
// import { BiArrowFromBottom, BiMenu, BiPlus, BiSearch } from 'react-icons/bi'
// import { IoIosArrowDown } from 'react-icons/io'
// import Btn from "../ui/Btn"

// const Header = () => {

//   return (
//     <>
//       <div className='w-full px-34 bg-[#13457a]'>
//         <div className='w-full outline-1 text-[#d6d6d642] flex justify-between items-center border-r-2'>
//           <div className='flex font-medium cursor-pointer'>
//             <div className='flex py-3 px-6 gap-3 justify-center items-center border-r-2'>
//               <FaPhoneAlt color='white' />
//               <p className='text-white'>+234(783203898)</p>
//             </div>

//             <div className='flex py-3.5 px-6 gap-3 justify-center items-center border-r-2'>
//               <IoMail color='white' />
//               <p className='text-white'>info@nelsonthemes.com</p>
//             </div>
//           </div>

//           <div className='flex justify-center items-center cursor-pointer'>
//             <div className='border-l-2 py-4 px-6 hover:bg-blue-500 delay-100 transition-all ease-in-out'>
//               <FaFacebookF color='white'/>
//             </div>
//             <div className='border-l-2 py-4 px-6 hover:bg-blue-500 delay-100 transition-all ease-in-out'>
//               <BsInstagram color='white' />
//             </div>
//             <div className='border-l-2 py-4 px-6 hover:bg-blue-500 delay-100 transition-all ease-in-out'>
//               <FaGooglePlusG color='white' />
//             </div>
//             <div className='border-l-2 py-4 px-6 hover:bg-blue-500 delay-100 transition-all ease-in-out'>
//               <PiPinterestLogoFill color='white' />
//             </div>

//           </div>
//         </div>

//       </div>


//       <div className='flex justify-between bg-white px-34 py-4'>
//         <div className='w-50'>
//           <img src={logo} alt="Medicate Logo" />
//         </div>

//         <div className='flex items-center gap-10'>
//           <nav className='
//           hidden
//            lg:flex
//           '>
//             <ul className='flex gap-4 '>
//               <li className='flex items-center gap-2 cursor-pointer'>HOME <IoIosArrowDown /> </li>
//               <li className='flex items-center gap-2 cursor-pointer'> PAGES <IoIosArrowDown />  </li>
//               <li className='flex items-center gap-2 cursor-pointer'> SERVICES <IoIosArrowDown />  </li>
//               <li className='flex items-center gap-2 cursor-pointer'> PROJECTS <IoIosArrowDown />  </li>
//               <li className='flex items-center gap-2 cursor-pointer'> BLOG <IoIosArrowDown />  </li>
//               <li> CONTACT US </li>
//             </ul>
//           </nav>

//           <BiSearch size={25}
//             className='cursor-pointer'
//           />

//           <Btn padding='13px 30px'> APPOINTMENTS
//             <BiPlus size={20} />
//           </Btn>

//           <div className='bg-[#2390EB]  justify-center
//           rounded-[5px]
//           items-center p-2 hidden md:block[768px]'>
//             <BiMenu color='white' size={30} />
//           </div>
//         </div>

//       </div>

//       <header className=''>

//       </header>
//     </>

//   )
// }

// export default Header