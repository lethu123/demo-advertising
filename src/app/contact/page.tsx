
'use client'

import Container from '@/commons/Container'
import Screen from '@/commons/Screen'
import BannerSingle from '@/components/home/BannerSingle'
import HeaderComponent from '@/components/home/HeaderComponent'
import Image from 'next/image'
import React from 'react'
import sloganIcon from '@assets/images/iconSlogon2.png'
import slash from '@assets/images/slash-dark.png'
import FooterComponent from '@/components/home/FooterComponent'

const Contact = () => {
    return (
        <Screen>
            <HeaderComponent />
            {/* BANNER */}
            <BannerSingle
                idScreen="so-tay"
                classImage={"bg-banner-contact"}
            />
            <div className="bg-orange overflow-hidden">
                <div className=' '>
                    <div className="w-full  3xl:w-3/4 xl:w-4/5  max-w-screen-xl justify-center mx-auto px-4 xl:px-0 relative">
                        <div className={'text-center py-10 px-3 '}>
                            <Image className='mx-auto' width={88} height={53} alt='' src={sloganIcon} />

                            <h5 className='font-icie_medium text-[#534741] text-lg sm:text-xl md:text-[27.88px] tracking-[0.15em] pt-7'>“HIỆU QUẢ - TIẾT KIỆM – SÁNG TẠO” </h5>
                            <h2 className='font-icie_medium text-[#534741]   text-xl sm:text-[1.5rem] md:text-[35px]  leading-10 tracking-[0.15em]'>M.A.I ADVERTISING AND DEVELOPMENT CO.,LTD</h2>
                        </div>
                    </div >
                </div>

                <Container>
                    <div className='relative md:pt-8 pb-16'>
                        <Image className='absolute top-[110px] -left-[250px]' alt='' width={200} src={slash} />
                        <div className=''>
                            <h1 className='text-center lg:text-left font-icie_medium text-xl md:text-[40px] lg:text-[50px] mt-5 text-[#534741] tracking-[0.5rem]'>LIÊN HỆ VỚI CHÚNG TÔI</h1>
                            <div className='mt-8'>
                                <p className='mb-2 text-[#534741]'>Với NHIỆT HUYẾT và sứ SÁNG TẠO. Chúng tôi luôn luôn hoàn thiện những ý tưởng, dự án hoặc giải pháp cho hhách hàng của mình. </p>
                                <p className='mb-2 text-[#534741]'>
                                    Chúng tôi có trụ sở tại thành phố Hồ Chí Minh, nhưng luôn chăm sóc khách hàng chuyên nghiệp trên cả nước.
                                </p>
                                <p className='mb-2 text-[#534741]'>info@maipt.com</p>
                                <p className='mb-2 text-[#534741]'>(+84) 28 2240 651</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 xl:grid-cols-2 items-center mt-10'>

                            <div className='col-span-3 md:col-span-1 pb-5 text-center md:text-right md:pr-10'>
                                <h1 className='hidden sm:max-md:block font-icie_medium  text-lg text-[#534741] tracking-[0.25rem] text-center'>HIỆU QUẢ - TIẾT KIỆM - SÁNG TẠO</h1>

                                <div className='sm:hidden md:block'>
                                    <h1 className='font-icie_medium md:text-xl lg:leading-[3.5rem] lg:text-[37px] xl:text-[45px] text-lg mt-1 text-[#534741] tracking-[0.5rem]'>HIỆU QUẢ </h1>
                                    <h1 className='font-icie_medium md:text-xl lg:leading-[3.5rem] lg:text-[37px] xl:text-[45px] text-lg mt-1 text-[#534741] tracking-[0.5rem]'>TIẾT KIỆM  </h1>
                                    <h1 className='font-icie_medium md:text-xl lg:leading-[3.5rem] lg:text-[37px] xl:text-[45px] text-lg mt-1 text-[#534741] tracking-[0.5rem]'>SÁNG TẠO</h1>
                                </div>
                            </div>
                            <div className='col-span-3 md:col-span-2 xl:col-span-1'>
                                <form onSubmit={e => {
                                    e.preventDefault()
                                }} className='p-5 md:p-12 bg-white rounded-[30px] form-contact-us'>
                                    <div className='form-group mb-3'>
                                        <label>Tên của bạn (Bắt buộc)</label>
                                        <input required className='w-full rounded-[8px] py-1 mt-1' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Địa chỉ email (Bắt buộc)</label>
                                        <input required className='w-full rounded-[8px] py-1 mt-1' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Số điện thoại (Bắt buộc)</label>
                                        <input required className='w-full rounded-[8px] py-1 mt-1' />
                                    </div>
                                    <div className='form-group'>
                                        <label>Lời nhắn</label>
                                        <textarea required className='w-full rounded-[8px] py-1 mt-1' rows={3} />
                                    </div>
                                    <div className='flex justify-center mt-10'>
                                        <button style={{ color: 'white' }} className='view-more text-sm md:text-[23.47px] tracking-[0.25rem]'>GỬI</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <FooterComponent />

        </Screen>
    )
}

export default Contact

