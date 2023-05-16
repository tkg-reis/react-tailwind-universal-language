import React from 'react'
import Person from './Person'
import { UeberMich } from './SectionTtl'

const ueberMich = () => {
  return (
    <>
      <div className='flex justify-around items-center mt-20'>
        <Person/>
        <UeberMich/>
      </div>
    </>
  )
}

export default ueberMich