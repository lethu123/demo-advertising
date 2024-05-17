

import Container from "@/commons/Container";
import Screen from "@/commons/Screen";
import HeaderComponent from "@/components/home/HeaderComponent";
import Image from "next/image";
import React from "react";

import styles from "@assets/scss/home.module.scss";
import threeSlash3 from "@assets/images/three-slash3.svg";

import FooterComponent from "@/components/home/FooterComponent";
import BannerSingle from "@/components/home/BannerSingle";
import threeSlash from '@assets/images/three-slash.svg'


import sp1 from '@assets/images/l1.png';
import sp2 from '@assets/images/l1.2.png';
import sp3 from '@assets/images/l1.3.png';
import sp4 from '@assets/images/l1.4.png';
import sp5 from '@assets/images/l2.png';
import sp6 from '@assets/images/l2.2.png';
import sp7 from '@assets/images/l2.3.png';
import sp8 from '@assets/images/l2.4.png';

import sp9 from '@assets/images/stic1.png';
import sp10 from '@assets/images/stic1.2.png';
import sp11 from '@assets/images/stic1.3.png';
import sp12 from '@assets/images/stic1.4.png';
import sp13 from '@assets/images/stic2.png';
import sp14 from '@assets/images/stic2.2.png';
import sp15 from '@assets/images/stic2.3.png';
import sp16 from '@assets/images/stic2.4.png';
import FooterComponentV2 from "../home/FooterComponentV2";


const Calandar = () => {
    return (
        <Screen>
            <HeaderComponent />
            {/* BANNER */}
            <BannerSingle
                idScreen="lich"
                classImage={"bg-banner-product2"}
            />
            <div className="mt-12">
                <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem]'>LỊCH</h3>
            </div>

            <div className="overflow-hidden">
                <Container>
                    <div className='relative mt-12'>

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
                        <div className='absolute -top-[37px] -left-[97px]  -z-[1]'>
                            <Image alt='' src={threeSlash} />
                        </div>
                    </div>
                </Container>
            </div>
            <div id="sticker"></div>
            <div className='my-[6.5rem]'>

                <div className="overflow-hidden">
                    <Container>
                        <div className='relative mt-10'>
                            <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem] my-8'>STICKER</h3>

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
                            <div className='absolute -top-[37px] -right-[180px] -z-[1]'>
                                <Image alt='' src={threeSlash3} />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <FooterComponentV2 />
        </Screen>
    );
};

export default Calandar;
