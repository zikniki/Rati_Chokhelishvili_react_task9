import React from 'react';
import Logo from '../../../icons/headerIcon.svg';
import { useNavigate } from 'react-router-dom';

const HeaderPart = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-between px-[80px] pt-[40px] pb-[80px]'>
      <img src={Logo} alt="Logo" />
      <div className='flex gap-x-14 text-[#07043B]'>
        <div className='flex space-x-6'>
          <button onClick={() => navigate('/features')} className='cursor-pointer'>Features</button>
          <button onClick={() => navigate('/team')} className='cursor-pointer'>Team</button>
          <button onClick={() => navigate('/signin')} className='cursor-pointer'>Sign In</button>
          <button onClick={() => navigate('/')} className='cursor-pointer'>Home</button>

        </div>
      </div>
    </div>
  );
}

export default HeaderPart;