'use client'
import Screen from "@commons/Screen";
import HeaderComponent from "@components/home/HeaderComponent";
import BannerComponent from "@srccomponents/home/BannerComponent";
import styles from '@assets/scss/home.module.scss'
import Image from "next/image";
import bannerIntro from '@assets/images/banner.png'
import icon30 from '@assets/images/30.png'

import FooterComponent from "@srccomponents/home/FooterComponent";
import CoperatorComponent from "@srccomponents/home/CoperatorComponent";
import SloganComponent from "@/components/home/SloganComponent";
import AboutUsComponent from "@/components/home/AboutUsComponent";
import ProductComponent from "@/components/home/ProductComponent";
import EventComponent from "@/components/home/EventComponent";
export default function Home() {
  return (
    <div>

      <Screen> 

        <HeaderComponent />
        {/* BANNER */}
        <BannerComponent />
        <SloganComponent />
        {/* about us */}
        <AboutUsComponent />
        {/* coperator */}
        <CoperatorComponent />
        {/* product */}
        <ProductComponent />
        {/* event */}
        <EventComponent />
        {/* footer */}
        {/* <FooterComponent /> */}
      </Screen>
    </div>
  );
}
