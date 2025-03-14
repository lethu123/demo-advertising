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
import "../../../i18n";
const Translations = dynamic(() => import("@/commons/Translations"), {
  ssr: false,
});
const Contact = () => {
  return (
    <Screen>
      <HeaderComponent />
      {/* BANNER */}
      <BannerSingle idScreen="so-tay" classImage={"bg-banner-contact"} />
      <div className="bg-orange overflow-hidden">
        <div className=" ">
          <div className="w-full  3xl:w-3/4 xl:w-4/5  max-w-screen-xl justify-center mx-auto px-4 xl:px-0 relative">
            <div className={"text-center py-10 px-3 "}>
              <Image
                className="mx-auto"
                width={88}
                height={53}
                alt=""
                src={sloganIcon}
              />

              <h5 className="font-icie_medium text-[#534741] text-lg sm:text-xl md:text-[27.88px] tracking-[0.15em] pt-7">
                “<Translations text="khauhieu" />”{" "}
              </h5>
              <h2 className="font-icie_medium text-[#534741]   text-xl sm:text-[1.5rem] md:text-[35px]  leading-10 tracking-[0.15em]">
                M.A.I ADVERTISING AND DEVELOPMENT CO.,LT
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-2/4 max-w-screen-lg justify-center mx-auto px-4 xl:px-0">
          <div className="relative md:pt-8 pb-16">
            <Image
              className="absolute top-[110px] -left-[250px]"
              alt=""
              width={200}
              src={slash}
            />
            <div className="">
              <h1 className="text-center uppercase lg:text-left font-icie_medium text-xl md:text-[40px] lg:text-[45px] mt-5 text-[#534741] tracking-[0.5rem]">
                <Translations text="contactWithUs" />
              </h1>
              <div className="mt-10">
                <p className="mb-5 text-xl md:text-[36px] leading-9 text-[#534741]">
                  <Translations text="contactContent1" />{" "}
                </p>
                <p className="mb-5 text-xl md:text-[36px] leading-9 text-[#534741]">
                  <Translations text="contactContent2" />
                </p>
                <p className="mb-5 text-xl md:text-[36px] leading-9 text-[#534741]">
                  info@maipt.com
                </p>
                <p className="mb-5 text-xl md:text-[36px] leading-9 text-[#534741]">
                  (+84) 28 2240 651
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 lg:flex gap-8 items-center mt-10">
              <div className="col-span-3 md:col-span-1 pb-5 ">
                <h1 className="hidden sm:max-md:block font-icie_medium uppercase  text-lg text-[#534741] tracking-[0.25rem] text-center">
                  <Translations text="khauhieu" />
                </h1>

                <div className="sm:hidden md:block">
                  <h1 className="font-icie_medium uppercase md:text-3xl text-nowrap lg:leading-[3.5rem] lg:text-[37px] xl:text-[30px] 2xl:text-[45px] text-lg mt-1 text-[#534741] tracking-[0.5rem]">
                    <Translations text="khauhieu1" />{" "}
                  </h1>
                  <h1 className="font-icie_medium uppercase md:text-3xl text-nowrap lg:leading-[3.5rem] lg:text-[37px] xl:text-[30px] 2xl:text-[45px] text-lg mt-1 text-[#534741] tracking-[0.5rem]">
                    <Translations text="khauhieu2" />{" "}
                  </h1>
                  <h1 className="font-icie_medium uppercase md:text-3xl text-nowrap lg:leading-[3.5rem] lg:text-[37px] xl:text-[30px] 2xl:text-[45px] text-lg mt-1 text-[#534741] tracking-[0.5rem]">
                    <Translations text="khauhieu3" />{" "}
                  </h1>
                  <h1 className="font-icie_medium uppercase md:text-3xl text-nowrap lg:leading-[3.5rem] lg:text-[37px] xl:text-[30px] 2xl:text-[45px] text-lg mt-1 text-[#534741] tracking-[0.5rem]">
                    <Translations text="khauhieu4" />
                  </h1>
                </div>
              </div>
              <div className="col-span-3 flex-1 md:col-span-2 xl:col-span-1">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="p-5 lg:p-12   2xl:p-12 bg-white rounded-[30px] form-contact-us"
                >
                  <div className="form-group mb-3">
                    <label>
                      <Translations text="contactLabel1" />
                    </label>
                    <input
                      required
                      className="w-full rounded-[8px] py-1 mt-1"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>
                      <Translations text="contactLabel2" />
                    </label>
                    <input
                      required
                      className="w-full rounded-[8px] py-1 mt-1"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>
                      <Translations text="contactLabel3" />
                    </label>
                    <input
                      required
                      className="w-full rounded-[8px] py-1 mt-1"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <Translations text="message" />
                    </label>
                    <textarea
                      required
                      className="w-full rounded-[8px] py-1 mt-1"
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-center mt-10">
                    <button
                      style={{ color: "white" }}
                      className="btn btn-three text-sm md:text-[23.47px] tracking-[0.25rem]"
                    >
                      <span>
                        <Translations text="send" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-banner-news h-[400px] md:h-[500px] flex items-end lg:h-lvh 3xl:max-h-[900px] rounded`}
      ></div>
      <FooterComponentV2 />
    </Screen>
  );
};

export default Contact;
