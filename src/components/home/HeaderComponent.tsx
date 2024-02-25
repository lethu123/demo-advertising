import Image from 'next/image'
import React from 'react'
import icPhone from '@assets/images/phone.svg'
import location from '@assets/images/loaction.svg'
import Container from '@srccommons/Container'
import homecss from '@assets/scss/home.module.scss'
import Link from 'next/link'
import styles from '@assets/scss/home.module.scss'
import logo from '@assets/images/logo.svg'
import MenuMobile from './MenuMobile'

const HeaderComponent = () => {
    return (
        <div>
            <div className='bg-orange' >
                <Container >
                    <div className='flex lg:justify-around justify-between items-center py-[9px] flex-wrap px-6' >
                        <div className='items-center hidden lg:flex'>
                            <Image style={{ width: 20, height: 20 }} alt='' src={location} />
                            <span className="text-white ml-2 text-[16.5px]">60 Đào Duy Anh, P.9, Q. Phú Nhuận, TP. Hồ Chí Minh </span>
                        </div>
                        <div className='flex items-center'>
                            <Image style={{ width: 20, height: 20 }} alt='' src={icPhone} />
                            <span className="text-white ml-2 text-[16.5px]"> (+84) 28 2240 6511</span>
                        </div>
                        <div className='flex items-center flex-wrap'>
                            <button className='bg-white px-5 rounded'>SHOPPING NOW</button>
                        </div>
                    </div>
                </Container>
            </div>

            <div className={`${homecss.header} flex flex-col justify-between`}>
                {/* me */}
                <Container>
                    <MenuMobile />
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-6 justify-center py-3">
                            <Link href={'/'} className={`${styles.menu_single}  uppercase font-normal text-[18px] py-3`}>Trang chủ</Link>
                            <div className={`${styles.submenu} relative`}>
                                <div className={`   text-[18px] cursor-pointer uppercase font-normal py-3`}>Sản phẩm <i className="fa fa-angle-down" ></i></div>
                                <div className={`${styles.submenu_show} absolute z-10 flex  max-w-max`}>
                                    <div className=" max-w-md flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                        <div className=" divide-x divide-gray-900/5 bg-gray-50 ">
                                            <Link href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                                Sản phẩm 1
                                            </Link>
                                            <Link href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                                Sản phẩm 2
                                            </Link>
                                            <Link href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                                Sản phẩm 3
                                            </Link>
                                            <Link href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                                Sản phẩm 4
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.submenu} relative`}>
                                <div className=" text-[18px] cursor-pointer uppercase py-3">Dịch vụ <i className="fa fa-angle-down" ></i></div>
                                <div className={`${styles.submenu_show} absolute z-10 flex  max-w-max`}>
                                    <div className=" max-w-md flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                        <div className=" divide-x divide-gray-900/5 bg-gray-50 ">
                                            <Link href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                                Dịch vụ 1
                                            </Link>
                                            <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                                Dịch vụ 2
                                            </a>
                                            <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                                Dịch vụ 3
                                            </a>
                                            <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                                Dịch vụ 4
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image className='h-[100px] w-[150px]' alt='' src={logo} />
                            </div>
                            <div>
                                <Link href={'/'} className={`${styles.menu_single}  uppercase text-[18px] py-3`}>Về chúng tôi</Link>
                            </div>
                            <div>
                                <Link href={'/'} className={`${styles.menu_single}  uppercase text-[18px] py-3`}>Tin tức</Link>
                            </div>
                            <div>
                                <Link href={'/'} className={`${styles.menu_single}  uppercase text-[18px] py-3`}>Liên hệ</Link>
                            </div>
                        </div>
                    </div>
                </Container>
                
            </div>
        </div>


    )
}

export default HeaderComponent
