'use client'
import Screen from "@commons/Screen";
import HeaderComponent from "@components/home/HeaderComponent";
import BannerComponent from "@srccomponents/home/BannerComponent";
import FooterComponent from "@srccomponents/home/FooterComponent";
import CoperatorComponent from "@srccomponents/home/CoperatorComponent";
import SloganComponent from "@/components/home/SloganComponent";
import AboutUsComponent from "@/components/home/AboutUsComponent";
import ProductComponent from "@/components/home/ProductComponent";
import EventComponent from "@/components/home/EventComponent";
import ContactComponent from "@/components/home/ContactComponent";
export default function Home() {
  return (
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
      {/* contact  */}
      <ContactComponent />
      {/* footer */}
      <FooterComponent />
    </Screen>

  );
}
