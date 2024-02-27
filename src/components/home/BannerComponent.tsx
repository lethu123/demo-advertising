import React from 'react'
import homecss from '@assets/scss/home.module.scss' 


const BannerComponent = () => {

    return (
        <div className={`${homecss.banner} h-[400px] lg:h-svh flex flex-col justify-between`}>
            <div className='animated animatedFadeInUp fadeInUp text-center text-white pt-[4rem] text-xl lg:text-[27.88px] tracking-[.15em] font-icie_medium px-3'>“NIỀM TIN CỦA BẠN LÀ ĐỘNG LỰC PHÁT TRIỂN CỦA CHÚNG TÔI”</div>
        </div>
    )
}

export default BannerComponent
