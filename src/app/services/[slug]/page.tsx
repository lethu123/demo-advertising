import Screen from '@/commons/Screen'
import BannerComponent from '@/components/home/BannerComponent'
import HeaderComponent from '@/components/home/HeaderComponent'
import React from 'react'

const page = () => {
    return (
        <Screen>
            <HeaderComponent />
            {/* BANNER */}
            <BannerComponent />
        </Screen>
    )
}

export default page
