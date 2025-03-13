import Image from "next/image";
import React from "react";
import slat from "@assets/images/slat1.svg";
import banner from "@assets/images/banner.png";
import styles from "@assets/scss/home.module.scss";
import Container from "@/commons/Container";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const Translations = dynamic(() => import("@/commons/Translations"), {
  ssr: false,
});

const AboutUsComponent = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <div className="pb-[70px] pt-20 overflow-hidden">
      <div
        className={`w-full  xl:w-5/6 max-w-screen-xl ms-auto justify-center px-4 xl:px-0 3xl:mx-auto bg-white ${styles.about_us}`}
      >
        <div className="flex justify-around">
          <h2 className="hidden lg::block"></h2>
          <h2 className="font-icie_medium text-lg md:text-[35.05px] tracking-[0.5rem] md:tracking-[1rem] text-center lg:me-10">
            <Translations text="aboutUs" />
          </h2>
        </div>
        <div className="flex h-[200px] md:h-[300px] mt-2 lg:hidden">
          <Image alt="" className="h-full" src={banner} />
        </div>
        <div className="h-[260px] hidden lg:flex mt-2">
          <Image alt="" className="h-full" src={slat} />

          <div className={`${styles.about_us_image}`}>
            <Image alt="" className="h-full" src={banner} />
          </div>
        </div>
      </div>
      <Container>
        <div className="mt-5">
          <p className="text-[18px] mb-5">
            <b>
              <Translations text="companyName" />
            </b>{" "}
            {lang !== "en" && (
              <>(M.A.I Development And Advertising Company Limited)</>
            )}
            <Translations text="establishment" />
          </p>
          <p className="text-[18px]">
            {" "}
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
      </Container>
    </div>
  );
};

export default AboutUsComponent;
