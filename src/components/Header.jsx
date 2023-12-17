import React from 'react'

export default function Header({count}) {
  return (
    <div className='fixed bg-white z-1 w-full'>

        
      <h1 className='font-bold text-xl m-2'>Infinite scroll using React and Unplash </h1>
      <p className='fixed top-0 right-0 font-bold text-xl m-2'>Total images: {count}</p>

      
    </div>
  )
}
