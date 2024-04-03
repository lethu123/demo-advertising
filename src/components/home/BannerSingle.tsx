"use client";

import React from "react";
import Image from "next/image";
import "@assets/scss/home.scss";
import Navbar from "@/commons/Navbar";

const BannerSingle = ({
  classImage,
  idScreen,
}: {
  classImage: any;
  idScreen?: string;
}) => {
  return (
    <>
      <Navbar />
      <div
        className={`${classImage} h-[400px] md:h-[500px] flex items-end lg:h-lvh 3xl:max-h-[900px] rounded`}
      >
        {/* <Image alt="" src={image} className='w-full h-full' /> */}
        {idScreen && <div className="pt-[6.5rem]" id={idScreen}></div>}
      </div>
    </>
  );
};

export default BannerSingle;
