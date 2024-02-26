import Image from 'next/image'
import React from 'react'
import slat from '@assets/images/slat1.svg'
import contact from '@assets/images/contact.png'
import styles from "@assets/scss/home.module.scss"


const ContactComponent = () => {
    return (
        <div className={`w-full lg:mt-20 xl:w-5/6 max-w-screen-xl me-auto justify-center xl:px-0 mb-20`}>
            <div className='grid grid-cols-3 items-center'>
                <div className='hidden lg:block md:col-span-2'>
                    <div className='flex h-[150px] lg:h-[200px]  ps-5'>
                        <Image alt='' className='h-full' src={slat} />

                        <div className={`slat-image`}>
                            <Image alt='' className='h-full' src={contact} />
                        </div>
                    </div>
                </div>
                <div className='col-span-3 lg:col-span-1 md:px-3  sm:pt-5 sm:mx-auto'>
                    <form>
                        <div className='bg-orange form px-8 py-5'>
                            <h2 className='font-avo_bold text-[24px] tracking-[0.12rem] text-center'>KẾT NỐI VỚI CHÚNG TÔI</h2>
                            <div className='mb-2'>
                                <div className='mb-1'><label>Tên của bạn (Bắt buộc)</label></div>
                                <input />
                            </div>
                            <div className='mb-2'>
                                <div className='mb-1'><label>Địa chỉ email (Bắt buộc)</label></div>
                                <input type='email' />
                            </div>
                            <div className='mb-2'>
                                <div className='mb-1'><label>Số điện thoại (Bắt buộc)</label></div>
                                <input type='number' />
                            </div>
                            <div className='mb-2'>
                                <div className='mb-1'><label>Lời nhắn</label></div>
                                <textarea rows={3} />
                            </div>
                        </div>
                        <div className='text-center mt-7'>
                            <button className='view-more' style={{padding: '5px 40px'}}>GỬI</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactComponent
