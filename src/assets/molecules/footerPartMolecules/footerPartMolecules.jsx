import React from 'react';
import CallIcon from '../../../icons/callIcon.svg';
import EmailIcon from '../../../icons/emailIcon.svg';
import FooterPartAtoms from '../../atoms/footerPartAtoms/footerPartAtoms';
import Icon1 from '../../../icons/Group15.svg'
import Icon2 from '../../../icons/Group16.svg'
import Icon3 from '../../../icons/Group17.svg'


const FooterPartMolecules = () => {
    return (
        <div className='flex justify-between pt-[37px]'>
            <div >
                <div className='flex gap-4'>
                    <img src={CallIcon} alt="" />
                    <div className='text-white leading-6 hover:text-[#6C9BFF] cursor-pointer'>
                        Phone: +1-543-123-4567
                    </div>
                </div>
                <div className='flex gap-4 py-4'>
                    <img src={EmailIcon} alt="" />
                    <div className='text-white leading-6 hover:text-[#6C9BFF] cursor-pointer'>
                        example@fylo.com
                    </div>
                </div>
            </div>
            <FooterPartAtoms
                props1="About Us"
                props2="Jobs"
                props3="Press"
                props4="Blog"
            />

            <FooterPartAtoms
                props1="Contact Us"
                props2="Terms"
                props3="Privacy"
            />
            <div className='flex gap-3'>
                <img src={Icon1} alt="" className='w-[31px] h-[31px] cursor-pointer' />
                <img src={Icon2} alt="" className='w-[31px] h-[31px] cursor-pointer' />
                <img src={Icon3} alt="" className='w-[31px] h-[31px] cursor-pointer' />

            </div>
        </div>
    );
};

export default FooterPartMolecules;