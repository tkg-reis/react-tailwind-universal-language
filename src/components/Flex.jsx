import React from 'react'

const Flex = ({ children }) => {
    return (
    <div fl="true" className='flex gap-3 items-center justify-around flex-col-reverse lg:flex-row mt-6 max-w-5xl mx-auto'>
        { children }
    </div>
    )
}

export default Flex