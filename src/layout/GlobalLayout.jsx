import React from 'react'

const GlobalLayout = ({children}) => {
  return (
    <div className='flex items-center justify-center overflow-hidden'>
        <div className='max-w-[1600px]'>{children}</div>
    </div>
  )
}

export default GlobalLayout