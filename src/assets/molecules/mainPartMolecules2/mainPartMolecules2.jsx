import React from 'react'
import Illustration2 from '../../../icons/illustration2.png'
import Arrow from '../../../icons/Group10.svg'
import Oval from '../../../icons/Oval.svg'
import Rectangle from '../../../icons/Rectangle.svg'

const MainPartMolecules2 = () => {
    return (
        <div className=' bg-rectangle mt-[180px] h-[890px]'>
            <div className='px-[80px] flex justify-between items-center pt-[170px]'>
                <div>
                    <div className='max-w-[627px] text-[#07043B] font-raleway text-[40px] font-bold leading-[60px]'>
                        Stay productive, wherever you are                </div>
                    <div className='max-w-[585px] text-[#07043B] text-[16px] leading-[24px] tracking-[0.531px] pt-4'>
                        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.                </div>
                    <div className='max-w-[585px] text-[#07043B] text-[16px] leading-[24px] tracking-[0.531px] pt-4'>
                        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!                </div>

                    <div className='flex gap-2 border-b-2 border-[#3DA08F] w-[175px] text-[#3DA08F] hover:text-[#71DFCC] cursor-pointer pt-4 mb-[45px]'>
                        See how Fylo works
                        <img src={Arrow} alt="" />
                    </div>
                    <div className='w-[356px] h-[215px] bg-white rounded-[5px] px-[33px] flex flex-col justify-between pb-5 '>
                        <div className='text-[#07043B] text-[45px] h-[30px] mb-3'>“</div>
                        <div className=' text-[#07043B] text-[13px] leading-[24px] tracking-[0.531px]'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</div>

                        <div className='flex gap-3'>
                            <img src={Oval} alt="" />
                            <div>
                                <div className=' text-[#07043B] text-[11px] font-bold tracking-[0.531px]'>Kyle Burton</div>
                                <div className=' text-[#07043B] text-[8px] tracking-[0.4px]'>Founder & CEO, Huddle</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Illustration2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainPartMolecules2