import React from 'react'
import MyImg from '../public/my_picture_02.jpg'

const Person = () => {
  return (
    <div>
        <div className='w-72 h-72'>
            <img src={MyImg} alt="" className='rounded-full sm:w-1/6 lg:w-full shadow-2xl'/>
        </div>
    </div>
  )
}

export default Person