import React from 'react'
import Illustration1 from '../../../icons/illustration1.png'

const MainPartMolecules = () => {
    return (
        <div className='px-[80px] flex justify-between items-center'>
            <div>
                <div className='max-w-[627px] text-[#07043B] font-raleway text-[40px] font-bold leading-[60px]'>
                    All your files in one secure location, accessible anywhere.
                </div>
                <div className='max-w-[585px] text-[#07043B] text-[17px] leading-[24px] tracking-[0.531px] pt-4'>
                    Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.
                </div>
                <div className='flex gap-4 pt-6'>
                    <input
                        type="text"
                        placeholder="Enter your email…"
                        className='p-2 border-[1px] border-[#07043B] h-[45px] rounded-[3.1px] w-[320px] ' />
                    <button className='p-2 bg-[#2F65F8] text-white rounded-[3.1px] w-[200px] h-[45px] text-sm font-bold hover:bg-[#6C9BFF] font-raleway'>
                        Get Started
                    </button>
                </div>
            </div>
            <div>
                <img src={Illustration1} alt="" />
            </div>
        </div>
    )
}

export default MainPartMolecules