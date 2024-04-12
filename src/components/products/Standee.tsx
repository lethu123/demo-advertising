

import Container from "@/commons/Container";
import Screen from "@/commons/Screen";
import HeaderComponent from "@/components/home/HeaderComponent";
import Image from "next/image";
import React from "react";
import FooterComponent from "@/components/home/FooterComponent";
import sloganIcon from "@assets/images/icon1.svg";
import BannerSingle from "@/components/home/BannerSingle";

import styles from "@assets/scss/home.module.scss";

import design7 from "@assets/images/design7@2x.png";
import threeSlash3 from "@assets/images/three-slash3.svg";
import design5 from '@assets/images/design5@2x.png'
import design6 from '@assets/images/design6@2x.png'
import threeSlash from '@assets/images/three-slash.svg'
import sp7 from '@assets/images/sp3.png';
import sp8 from '@assets/images/sp3.2.png';
import sp9 from '@assets/images/sp3.3.png';
import sp10 from '@assets/images/sp3.4.png';
import sp11 from '@assets/images/sp3.5.png';


const Standee = () => {
    return (
        <Screen>
            <HeaderComponent />
            {/* BANNER */}
            <BannerSingle
                idScreen="bang-ten-chuc-danh"
                classImage={"bg-banner-product2"}
            />
            <div className="mt-auto py-4" style={{ background: "#FFCD00" }}>
                <Image
                    className="mx-auto"
                    width={88}
                    height={53}
                    alt=""
                    src={sloganIcon}
                />
                <h3 className="text-white uppercase text-center mt-5 text-2xl lg:text-[37.12px] font-avo_bold">
                    Bảng tên chức danh, menu (mica)
                </h3>
            </div>

            <div className="overflow-hidden">
                <Container>
                    <div className='relative mt-16'>
                        <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem] my-8'>BẢNG TÊN CHỨC DANH, MENU (MICA)</h3>

                        <div className=' grid grid-cols-4 gap-1 items-stretch'>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp7} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mt-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp8} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mt-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp9} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design5} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design6} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mb-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp10} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 mb-3'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp11} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design7} />
                            </div>
                        </div>
                        <div className='absolute -top-[37px] -left-[97px]  -z-[1]'>
                            <Image alt='' src={threeSlash} />
                        </div>
                    </div>
                </Container>
            </div>
            <div id="standee-backrop-pp-hiflex"></div>
            <div className='my-[6.5rem]'>
                <div className="mt-auto py-4" style={{ background: "#FFCD00" }}>
                    <Image
                        className="mx-auto"
                        width={88}
                        height={53}
                        alt=""
                        src={sloganIcon}
                    />
                    <h3 className="text-white uppercase text-center mt-5 text-2xl lg:text-[37.12px] font-avo_bold">
                        Standee, backrop (PP, hiflex)
                    </h3>
                </div>

                <div className="overflow-hidden">
                    <Container>
                        <div className='relative mt-16'>
                            <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem] my-8'>STANDEE, BACKROP (PP, HIFLEX)</h3>

                            <div className=' grid grid-cols-4 gap-1 items-stretch'>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp7} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1 mt-3'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp8} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1 mt-3'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp9} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design5} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design6} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1 mb-3'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp10} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1 mb-3'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp11} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design7} />
                                </div>
                            </div>
                            <div className='absolute -top-[37px] -right-[180px] -z-[1]'>
                                <Image alt='' src={threeSlash3} />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <FooterComponent />
        </Screen>
    );
};

export default Standee;
