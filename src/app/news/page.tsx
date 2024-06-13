

'use client'

import Container from '@/commons/Container'
import Screen from '@/commons/Screen'
import BannerSingle from '@/components/home/BannerSingle'
import HeaderComponent from '@/components/home/HeaderComponent'
import Image from 'next/image'
import React from 'react'
import sloganIcon from '@assets/images/iconSlogon2.png'
import styles from "@assets/scss/home.module.scss";
import FooterComponent from '@/components/home/FooterComponent'


import sp1 from '@assets/images/st1.png';
import sp2 from '@assets/images/st1.2.png';
import sp3 from '@assets/images/st1.3.png';
import sp4 from '@assets/images/st1.4.png';
import sp5 from '@assets/images/st2.png';
import sp6 from '@assets/images/st2.2.png';
import sp7 from '@assets/images/st2.3.png';
import sp8 from '@assets/images/st2.4.png';

import sp9 from '@assets/images/nc1.png';
import sp10 from '@assets/images/nc1.2.png';
import sp11 from '@assets/images/nc1.3.png';
import sp12 from '@assets/images/nc1.4.png';
import sp13 from '@assets/images/nc2.png';
import sp14 from '@assets/images/nc2.2.png';
import sp15 from '@assets/images/nc2.3.png';
import sp16 from '@assets/images/nc2.4.png';
import FooterComponentV2 from '@/components/home/FooterComponentV2'


const News = () => {
    return (
        <Screen>
            <HeaderComponent />
            {/* BANNER */}
            <BannerSingle
                idScreen="so-tay"
                classImage={"bg-banner-news"}
            />
            <div className="bg-orange overflow-hidden">
                <Container>
                    <div className="mt-12">
                        <div className="flex justify-center items-center gap-5 mb-8">
                            <p className="w-[27px] h-[27px] bg-[#2E3A40] rounded-full"></p>
                            <h3 className="text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem]">
                                TIN TỨC
                            </h3>
                        </div>
                    </div>
                    <div className='overflow-hidden relative mt-12'>
                        <div className=' grid grid-cols-4 gap-1 items-stretch'>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp1} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mt-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp2} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mt-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp3} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp4} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp5} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mb-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp6} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mb-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp7} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp8} />
                            </div>
                        </div>
                    </div>
                    <div className='relative mt-24 mb-20'>
                        <div className="flex justify-center items-center gap-5 mb-8">
                            <p className="w-[27px] h-[27px] bg-[#2E3A40] rounded-full"></p>
                            <h3 className="text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem]">
                                SỰ KIỆN
                            </h3>
                        </div>

                        <div className=' grid grid-cols-4 gap-1 items-stretch'>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp9} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mt-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp10} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mt-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp11} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp12} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp13} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mb-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp14} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mb-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp15} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp16} />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div
                className={`bg-banner-news h-[400px] md:h-[500px] flex items-end lg:h-lvh 3xl:max-h-[900px] rounded`}
            >
            </div>
            <FooterComponentV2 />

        </Screen>
    )
}

export default News


