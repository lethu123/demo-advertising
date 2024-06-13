import Container from "@/commons/Container";
import Screen from "@/commons/Screen";
import HeaderComponent from "@/components/home/HeaderComponent";
import Image from "next/image";
import React from "react";

import styles from "@assets/scss/home.module.scss";
import design7 from "@assets/images/design7@2x.png";
import threeSlash3 from "@assets/images/three-slash3.svg"; 
import sloganIcon from "@assets/images/icon1.svg";
import BannerSingle from "@/components/home/BannerSingle";

import sp1 from "@assets/images/sp3.png";
import sp2 from "@assets/images/sp3.2.png";
import sp3 from "@assets/images/sp3.3.png";
import sp4 from "@assets/images/qc1.png";
import sp5 from "@assets/images/sp3.5.png";

import sp6 from "@assets/images/qc2.png";
import sp7 from "@assets/images/qc2.2.png";
import sp8 from "@assets/images/qc2.3.png";
import sp9 from "@assets/images/qc2.4.png";
import sp10 from "@assets/images/qc2.5.png";
import sp11 from "@assets/images/qc2.6.png";

import sp12 from "@assets/images/qc3.png";
import sp13 from "@assets/images/qc3.2.png";
import sp14 from "@assets/images/qc3.3.png";
import sp15 from "@assets/images/qc3.4.png";
import sp16 from "@assets/images/qc3.5.png";
import sp17 from "@assets/images/qc3.6.png";
import sp18 from "@assets/images/qc3.7.png";
import FooterComponentV2 from "../home/FooterComponentV2";

const ProductDisplayDesign = () => {
  return (
    <Screen>
      <HeaderComponent />
      {/* BANNER */}
      <BannerSingle
        idScreen="thiet-ke-trung-bay-quang-cao"
        classImage={"bg-banner-product2"}
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
          THIẾT KẾ TRƯNG BÀY QUẢNG CÁO ( POSM...)
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
                    Tư vấn thiết kế
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
                    In ấn
                  </p>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
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
            <p className="text-orange mb-2 text-center font-avo_bold text-xl  lg:text-[23px] tracking-widest">
              Thi công sản xuất lắp đặt
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
                  src={sp9}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-3">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp13}
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
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
              <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-3">
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
              <div className="col-span-2 sm:col-span-2 md:col-span-1">
                <Image
                  alt=""
                  className={`h-full w-full ${styles.image_hover} `}
                  src={sp18}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-8 pb-14" style={{ background: "#FFCD00" }}>
        <Container>
          <p className="text-[#2E3A40]">
            Nội thất showroom: tủ, kệ trưng bày sản phẩm. Gian hàng hội chợ,
            booth sự kiện, Vật phẩm P.O.S.M: <br />
            Poster: thể hiện nội dung thông qua hình ảnh, bức vẽ, thông điệp,
            câu chữ chi tiết, thường được in trên giấy dán trên tường hay các
            mặt thẳng đứng. Poster thu hút được người xem ở cự ly gần, do kích
            thước cũng như phông chữ nhỏ. Về độ bền thì những tấm poster này chỉ
            sử dụng được trong một khoảng thời gian ngắn. Banner: cũng giống như
            poster nhưng banner lại có sự khác biệt hơn. Khi được in trên bạt,
            vinyl (đều là các chất liệu bền, sử dụng được lâu). Nội dung thể
            hiện cũng được chọn lọc, kích thước chữ hay hình ảnh khá là lớn do
            banner thường treo ở các vị trí cao, xa. <br />
            Hanger sắt treo, hanger giấy, haging mobile <br />
            Kệ trưng bày bằng sắt, alu, sơn tĩnh điện <br />
            Cổng chào siêu thị, cửa hàng <br />
            Bảng hiệu quảng cáo, bảng vẩy <br />
            Standee chữ X, standee cuốn: xuất hiện nhiều trong các buổi triển
            lãm, hội thảo, hội chợ, chúng được ưa chuộng như vậy là nhờ vào tính
            năng có thể di chuyển, gấp gọn khi không dùng và đặc biệt chi phí in
            cũng khá thấp nếu thay đổi nội dung. <br />
            Danglers: là những biển quảng cáo được thả dài trên trần, thường gặp
            ở các siêu thị hoặc những cửa hàng bán lẻ <br />
            Sticker/decal: là loại decal dùng để dán lên các vị trí mà khách
            muốn, trên đó thường in logo hay nội dung chính của sản phẩm. <br />
            Shelf talker: cũng tương tự như wobbler, nhưng shelftalker lại dùng
            để cài lên trên kệ, dễ dàng thay đổi nội dung bằng cách thay phần
            giấy ở bên trong rất tiết kiệm chi phí <br />
          </p>
        </Container>
      </div>
      <FooterComponentV2 />
    </Screen>
  );
};

export default ProductDisplayDesign;
