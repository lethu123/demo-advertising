import Container from "@/commons/Container";
import Screen from "@/commons/Screen";
import HeaderComponent from "@/components/home/HeaderComponent";
import Image from "next/image";
import React from "react";

import styles from "@assets/scss/home.module.scss";
import design7 from "@assets/images/design7@2x.png";
import threeSlash3 from "@assets/images/three-slash3.svg";
import threeSlash4 from "@assets/images/slash4.svg";

import FooterComponent from "@/components/home/FooterComponent";
import sloganIcon from "@assets/images/icon1.svg";
import BannerSingle from "@/components/home/BannerSingle";

import sp1 from "@assets/images/sp3.png";
import sp2 from "@assets/images/sp3.2.png";
import sp3 from "@assets/images/sp3.3.png";
import sp4 from "@assets/images/qc1.png";
import sp5 from "@assets/images/sp3.5.png";

import sp6 from "@assets/images/i2.png";
import sp7 from "@assets/images/i2.2.png";
import sp8 from "@assets/images/i2.3.png";
import sp9 from "@assets/images/i2.4.png";
import sp10 from "@assets/images/i2.5.png";
import sp11 from "@assets/images/design6@2x.png";

import sp12 from "@assets/images/i3.png";
import sp13 from "@assets/images/i3.2.png";
import sp14 from "@assets/images/i3.3.png";
import sp15 from "@assets/images/design5@2x.png";
import sp16 from "@assets/images/i3.5.png";
import sp17 from "@assets/images/i3.6.png";
import sp18 from "@assets/images/i3.7.png";
import sp19 from "@assets/images/i3.8.png";

import sp20 from "@assets/images/sp4.png";
import sp21 from "@assets/images/i4.png";
import sp22 from "@assets/images/i4.2.png";
import sp23 from "@assets/images/sp4.3.png";
import FooterComponentV2 from "../home/FooterComponentV2";
import dynamic from "next/dynamic";

const Translations = dynamic(() => import("@/commons/Translations"), {
  ssr: false,
});
const CommercialPrintPublishing = () => {
  return (
    <Screen>
      <HeaderComponent />
      {/* BANNER */}
      <BannerSingle
        idScreen="in-thuong-mai-xuat-ban-an-pham"
        classImage={"bg-banner-product2"}
      />
      {/* <div className="pt-36" id="in-thuong-mai-xuat-ban-an-pham"></div> */}
      <div className="mt-auto py-4" style={{ background: "#FFCD00" }}>
        <Image
          className="mx-auto"
          width={88}
          height={53}
          alt=""
          src={sloganIcon}
        />
        <h3 className="text-white text-center uppercase mt-5 text-2xl lg:text-[37.12px] font-avo_bold">
          <Translations text="commercialPrintingPublishingProducts" />
        </h3>
      </div>

      <div className="overflow-hidden">
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
                    <Translations text="printingBook" />
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
                  src={design7}
                />
              </div>
            </div>
          </div>
          <div className="relative mt-8">
            <div className=" grid grid-cols-4 gap-1 items-stretch">
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp6}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp7}
                />
              </div>

              <div className="col-span-2 flex ms-10 items-center">
                <div className="flex items-center gap-5">
                  <p className="w-[27px] h-[27px] bg-[#2E3A40] rounded-full"></p>
                  <p className="text-orange font-avo_bold text-xl  lg:text-[23px] tracking-widest">
                    <Translations text="Calendar production" />
                  </p>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp11}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp8}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp9}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp10}
                />
              </div>
            </div>
            <div className="absolute -top-[37px] -right-[180px] -z-[1]">
              <Image alt="" src={threeSlash3} />
            </div>
          </div>
          <div className="relative mt-28">
            <p className="text-orange mb-2 text-center font-avo_bold text-xl  lg:text-[23px] tracking-widest">
              <Translations text="Publishing Products" />
            </p>
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
              <div className="col-span-2 sm:col-span-2 md:col-span-1 ">
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
          </div>
        </Container>
      </div>
      <div id="thiet-ke-thi-cong-pano-hop-den-quang-cao"></div>
      <div
        className="mt-24 pt-8 pb-14 relative overflow-hidden"
        style={{ background: "#FFCD00", zIndex: -1 }}
      >
        <Container>
          <div className="mb-5  py-4" style={{ background: "#FFCD00" }}>
            <Image
              className="mx-auto"
              width={88}
              height={53}
              alt=""
              src={sloganIcon}
            />
            <h3 className="text-white text-center uppercase mt-5 text-2xl lg:text-[37.12px] font-avo_bold leading-snug">
              <Translations text="designAndContributeContent1" /> <br />
              <Translations text="designAndContributeContent2" />
            </h3>
          </div>
          <div className="col-span-2 md:col-span-1  grid grid-cols-2 gap-1">
            <div className="col-span-1">
              <Image
                alt=""
                className={`h-full w-full ${styles.image_hover} `}
                src={sp20}
              />
            </div>
            <div className="col-span-1">
              <Image
                alt=""
                className={`h-full w-full ${styles.image_hover} `}
                src={sp21}
              />
            </div>
            <div className="col-span-1">
              <Image
                alt=""
                className={`h-full w-full ${styles.image_hover} `}
                src={sp22}
              />
            </div>
            <div className="col-span-1">
              <Image
                alt=""
                className={`h-full w-full ${styles.image_hover} `}
                src={sp23}
              />
            </div>
          </div>
          <div className="text-[#2E3A40] py-8">
            <p className="mb-2 ">
              - <Translations text="boxContent1" />
            </p>
            <p className="mb-2">
              - <Translations text="boxContent2" />
            </p>
            <p>
              <Translations text="boxContent3" />
            </p>
          </div>
        </Container>
        <div className="absolute -top-[40px] -left-[200px] -z-[1]">
          <Image alt="" src={threeSlash4} />
        </div>
        <div className="absolute top-[50%] -translate-y-1/2 -right-[100px] -z-[1]">
          <Image alt="" src={threeSlash4} />
        </div>
      </div>
      <FooterComponentV2 />
    </Screen>
  );
};

export default CommercialPrintPublishing;
