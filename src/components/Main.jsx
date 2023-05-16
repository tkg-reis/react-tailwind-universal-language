import React from 'react'
import Work from './Work'
import AboutMe from './AboutMe'
import Contact from './Contact'

const Main = ({ children }) => {
    return (
        <main rounded-full="true" className='bg-gradient-to-r from-cyan-500 to-blue-500 '>
            {children}
            <Work/>
            <AboutMe/>
            <Contact/>
        </main>
    )
}

export default Main