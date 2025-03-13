import React from "react";
import sloganIcon from "@assets/images/icon1.svg";
import Image from "next/image";
import slash from "@assets/images/two-slash.svg";
import dynamic from "next/dynamic";

const Translations = dynamic(() => import("@/commons/Translations"), {
  ssr: false,
});

const SloganComponent = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full  3xl:w-3/4 xl:w-4/5  max-w-screen-xl justify-center mx-auto px-4 xl:px-0 relative">
        <div className={"text-center py-10 px-3 "}>
          <Image
            className="mx-auto"
            width={88}
            height={53}
            alt=""
            src={sloganIcon}
          />

          <h5 className="font-icie_medium uppercase text-lg sm:text-xl md:text-[27.88px] tracking-[0.15em] pt-7">
            “<Translations text="khauhieu" />”
          </h5>
          <h2 className="font-icie_medium text-xl sm:text-2xl md:text-[35px] tracking-[0.15em] text-orange">
            M.A.I ADVERTISING AND DEVELOPMENT CO.,LT
          </h2>
        </div>
        <div className="absolute top-0 -left-[21%]   h-full  ">
          <Image alt="" className="h-full" src={slash} />
        </div>
      </div>
    </div>
  );
};

export default SloganComponent;
