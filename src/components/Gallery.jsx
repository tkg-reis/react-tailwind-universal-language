import React from 'react'
import  Portfolio_1 from '../public/portfolio_1.png'
import  Portfolio_2 from '../public/portfolio_2.png'
import  Bm from '../public/bm.png'
import  Dragon from '../public/dragon_03.png'

const Gallery = () => {
    return (
    <>
        <div>
            <ul className='flex flex-wrap gap-14 justify-center items-center m-auto w-11/12'>
                <li className='h-80 w-96'>
                    <a href="https://takaki-masataka-web01.work">
                        <img src={Portfolio_1} alt="" className='w-full h-full object-cover shadow-2xl rounded-md'/>
                    </a>
                </li>
                <li className='h-80 w-96'>
                    <a href="https://takaki-masataka-web02.work">
                        <img src={Portfolio_2} alt="" className='w-full h-full object-cover shadow-2xl rounded-md'/>
                    </a>
                </li>
                <li className='h-80 w-96'>
                    <a href="https://ylc-bunkyo-machitabi.com/">
                        <img src={Bm} alt="" className='w-full h-full object-cover shadow-2xl rounded-md' />
                    </a>
                </li>
                <li className='h-80 w-96'>
                    <a href="">
                        <img src={Dragon} alt="" className='w-full h-full object-cover shadow-2xl rounded-md'/>
                    </a>
                </li>
            </ul>
        </div>
    </>
    )
}

export default Gallery