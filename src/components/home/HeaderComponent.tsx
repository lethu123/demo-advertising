import Image from "next/image";
import React from "react";
import icPhone from "@assets/images/phone.svg";
import location from "@assets/images/loaction.svg";
import flagVN from "@assets/images/vietnam.png";
import flagUK from "@assets/images/UK.png";
import Container from "@srccommons/Container";

const HeaderComponent = () => {
  return (
    <div className="bg-orange">
      <Container>
        <div className="flex lg:justify-around justify-between items-center py-[9px] flex-wrap">
          <div className="items-center hidden lg:flex">
            <Image style={{ width: 20, height: 20 }} alt="" src={location} />
            <span className="text-[#2E3A40] ml-2 text-[14px]">
              60 Đào Duy Anh, P.9, Q. Phú Nhuận, TP. Hồ Chí Minh{" "}
            </span>
          </div>
          <div className="flex items-center">
            <Image style={{ width: 20, height: 20 }} alt="" src={icPhone} />
            <span className="text-[#2E3A40] ml-2  sm:text-sm text-[13px]">
              {" "}
              (+84) 28 2240 6511
            </span>
          </div>

          <div className="flex items-center flex-wrap">
            <div className="cursor-pointer font-semibold flex items-center mr-3">
              {" "}
              <Image
                style={{ width: 20, height: 20 }}
                alt=""
                src={flagVN}
              />{" "}
              <span className="text-white ml-2  text-[14px]">Tiếng Việt</span>{" "}
            </div>
            <div className="cursor-pointer font-semibold flex items-center">
              {" "}
              <Image
                style={{ width: 20, height: 20 }}
                alt=""
                src={flagUK}
              />{" "}
              <span className="text-white ml-2  text-[14px]">Tiếng Anh</span>{" "}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderComponent;
