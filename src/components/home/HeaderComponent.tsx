import Image from 'next/image'
import React from 'react'
import icPhone from '@assets/images/phone.svg'
import location from '@assets/images/loaction.svg'
import Container from '@srccommons/Container'
import homecss from '@assets/scss/home.module.scss'
import Link from 'next/link'
import styles from '@assets/scss/home.module.scss'
import logo from '@assets/images/logo.svg'
import MenuMobile from '../../commons/MenuMobile'

const HeaderComponent = () => {
    return (

        <div className='bg-orange' >
            <Container >
                <div className='flex lg:justify-around justify-between items-center py-[9px] flex-wrap' >
                    <div className='items-center hidden lg:flex'>
                        <Image style={{ width: 20, height: 20 }} alt='' src={location} />
                        <span className="text-white ml-2 text-[16.5px]">60 Đào Duy Anh, P.9, Q. Phú Nhuận, TP. Hồ Chí Minh </span>
                    </div>
                    <div className='flex items-center'>
                        <Image style={{ width: 20, height: 20 }} alt='' src={icPhone} />
                        <span className="text-white ml-2 text-xs sm:text-sm text-[16.5px]"> (+84) 28 2240 6511</span>
                    </div>

                    <button className='bg-white px-5 rounded text-xs sm:text-sm'>SHOPPING NOW</button>

                </div>
            </Container>
        </div>

    )
}

export default HeaderComponent
