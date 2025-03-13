import Container from "@/commons/Container";
import Screen from "@/commons/Screen";
import HeaderComponent from "@/components/home/HeaderComponent";
import Image from "next/image";
import React from "react";
import BannerSingle from "@/components/home/BannerSingle";

import styles from "@assets/scss/home.module.scss";

import threeSlash3 from "@assets/images/three-slash3.svg";

import sp9 from "@assets/images/sb1.png";
import sp10 from "@assets/images/sb1.2.png";
import sp11 from "@assets/images/sb1.3.png";
import sp12 from "@assets/images/sb1.4.png";
import sp13 from "@assets/images/sb2.png";
import sp14 from "@assets/images/sb2.2.png";
import sp15 from "@assets/images/sb2.3.png";
import sp16 from "@assets/images/sb2.4.png";
import FooterComponentV2 from "../home/FooterComponentV2";

const Standee = () => {
  return (
    <Screen>
      <HeaderComponent />
      {/* BANNER */}
      <BannerSingle
        // idScreen="bang-ten-chuc-danh"
        idScreen="standee-backrop-pp-hiflex"
        classImage={"bg-banner-product2"}
      />
      <div className="mt-12 ">
        <div className="flex justify-center items-center gap-5 mb-8">
          <h3 className="text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem]">
            STANDEE, BACKROP (PP, HIFLEX)
          </h3>
        </div>
      </div>
      <div className="overflow-hidden mb-[6.5rem]">
        <Container>
          <div className="relative mt-10">
            <div className=" grid grid-cols-4 gap-1 items-stretch">
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp9}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp10}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp11}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp12}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp13}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp14}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp15}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp16}
                />
              </div>
            </div>
            <div className="absolute -top-[37px] -right-[180px] -z-[1]">
              <Image alt="" src={threeSlash3} />
            </div>
          </div>
        </Container>
      </div>

      <FooterComponentV2 />
    </Screen>
  );
};

export default Standee;
