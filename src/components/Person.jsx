import React from 'react'
import MyImg from '../public/my_picture_02.jpg'

const Person = () => {
  return (
    <>
      <div className='rounded-full overflow-hidden max-w-md lg:w-1/4'>
          <img src={MyImg} alt="" className='shadow-2xl flex justify-center items-center' />
      </div>
    </>
  )
}

export default Person