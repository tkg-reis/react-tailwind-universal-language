import React from 'react'
import  Portfolio_1 from '../public/portfolio_1.png'
import  Portfolio_2 from '../public/portfolio_2.png'
import  Bm from '../public/bm.png'
import  TobePrepared from '../public/toBePrepared.png'

const Gallery = () => {
    return (
    <>
        <div>
            <ul className='flex flex-wrap gap-14 justify-center items-center m-auto w-11/12'>
                <li className='w-2/6 h-3/6'>
                    <a href="">
                        <img src={Portfolio_1} alt="" className='w-full h-full object-cover shadow-2xl rounded-full'/>
                    </a>
                </li>
                <li className='w-2/6 h-3/6'>
                    <a href="">
                        <img src={Portfolio_2} alt="" className='w-full h-full object-cover shadow-2xl rounded-full'/>
                    </a>
                </li>
                <li className='w-2/6 h-3/6'>
                    <a href="">
                        <img src={Bm} alt="" className='w-full h-full object-cover shadow-2xl rounded-full' />
                    </a>
                </li>
                <li className='w-2/6 h-3/6'>
                    <a href="">
                        <img src={TobePrepared} alt="" className='w-full h-full object-cover shadow-2xl rounded-full'/>
                    </a>
                </li>
            </ul>
        </div>
    </>
    )
}

export default Gallery