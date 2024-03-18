import React, { useEffect } from 'react'
import homecss from '@assets/scss/home.module.scss'
import Link from 'next/link'
import logo from '@assets/images/logo.svg'
import MenuMobile from './MenuMobile'
import Image from 'next/image'
import Container from '@/commons/Container'


const BannerComponent = () => {
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 70) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll)
        }
        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <div className='relative'>

            <div className={`top-0 z-40 w-full   ${!scrolled ? 'absolute   unsticky-header' : 'sticky-header shadow'}`}>
                <div className='w-full xl:w-3/4 max-w-screen-xl relative justify-center mx-auto px-4 xl:px-0'>
                    <MenuMobile />
                    <div className="hidden lg:block ">
                        <ul className='flex items-stretch gap-12 justify-between'>
                            <div className='flex items-center'>
                                <li >
                                    <Link href="" className='text-white text-[18px]' data-hover="TRANG CHỦ">TRANG CHỦ</Link>
                                </li>
                            </div>
                            <div className='menu flex items-center'>
                                <li className='flex items-center' >
                                    <h3 className='text-white text-[18px] mr-2' data-hover='SẢN PHẨM'>SẢN PHẨM </h3>
                                    <i className="fa fa-angle-down" style={{ color: '#f8dfa9' }}></i>
                                </li>
                                <div className='menu_products overflow-hidden'>
                                    <div className='flex rounded grid grid-cols-7 bg-white shadow-lg ring-1 ring-gray-900/5'>
                                        <div className='col-span-1'></div>
                                        <div className="flex-auto col-span-6  text-sm leading-6  ">
                                            <div className=" divide-x divide-gray-900/5   ">
                                                <div className="hover:bg-gray-100 px-3">
                                                    <Link href="#" className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 ">
                                                        Sản phẩm 1
                                                    </Link>
                                                </div>
                                                <div className="hover:bg-gray-100 px-3">
                                                    <Link href="#" className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 ">
                                                        Sản phẩm 2
                                                    </Link>
                                                </div>
                                                <div className="hover:bg-gray-100 px-3">
                                                    <Link href="#" className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 ">
                                                        Sản phẩm 3
                                                    </Link>
                                                </div>
                                                <div className="hover:bg-gray-100 px-3">
                                                    <Link href="#" className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 ">
                                                        Sản phẩm 4
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='menu flex items-center'>
                                <li className='flex items-center' >
                                    <h3 className='text-white text-[18px] mr-2' data-hover='DỊCH VỤ'>DỊCH VỤ </h3>
                                    <i className="fa fa-angle-down" style={{ color: '#f8dfa9' }}></i>
                                </li>

                                <div className='menu_products overflow-hidden'>
                                    <div className='flex rounded grid grid-cols-7 bg-white shadow-lg ring-1 ring-gray-900/5'>
                                        <div className='col-span-2'></div>
                                        <div className="flex-auto col-span-5 ps-5  text-sm leading-6  ">
                                            <div className=" divide-x divide-gray-900/5   ">
                                                <div className="hover:bg-gray-100 px-3">
                                                    <Link href="#" className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 ">
                                                        Dịch vụ 1
                                                    </Link>
                                                </div>
                                                <div className="hover:bg-gray-100 px-3">
                                                    <Link href="#" className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 ">
                                                        Dịch vụ 2
                                                    </Link>
                                                </div>
                                                <div className="hover:bg-gray-100 px-3">
                                                    <Link href="#" className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 ">
                                                        Dịch vụ 3
                                                    </Link>
                                                </div>
                                                <div className="hover:bg-gray-100 px-3">
                                                    <Link href="#" className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 ">
                                                        Dịch vụ 4
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <li className='py-2'>
                                <Image className='h-[100px] w-[150px]' alt='' src={logo} />
                            </li >
                            <div className='flex items-center'>
                                <li className='flex items-center'><Link href="" className='text-white text-[18px]' data-hover="VỀ CHÚNG TÔI">VỀ CHÚNG TÔI</Link></li>
                            </div>
                            <div className='flex items-center'>
                                <li className='flex items-center'><Link href="" className='text-white text-[18px]' data-hover="TIN TỨC">TIN TỨC</Link></li>
                            </div>
                            <div className='flex items-center'>
                                <li className='flex items-center'><Link href="" className='text-white text-[18px]' data-hover="LIÊN HỆ">LIÊN HỆ</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${homecss.banner} h-[400px] lg:h-svh flex flex-col justify-between relative`}>
                <div className='animated animatedFadeInUp fadeInUp text-center text-white w-full absolute top-[40%] translate-x-2/4  text-xl lg:text-[27.88px] tracking-[.15em] font-icie_medium px-3'>“NIỀM TIN CỦA BẠN LÀ ĐỘNG LỰC PHÁT TRIỂN CỦA CHÚNG TÔI”</div>
            </div>

        </div>
    )
}

export default BannerComponent
