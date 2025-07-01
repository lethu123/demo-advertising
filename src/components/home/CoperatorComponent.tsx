import Image from "next/image";
import React from "react";
import "@assets/scss/home.scss";
import logo1 from "@assets/images/logo1.png";
import logo2 from "@assets/images/logo2.png";
import logo3 from "@assets/images/logo3.png";
import logo4 from "@assets/images/logo4.png";
import logo5 from "@assets/images/logo5.png";
import logo6 from "@assets/images/logo6.png";
import logo7 from "@assets/images/logo7.png";
import logo8 from "@assets/images/logo8.png";
import Container from "@/commons/Container";
import dynamic from "next/dynamic";

const Translations = dynamic(() => import("@/commons/Translations"), {
  ssr: false,
});

const CoperatorComponent = () => {
  return (
    <div>
      <Container>
        <div className="mb-1">
          <h1
            className="font-icie_medium uppercase tracking-[5px] text-lg sm:text-2xl md:text-3xl lg:text-[29.28px] p-3 inline-block"
            style={{ background: "#A8AAAC" }}
          >
            <Translations text="ourPartner" />
          </h1>
        </div>
      </Container>
      <div
        className={`coperator mb-[3rem] md:mb-[6rem] flex flex-col px-3 py-[2rem] md:py-[5rem]   relative `}
        style={{ background: "#A8AAAC" }}
      >
        <div className="w-full xl:w-4/5 max-w-screen-xl mx-auto">
          <div className="w-full flex gap-x-[2rem] gap-y-[1rem] items-end  flex-wrap justify-center">
            <div className="bg-white">
              <Image
                alt=""
                src={logo1}
                className="w-[3rem] md:w-[4rem] lg:w-[6rem]"
              />
            </div>
            <div className="bg-white flex items-center justify-center p-1">
              <Image
                alt=""
                src={logo2}
                className="w-[3rem] md:w-[4rem] lg:w-[6rem]"
              />
            </div>
            <div className="bg-white flex items-center justify-center p-1">
              <Image
                alt=""
                src={logo3}
                className="w-[3rem] md:w-[4rem] lg:w-[6rem]"
              />
            </div>

            <div className="bg-white flex items-center justify-center p-1">
              <Image
                alt=""
                src={logo4}
                className="w-[3rem] md:w-[4rem] lg:w-[6rem]"
              />
            </div>

            <div className="bg-white flex items-center justify-center p-1">
              <Image
                alt=""
                src={logo5}
                className="w-[3rem] md:w-[4rem] lg:w-[6rem]"
              />
            </div>

            <div className="bg-white flex items-center justify-center p-1">
              <Image
                alt=""
                src={logo6}
                className="w-[3rem] md:w-[4rem] lg:w-[6rem]"
              />
            </div>

            <div className="bg-white flex items-center justify-center p-1">
              <Image
                alt=""
                src={logo7}
                className="w-[3rem] md:w-[4rem] lg:w-[6rem]"
              />
            </div>

            <div className="bg-white flex items-center justify-center p-1">
              <Image
                alt=""
                src={logo8}
                className="w-[3rem] md:w-[4rem] lg:w-[6rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoperatorComponent;
