import React from 'react';
import HeroBotCards from './HeroBotCards';
import { FaUserDoctor } from "react-icons/fa6";
import { GiDoctorFace } from "react-icons/gi";
import { TbCheckupList } from "react-icons/tb";
import { TbReportMedical } from "react-icons/tb";
import Btn from "../ui/Btn"
import { FaPhoneSquare, FaPlus } from 'react-icons/fa';

const AfterHero = () => {
  return (
    <div className=' 
    bg-[#F4F6F9]
    h-70
    relative
 px-34 py-11'>
        <div className=' absolute  bottom-0 flex gap-8'>
            <HeroBotCards 
            background='blue-500'
            iconLeft={<FaUserDoctor size={50} />}
            iconRight={<FaUserDoctor color='grey' size={50}/>}
            h1Txts='Emergency Cases' 
            pTxts='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
            iconBottom={<FaPhoneSquare />}
            number='+234-907784858'
            />
            <HeroBotCards 
            // background='bg-blue-600'
            iconLeft={<GiDoctorFace size={50} />}
            iconRight={<GiDoctorFace color='grey' size={50} />}
            h1Txts='Doctors Timetable' 
            pTxts='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
            Btn={<Btn> Timetable <FaPlus /> </Btn>}
            />

            <HeroBotCards 
            iconLeft={<TbCheckupList  size={50} />}
            iconRight={<TbReportMedical color='grey' size={50}  />}
            h1Txts='Opening Hours' 
            dayOne='Monday'
            dayOneTM='8:00 - 9:00'
            dayTwo='Tuesday'
            dayTwoTM='7:00 - 8:00'
            dayThree='Wednesday'
            dayThreeTM='6:00 - 5:00'
            dayFour='Thursday'
            dayFourTM='5:00 - 7:00'
            />
        </div>
    </div>
  )
}

export default AfterHero