import Container from "@/commons/Container";
import Screen from "@/commons/Screen";
import HeaderComponent from "@/components/home/HeaderComponent";
import Image from "next/image";
import React from "react";
import styles from "@assets/scss/home.module.scss";
import design6 from "@assets/images/design6@2x.png";
import threeSlash3 from "@assets/images/three-slash3.svg";
import sloganIcon from "@assets/images/icon1.svg";
import BannerSingle from "@/components/home/BannerSingle";
import sp1 from "@assets/images/bb1.png";
import sp2 from "@assets/images/bb1.2.png";
import sp3 from "@assets/images/bb1.3.png";
import sp4 from "@assets/images/bb1.4.png";
import sp5 from "@assets/images/bb1.5.png";
import sp6 from "@assets/images/bb1.6.png";

import sp7 from "@assets/images/bb2.png";
import sp8 from "@assets/images/bb2.2.png";
import sp9 from "@assets/images/bb2.3.png";
import sp10 from "@assets/images/bb2.4.png";
import sp11 from "@assets/images/bb2.5.png";

import sp12 from "@assets/images/bb3.png";
import sp13 from "@assets/images/bb3.2.png";
import sp14 from "@assets/images/bb3.3.png";
import sp15 from "@assets/images/bb3.4.png";

import sp16 from "@assets/images/bb4.png";
import sp17 from "@assets/images/bb4.2.png";
import sp18 from "@assets/images/bb4.3.png";
import sp19 from "@assets/images/bb4.4.png";
import FooterComponentV2 from "../home/FooterComponentV2";

const ProductionDesign = () => {
  return (
    <Screen>
      <HeaderComponent />
      {/* BANNER */}
      <BannerSingle
        idScreen="thiet-ke-san-xuat-bao-bi-giay"
        classImage={"bg-banner-product1"}
      />

      <div className="mt-auto py-4" style={{ background: "#FFCD00" }}>
        <Image
          className="mx-auto"
          width={88}
          height={53}
          alt=""
          src={sloganIcon}
        />
        <h3 className="text-white text-center mt-5 text-2xl lg:text-[37.12px] font-avo_bold">
          THIẾT KẾ & SẢN XUẤT <br className="md:hidden" /> BAO BÌ
        </h3>
      </div>

      <div className="overflow-hidden pb-28">
        <Container>
          <div className="relative mt-28">
            <div className=" grid grid-cols-4 gap-1 items-stretch">
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp1}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp2}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp3}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp4}
                />
              </div>
              <div className="col-span-2 flex justify-center items-center">
                <div className="flex items-center gap-5">
                  <p className="w-[27px] h-[27px] bg-[#2E3A40] rounded-full"></p>
                  <p className="text-orange font-avo_bold text-xl  lg:text-[23px] tracking-widest">
                    Túi giấy
                  </p>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp5}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp6}
                />
              </div>
            </div>
            <div className="absolute top-[15px] -left-[180px] -z-[1]">
              <Image alt="" src={threeSlash3} />
            </div>
          </div>
          <div className="relative mt-32">
            <div className=" grid grid-cols-4 gap-1 items-stretch">
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp7}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp8}
                />
              </div>

              <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp3}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp4}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={design6}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp9}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp10}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp11}
                />
              </div>
            </div>
            <div className="absolute -top-[37px] -right-[180px] -z-[1]">
              <Image alt="" src={threeSlash3} />
            </div>
          </div>
          <div className="relative mt-28">
            <div className="flex justify-center items-center gap-5 mb-8">
              <p className="w-[27px] h-[27px] bg-[#2E3A40] rounded-full"></p>
              <p className="text-orange font-avo_bold text-xl  lg:text-[23px] tracking-widest">
                Hộp cứng
              </p>
            </div>
            <div className=" grid grid-cols-4 gap-1 items-stretch">
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp12}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp13}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp14}
                />
              </div>

              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp15}
                />
              </div>
            </div>
          </div>
          <div className="relative mt-28">
            <div className="flex justify-center items-center gap-5 mb-8">
              <p className="w-[27px] h-[27px] bg-[#2E3A40] rounded-full"></p>
              <p className="text-orange font-avo_bold text-xl  lg:text-[23px] tracking-widest">
                Thùng carton
              </p>
            </div>
            <div className=" grid grid-cols-4 gap-1 items-stretch">
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp16}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp17}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp18}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp19}
                />
              </div>
            </div>
            <div className="absolute -top-[37px] -left-[180px] -z-[1]">
              <Image alt="" src={threeSlash3} />
            </div>
          </div>
        </Container>
      </div>
      <FooterComponentV2 />
    </Screen>
  );
};

export default ProductionDesign;
