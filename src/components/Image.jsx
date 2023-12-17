import React from 'react'

export default function Image({image}) {
  return (
    <div className='w-[400px] border border-gray-400 rounded flex justify-center m-2'>

        <img src={image} alt="" className=''/>
      
    </div>
  )
}
