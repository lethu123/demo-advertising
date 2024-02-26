import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import "@assets/scss/home.scss";
import logo1 from '@assets/images/logo1.svg';
import logo2 from '@assets/images/logo2.svg';
import logo3 from '@assets/images/logo3.svg';
import logo4 from '@assets/images/logo4.svg';
import Container from '@/commons/Container';

const CoperatorComponent = () => {
    return (
        <div>
            <Container>
                <div className='mb-1'>
                    <h1 className="font-icie_medium tracking-[5px] text-lg sm:text-2xl md:text-3xl lg:text-[29.28px] p-3 inline-block" style={{ background: '#A8AAAC' }}>CÁC QUÝ ĐỐI TÁC</h1>
                </div>
            </Container>
            <div className={`coperator mb-[3rem] md:mb-[6rem] flex flex-col px-3 py-[2rem] md:py-[5rem]   relative `} style={{ background: '#A8AAAC' }}  >

                <div className='w-full xl:w-4/5 max-w-screen-xl mx-auto'>
                    <div className="w-full flex gap-x-[2rem] gap-y-[1rem] items-end  flex-wrap justify-center">
                        <Image alt="" src={logo1} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                        <Image alt="" src={logo2} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                        <Image alt="" src={logo3} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                        <Image alt="" src={logo4} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                        <Image alt="" src={logo2} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                        <Image alt="" src={logo3} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                        <Image alt="" src={logo1} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                        <Image alt="" src={logo4} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CoperatorComponent
