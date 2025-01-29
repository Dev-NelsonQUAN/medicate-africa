import React from 'react';
import img from '../../assets/portrait-african-american-man-working-hospital-ward-desk.jpg';
import Btn from '../ui/Btn'
import { BiPlus } from 'react-icons/bi';
import Title from '../ui/Title';

const Heropage = () => {
    return (
        <div className=' relative bg-cover bg-top h-180'
            style= {{ backgroundImage: `url(${img})` }}
        >

            <div className='absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/90 to-transparent px-34 flex items-center'>
                <div className='flex flex-col gap-4' >
                    <div className='pr-82'>
                        <Title> HIGHER LEVEL OF CARE </Title>
                    </div>

                    <h1 className='text-6xl font-medium leading-16'>
                        Setting Standards In Physiotherapy
                    </h1>
                    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout</p>
                    <div className='pr-91'>
                        <Btn padding='10px 20px'> READ MORE <BiPlus /> </Btn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heropage;


// import React from 'react';
// import img from '../../assets/portrait-african-american-man-working-hospital-ward-desk.jpg';

// const Heropage = () => {
//     return (
                {/* <div className='absolute inset-y-0 left-0 w-1/2 bg-black/50> */}

//         <div className={`bg-[url('${img}')] bg-cover bg-center h-screen `}> {/* Added bg-cover and h-screen */}
//             wefeqgy
//         </div>
//     );
// };

// export default Heropage;