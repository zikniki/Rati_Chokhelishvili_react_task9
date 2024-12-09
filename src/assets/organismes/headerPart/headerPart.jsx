import React from 'react'
import Logo from '../../../icons/headerIcon.svg'

const HeaderPart = () => {
  return (
    <div className='flex justify-between  px-[80px] pt-[40px] pb-[80px]'>
      <img src={Logo} alt="" />
      <div className='flex gap-x-14 text-[#07043B]'>
        <div className='cursor-pointer	'>Features</div>
        <div className='cursor-pointer	'>Team</div>
        <div className='cursor-pointer	'>Sign In</div>
      </div>
    </div>
  )
}

export default HeaderPart