import React from 'react'

const wrap = ({ children }) => {
    return (
    <div className='flex flex-wrap gap-6'>
        {children}
    </div>
    )
}

export default wrap