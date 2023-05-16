import React from 'react'
import { useContext } from 'react';
import { Languages } from '../App';

const nav = () => {
    const langval = useContext(Languages);
    return (
        <nav>
            <ul className='flex whitespace-nowrap'>
                <li className='mr-5 hover:text-blue-200 duration-200'>
                    <a href="/">
                        meine Werke
                    </a>
                </li>
                <li className='mr-5 hover:text-blue-200 duration-200'>
                    <a href="/">
                        über mich
                    </a>
                </li>
                <li className='mr-5 hover:text-blue-200 duration-200'>
                    <a href="/">
                        blog
                    </a>
                </li>
                <li className='mr-5 hover:text-blue-200 duration-200'>
                    <a href="/">
                        kontakt
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default nav