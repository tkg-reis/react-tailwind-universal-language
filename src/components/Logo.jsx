import React from 'react'
import logoImg from '../public/logo.png'

const logo = () => {
    return (
    <div className='container flex justify-center items-center h-24 w-24'>
        <a href="/">
            <img 
            src={logoImg} 
            alt="mein Logo"
            className='rounded-full sm:w-1/12 lg:w-full scale-110 '
            />
        </a>
    </div>
    ) 
}

export default logo