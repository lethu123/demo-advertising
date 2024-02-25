import React from 'react'
import styles from '@assets/scss/home.module.scss'
import bgTitle from '@assets/images/event2.svg'
import Image from 'next/image'

const EventComponent = () => {
    return (
        <div className={`${styles.event} h-[400px] lg:h-svh my-20 text-center`}>
            <div className={`${styles.title}  relative z-0`}>
                <h3 className='inline-block font-icie_medium text-orange text-[27.88px] tracking-[0.15rem] py-6'>TỔ CHỨC CÁC HỘI THẢO, SỰ KIỆN</h3>
                <Image className='w-full h-full absolute -top-[5px] right-0 -z-[1]' alt='' src={bgTitle} />
            </div>
        </div>
    )
}

export default EventComponent
