import React from 'react'

const FooterPartAtoms = ({ props1, props2, props3, props4 }) => {
    return (
        <div className='flex-col'>
            <div className='text-white hover:text-[#6C9BFF] cursor-pointer pb-[16px]'>{props1}</div>
            <div className='text-white hover:text-[#6C9BFF] cursor-pointer pb-[16px] '>{props2}</div>
            <div className='text-white hover:text-[#6C9BFF] cursor-pointer pb-[16px]'>{props3}</div>
            <div className='text-white hover:text-[#6C9BFF] cursor-pointer pb-[16px]'>{props4}</div>
        </div>
    )
}

export default FooterPartAtoms