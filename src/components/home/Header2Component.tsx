"use client";

import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import logo from "@assets/images/logo.svg";
import MenuMobile from "../../commons/MenuMobile";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const Translations = dynamic(() => import("@/commons/Translations"), {
  ssr: false,
});

const Header2Component = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const { t } = useTranslation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translatedTexts = useMemo(
    () => ({
      home: t("home"),
      product: t("product"),
      services: t("services"),
      aboutUs: t("aboutUs"),
      news: t("news"),
      contact: t("contact"),
    }),
    [t]
  );

  return (
    <div
      className={`top-0 z-40 w-full   ${
        !scrolled ? "absolute   unsticky-header" : "sticky-header shadow"
      }`}
    >
      <div className="w-full 3xl:w-3/5 xl:w-4/5 max-w-screen-xl relative justify-center mx-auto px-4 xl:px-0">
        <MenuMobile />
        <div className="hidden lg:block ">
          <ul className="flex items-stretch gap-12 justify-between">
            <div className="flex items-center">
              <li>
                <Link
                  href="/"
                  className="text-white text-[15px] 2xl:text-[17px] uppercase"
                  data-hover={t("home")}
                >
                  <Translations text="home" />
                </Link>
              </li>
            </div>
            <div className="menu flex items-center">
              <li className="flex items-center">
                <h3
                  className="text-white text-[15px] 2xl:text-[17px] mr-2 uppercase"
                  data-hover={t("product")}
                >
                  <Translations text="product" />
                </h3>
                <i
                  className="fa fa-angle-down"
                  style={{ color: "#f8dfa9" }}
                ></i>
              </li>
              <div className="menu_products overflow-hidden">
                <div className=" rounded grid grid-cols-7 bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="col-span-1"></div>
                  <div className="flex-auto col-span-6  text-sm leading-6  ">
                    <div className=" divide-x divide-gray-900/5   ">
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/products/so-tay"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          <Translations text="Handbook" />
                        </Link>
                      </div>
                      {/* <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/products/name-card"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Name card
                        </Link>
                      </div> */}
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/products/lich"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          <Translations text="calendar" />
                        </Link>
                      </div>
                      {/* <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/products/sticker"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Sticker
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/products/bang-ten-chuc-danh"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Bảng tên chức danh, menu (mica)
                        </Link>
                      </div> */}
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/products/standee-backrop-pp-hiflex"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Standee, backrop (PP, hiflex)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu flex items-center">
              <li className="flex items-center">
                <h3
                  className="text-white text-[15px] 2xl:text-[17px] mr-2 uppercase"
                  data-hover={t("services")}
                >
                  <Translations text="services" />
                </h3>
                <i
                  className="fa fa-angle-down"
                  style={{ color: "#f8dfa9" }}
                ></i>
              </li>

              <div className="menu_products overflow-hidden">
                <div className=" rounded grid grid-cols-7 bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="col-span-2"></div>
                  <div className="flex-auto col-span-5 ps-5  text-sm leading-6  ">
                    <div className=" divide-x divide-gray-900/5   ">
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/services/thiet-ke-san-xuat-bao-bi-giay"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          <Translations text="designAndProductionPagerPacking" />
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/services/thiet-ke-trung-bay-quang-cao"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          <Translations text="advertisingDisplayDesign" />
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/services/in-thuong-mai-xuat-ban-an-pham"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          <Translations text="commercialPrintingPublishingProducts" />
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/services/thiet-ke-thi-cong-pano-hop-den-quang-cao"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          <Translations text="designAndContributeTitle" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <li className="py-2">
              <Image className="h-[100px] w-[150px]" alt="" src={logo} />
            </li>
            <div className="flex items-center">
              <li className="flex items-center">
                <Link
                  href="/about-us"
                  className="text-white uppercase text-[15px] 2xl:text-[17px]"
                  data-hover={t("aboutUs")}
                >
                  <Translations text="aboutUs" />
                </Link>
              </li>
            </div>
            <div className="flex items-center">
              <li className="flex items-center">
                <Link
                  href="/news"
                  className="text-white uppercase text-[15px] 2xl:text-[17px]"
                  data-hover={translatedTexts.news}
                >
                  <Translations text="news" />
                </Link>
              </li>
            </div>
            <div className="flex items-center">
              <li className="flex items-center">
                <Link
                  href="/contact"
                  className="text-white uppercase text-[15px] 2xl:text-[17px]"
                  data-hover={t("contact")}
                >
                  <Translations text="contact" />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header2Component;
