"use client";
import Screen from "@/commons/Screen";
import BannerSingle from "@/components/home/BannerSingle";
import HeaderComponent from "@/components/home/HeaderComponent";
import Image from "next/image";
import React from "react";
import sloganIcon from "@assets/images/iconSlogon2.png";
import slash from "@assets/images/slash-dark.png";
import FooterComponentV2 from "@/components/home/FooterComponentV2";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import "../../../i18n";

const Translations = dynamic(() => import("@/commons/Translations"), {
  ssr: false,
});
const AboutUs = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <Screen>
      <HeaderComponent />
      {/* BANNER */}
      <BannerSingle idScreen="so-tay" classImage={"bg-banner-about"} />
      <div className="">
        <div className="overflow-hidden">
          <div className="w-full  3xl:w-3/4 xl:w-4/5  max-w-screen-xl justify-center mx-auto px-4 xl:px-0 relative">
            <div className={"text-center py-10 px-3 "}>
              <Image
                className="mx-auto"
                width={88}
                height={53}
                alt=""
                src={sloganIcon}
              />

              <h5 className="font-icie_medium text-[#534741] uppercase text-md sm:text-xl md:text-[27.88px] tracking-[0.15em] pt-7">
                “<Translations text="khauhieu" />”{" "}
              </h5>
              <h2 className="font-icie_medium text-[#534741]   text-xl sm:text-[1.5rem] md:text-[35px]  leading-10 tracking-[0.15em]">
                M.A.I ADVERTISING AND DEVELOPMENT CO.,LT
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/6 max-w-screen-lg justify-center mx-auto px-4 xl:px-0">
          <div className="xl:pt-16 pb-16">
            <div className="flex gap-8 mb-8 xl:mb-14 justify-center lg:justify-start">
              <Image
                className="hidden lg:block"
                alt=""
                width={200}
                src={slash}
              />
              <h1 className="font-icie_medium uppercase text-xl md:text-[40px] lg:text-[50px] mt-8 text-[#534741] tracking-[0.5rem]">
                <Translations text="aboutUs" />
              </h1>
            </div>
            <div>
              <p className="mb-2 text-xl leading-[2.75rem] md:text-[36px] text-[#534741]">
                <b>
                  <Translations text="companyName" />
                </b>{" "}
                {lang !== "en" && (
                  <>(M.A.I Development And Advertising Company Limited)</>
                )}
                <Translations text="establishment" />
              </p>
              <p className="text-xl mt-6 leading-[2.75rem] md:text-[36px] text-[#534741]">
                <Translations text="aboutUsContent1" />{" "}
                <b>
                  <Translations text="aboutUsContent2" />
                </b>{" "}
                <Translations text="aboutUsContent3" />{" "}
                <b>
                  ”<Translations text="khauhieu" />“
                </b>
                , <Translations text="aboutUsContent4" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-banner-about2 h-[400px] md:h-[500px] flex items-end lg:h-lvh 3xl:max-h-[900px] rounded`}
      ></div>
      <FooterComponentV2 />
    </Screen>
  );
};

export default AboutUs;
