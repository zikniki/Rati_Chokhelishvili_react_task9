import React from 'react'
import Footericon from '../../../icons/footerIcon.svg'
import FooterPartMolecules from '../../molecules/footerPartMolecules/footerPartMolecules'

const FooterPart = () => {
    return (
        <div className='h-[391px] w-full bg-[#07043B] flex-col px-[80px] pt-[90px] font-sans '>
            <div>
                <img src={Footericon} alt="" />
            </div>
            <FooterPartMolecules />
        </div>
    )
}

export default FooterPart