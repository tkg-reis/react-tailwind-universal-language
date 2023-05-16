import React from 'react'

const Flex = ({ children }) => {
    return (
    <div className='flex justify-around items-center'>
        { children }
    </div>
    )
}

export default Flex