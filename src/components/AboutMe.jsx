import React from 'react'
import Person from './Person'
import { UeberMich } from './SectionTtl'
import Flex from './Flex'
import PersonInfo from './PersonInfo'

const AboutMe = () => {
  return (
    <>
      <div className='mx-auto w-11/12'>
        <UeberMich/>
        <Flex>
          <PersonInfo/>
          <Person/>
        </Flex>
      </div>
    </>
  )
}

export default AboutMe