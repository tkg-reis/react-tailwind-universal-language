import React from 'react'
import { useContext } from 'react'
import { Languages } from '../App'

const Form = () => {
    const val = useContext(Languages);
    return (
        <>
            <form action="" className='flex flex-col justify-center items-center pb-8'>
                <label htmlFor="name">
                    {/* {`${val[0]}.contactname`} */}
                </label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">
                    hello
                </label>
                <input type="emil" name="email" id="email" />
                <label htmlFor="question">
                    hello
                </label>
                <textarea name="question" id="question" cols="30" rows="10"></textarea>
            </form>
        </>
    )
}

export default Form