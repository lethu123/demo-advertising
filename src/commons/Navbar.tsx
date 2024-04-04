"use client";

import React, { useEffect } from "react";
import Container from "@srccommons/Container";
import Image from "next/image";
import Link from "next/link";
import styles from "@assets/scss/home.module.scss";
import logo from "@assets/images/logo.svg";
import "@assets/scss/home.scss";
import { usePathname } from "next/navigation";
import MenuMobile from "@/commons/MenuMobile";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="sticky top-0 bg-white z-30 shadow">
      <div className="w-full xl:w-3/4 max-w-screen-xl relative justify-center mx-auto px-4 xl:px-0 banner-single">
        <MenuMobile />
        <div className="hidden lg:block ">
          <ul className="flex items-stretch gap-12 justify-between">
            <div className="flex items-center">
              <li>
                <Link href="/" className="  text-[18px]" data-hover="TRANG CHỦ">
                  TRANG CHỦ
                </Link>
              </li>
            </div>
            <div className="menu flex items-center">
              <li className="flex items-center">
                <h3 className="  text-[18px] mr-2" data-hover="SẢN PHẨM">
                  SẢN PHẨM{" "}
                </h3>
                <i
                  className="fa fa-angle-down"
                  style={{ color: "#f8dfa9" }}
                ></i>
              </li>
              <div className="menu_products overflow-hidden">
                <div className="flex rounded grid grid-cols-7 bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="col-span-1"></div>
                  <div className="flex-auto col-span-6  text-sm leading-6  ">
                    <div className=" divide-x divide-gray-900/5   ">
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="#"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Name card
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="#"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Lịch
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="#"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Sticker
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="#"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Bảng tên chức danh, menu (mica)
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="#"
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
                <h3 className=" text-[18px] mr-2" data-hover="DỊCH VỤ">
                  DỊCH VỤ{" "}
                </h3>
                <i
                  className="fa fa-angle-down"
                  style={{ color: "#f8dfa9" }}
                ></i>
              </li>

              <div className="menu_products overflow-hidden">
                <div className="flex rounded grid grid-cols-7 bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="col-span-2"></div>
                  <div className="flex-auto col-span-5 ps-5  text-sm leading-6  ">
                    <div className=" divide-x divide-gray-900/5   ">
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/services/thiet-ke-san-xuat-bao-bi-giay"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Thiết kế sản xuất bao bì giấy
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/services/thiet-ke-trung-bay-quang-cao"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Thiết kế trưng bày quảng cáo (POSM)
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/services/in-thuong-mai-xuat-ban-an-pham"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          In thương mại, xuất bản ấn phẩm
                        </Link>
                      </div>
                      <div className="hover:bg-gray-100 px-3">
                        <Link
                          href="/services/thiet-ke-thi-cong-pano-hop-den-quang-cao"
                          className="flex items-center  text-nowrap menu-footer  gap-x-2.5 py-3 font-semibold text-gray-900 "
                        >
                          Thiết kế thi công pano, hộp đèn quảng cáo
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
                  href=""
                  className=" text-[18px]"
                  data-hover="VỀ CHÚNG TÔI"
                >
                  VỀ CHÚNG TÔI
                </Link>
              </li>
            </div>
            <div className="flex items-center">
              <li className="flex items-center">
                <Link href="" className=" text-[18px]" data-hover="TIN TỨC">
                  TIN TỨC
                </Link>
              </li>
            </div>
            <div className="flex items-center">
              <li className="flex items-center">
                <Link href="" className=" text-[18px]" data-hover="LIÊN HỆ">
                  LIÊN HỆ
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
