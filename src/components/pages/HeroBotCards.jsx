import React from 'react'

const HeroBotCards = ({ background, iconLeft, iconRight,
    h1Txts, pTxts, dayOne, dayOneTM, iconBottom, number, Btn,
    dayTwo, dayTwoTM, dayThree, dayThreeTM, dayFour, dayFourTM
}) => {
    return (
        <div className={`bg-${background} rounded-xs px-7 py-8 flex flex-col gap-4`}>
            <div className='flex justify-between'>
                <div className='flex mt-6' >{iconLeft}</div>
                <div className='flex justify-self-start '>{iconRight}</div>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl'> {h1Txts} </h1>
                <p className='w-90 text-s font-medium'> {pTxts} </p>
                <div>
                    <div className='flex justify-between px-2 '>
                        <p>{dayOne} </p>
                        <p>{dayOneTM} </p>
                    </div>

                    <div className='flex justify-between px-2'>
                        <p>{dayTwo}</p>
                        <p>{dayTwoTM}</p>
                    </div>

                    <div className='flex justify-between px-2 '>
                        <p>{dayThree}</p>
                        <p>{dayThreeTM}</p>
                    </div>

                    <div className='flex justify-between px-2 '>
                        <p>{dayFour}</p>
                        <p>{dayFourTM}</p>
                    </div>
                </div>
                <div className='flex items-center gap3'>
                    {iconBottom}
                    {number}

                    <div className='pr-55'>
                        {Btn}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroBotCards