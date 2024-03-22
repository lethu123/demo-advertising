import Container from '@/commons/Container'
import Screen from '@/commons/Screen'
import HeaderComponent from '@/components/home/HeaderComponent'
import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import design4 from '@assets/images/design4@2x.png'
import design5 from '@assets/images/design5@2x.png'
import design6 from '@assets/images/design6@2x.png'
import design7 from '@assets/images/design7@2x.png'
import threeSlash3 from '@assets/images/three-slash3.svg'
import FooterComponent from '@/components/home/FooterComponent'
import Header2Component from '@/components/home/Header2Component'
import homecss from '@assets/scss/home.module.scss'
import sloganIcon from '@assets/images/icon1.svg'

const page = () => {
    return (
        <Screen>
            <HeaderComponent />
            {/* BANNER */}
            <div className='relative banner'>
                <Header2Component />
                <div className={`${homecss.bannerV2} h-[400px] lg:h-svh flex flex-col justify-between relative`}>
                    <div className='mt-auto py-4' style={{ background: '#A8AAAC' }}>
                        <Image className='mx-auto' width={88} height={53} alt='' src={sloganIcon} />
                        <h3 className='text-center mt-5 text-2xl lg:text-[37.12px] font-avo_bold'>THIẾT KẾ SẢN XUẤT BAO BÌ GIẤY</h3>
                    </div>
                </div>
            </div>

            <div className='overflow-hidden pb-28'>
                <Container>
                    <div className='relative mt-28'>
                        <div className=' grid grid-cols-4 gap-1 items-stretch'>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design4} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 '></div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-cyan-900 rounded-xl mt-3'></div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design5} />
                            </div>
                            <div className='col-span-2 flex justify-center items-center'>
                                <div className='flex items-center gap-5'>
                                    <p className='w-[27px] h-[27px] bg-[#F2792C] rounded-full'></p>
                                    <p className='text-orange font-avo_bold text-xl  lg:text-[23px] tracking-widest'>
                                        Túi giấy Couche, <br />
                                        Túi giấy Briston, <br />
                                        Túi giấy Ford,
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-cyan-900 rounded-xl mb-3'></div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design7} />
                            </div>
                        </div>
                    </div>
                    <div className='relative mt-28'>
                        <div className=' grid grid-cols-4 gap-1 items-stretch'>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design4} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 '></div>

                            <div className='col-span-2 flex justify-center items-center'>
                                <div className='flex items-center gap-5'>
                                    <p className='w-[27px] h-[27px] bg-[#F2792C] rounded-full'></p>
                                    <p className='text-orange font-avo_bold text-xl lg:text-[23px] tracking-widest'>
                                        Túi giấy kraft, <br />
                                        Túi giấy Duplex, <br />
                                        Túi giấy Mỹ thuật
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design6} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-cyan-900 rounded-xl mb-3'></div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-cyan-900 rounded-xl mb-3'></div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design7} />
                            </div>
                        </div>
                        <div className='absolute -top-[37px] -right-[180px] -z-[1]'>
                            <Image alt='' src={threeSlash3} />
                        </div>
                    </div>
                    <div className='relative mt-28'>
                        <p className='text-orange text-center font-avo_bold text-xl lg:text-[23px] tracking-widest'>
                            Hộp giấy
                        </p>
                        <div className=' grid grid-cols-4 gap-1 items-stretch'>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design4} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 '></div>

                            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-cyan-900 rounded-xl mt-3'></div>

                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design5} />
                            </div>
                        </div>
                    </div>
                    <div className='relative mt-28'>
                        <p className='text-orange mb-4 text-center font-avo_bold text-xl lg:text-[23px] tracking-widest'>
                            Thùng giấy
                        </p>
                        <div className=' grid grid-cols-4 gap-1 items-stretch'>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design6} />
                            </div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-cyan-900 rounded-xl mb-3'></div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-cyan-900 rounded-xl mb-3'></div>
                            <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design7} />
                            </div>
                        </div>
                        <div className='absolute -top-[37px] -left-[180px] -z-[1]'>
                            <Image alt='' src={threeSlash3} />
                        </div>
                    </div>
                </Container>
            </div>
            <FooterComponent />
        </Screen>
    )
}

export default page
