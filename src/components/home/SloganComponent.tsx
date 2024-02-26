import React from 'react'
import sloganIcon from '@assets/images/icon1.svg'
import Image from 'next/image'

const SloganComponent = () => {
  return (
    <div className='bg-white text-center py-10 px-3'>
        <Image className='mx-auto' width={88} height={53} alt='' src={sloganIcon} />
        <h5 className='font-icie_medium text-lg sm:text-xl md:text-[27.88px] tracking-[0.15em] pt-7'>“HIỆU QUẢ - TIẾT KIỆM – SÁNG TẠO” </h5>
        <h2  className='font-icie_medium text-xl sm:text-2xl md:text-[35px] tracking-[0.15em] text-orange'>M.A.I ADVERTISING AND DEVELOPMENT CO.,LTD</h2>
    </div>
  )
}

export default SloganComponent
