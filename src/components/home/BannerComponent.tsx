import React from "react";
import homecss from "@assets/scss/home.module.scss";
import Header2Component from "./Header2Component";
import dynamic from "next/dynamic";

const Translations = dynamic(() => import("@/commons/Translations"), {
  ssr: false,
});
const BannerComponent = () => {
  return (
    <div className="relative banner">
      <Header2Component />
      <div
        className={`${homecss.banner} h-[400px] lg:h-svh flex flex-col justify-between relative`}
      >
        <div className="animated animatedFadeInUp fadeInUp text-center text-white w-full absolute top-[40%] translate-x-2/4  text-xl lg:text-[27.88px] tracking-[.15em] font-icie_medium px-3">
          “<Translations text="slogan" />”
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
