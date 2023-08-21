import React from 'react'
import logoImg from '../public/logo.png'

const logo = () => {
    return (
    <div className='container flex justify-center items-center h-24 w-24 lg:h-32 lg:w-36 scale-110'>
        <a href="/">
            <img 
            src={logoImg} 
            alt="mein Logo"
            className='rounded-full w-full'
            />
        </a>
    </div>
    ) 
}

export default logo