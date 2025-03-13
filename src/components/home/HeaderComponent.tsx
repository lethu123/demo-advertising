"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import icPhone from "@assets/images/phone.svg";
import location from "@assets/images/loaction.svg";
import flagVN from "@assets/images/vietnam.png";
import flagUK from "@assets/images/UK.png";
import Container from "@srccommons/Container";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
// import Translations from "@/commons/Translations";

const Translations = dynamic(() => import("@/commons/Translations"), {
  ssr: false,
});

const HeaderComponent = () => {
  const { i18n } = useTranslation();

  const handleLangItemClick = (lang: "en" | "vi") => {
    i18n.changeLanguage(lang);
  };

  // ** Change html `lang` attribute when changing locale
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n?.language);
  }, [i18n?.language]);

  return (
    <div className="bg-orange">
      <Container>
        <div className="flex lg:justify-around justify-between items-center py-[9px] flex-wrap">
          <div className="items-center hidden lg:flex">
            <Image style={{ width: 20, height: 20 }} alt="" src={location} />
            <span className="text-[#2E3A40] ml-2 text-[14px]">
              <Translations text="address" />
            </span>
          </div>
          <div className="flex items-center">
            <Image style={{ width: 20, height: 20 }} alt="" src={icPhone} />
            <span className="text-[#2E3A40] ml-2  sm:text-sm text-[13px]">
              {" "}
              (+84) 28 2240 6511
            </span>
          </div>

          <div className="flex items-center flex-wrap">
            <div
              onClick={() => handleLangItemClick("vi")}
              className="cursor-pointer  flex items-center mr-3"
            >
              {" "}
              <Image
                style={{ width: 20, height: 20 }}
                alt=""
                src={flagVN}
              />{" "}
              <span className="text-[#2E3A40] ml-2  text-[14px]">
                <Translations text="vietnamese" />
              </span>{" "}
            </div>
            <div
              onClick={() => handleLangItemClick("en")}
              className="cursor-pointer   flex items-center"
            >
              {" "}
              <Image
                style={{ width: 20, height: 20 }}
                alt=""
                src={flagUK}
              />{" "}
              <span className="text-[#2E3A40] ml-2  text-[14px]">
                <Translations text="english" />
              </span>{" "}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderComponent;
