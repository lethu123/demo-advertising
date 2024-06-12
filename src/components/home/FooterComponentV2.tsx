import Link from "next/link";
import React from "react";
import { IconLocation, IconPhone } from "@srccommons/icons";
import styles from "@assets/scss/home.module.scss";
import Container from "@/commons/Container";

const FooterComponentV2 = () => {
  return (
    <footer className="bg-orange py-[5rem] overflow-hidden">
      <Container>
        <div className="flex gap-10 flex-wrap md:flex-nowrap xl:gap-0 xl:justify-between">
          <div>
            <h1 className=" text-[#534741] uppercase text-xl font-extrabold font-avo_bold lg:text-[25px] xl:text-[22px] 2xl:text-[30px] mb-2">
              Công ty TNHH Quảng Cáo và Phát Triển M.A.I
            </h1>
            <h3 className="text-xl lg:text-[23px] xl:text-[20px] 2xl:text-[29px] font-avo text-white">
              M.A.I Development And Advertising Company Limited
            </h3>
            <div className="mt-5">
              <div className="flex  text-[#534741] gap-2 items-start mb-1">
                <IconLocation
                  color="#534741"
                  className="w-[15px] custom-icon-show mt-1"
                />
                <span className="text-[18px] 2xl:text-[25px] font-avo flex-1">
                  60 Đào Duy Anh, Phường 9, Quận Phú Nhuận, TP Hồ Chí Minh
                </span>
              </div>
              <div className="flex flex-wrap gap-10 lg:gap-0 lg:justify-between">
                <div className="flex text-[#534741] gap-2">
                  <IconPhone
                    color="#534741"
                    className="w-[15px] custom-icon-show"
                  />

                  <span className="text-[18px] 2xl:text-[25px] font-avo">
                    {" "}
                    (+84) 28 2240 6511{" "}
                  </span>
                </div>
                <div>
                  <span className="text-[#534741] 2xl:text-[25px] text-[18px] font-avo">
                    Hotline 0902 668 246
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border p-8 rounded-[25px] border-[#534741]">
            <div className="text-nowrap">Follow me</div>
            <div className="grid grid-cols-2 gap-3 mt-5 justify-between">
              <div className="col-span-1 text-[#534741] text-[29px]">
                <i className="fa fa-instagram"></i>
              </div>
              <div className="col-span-1 text-[#534741] text-[29px]">
                <i className="fa fa-facebook-f"></i>
              </div>
              <div className="col-span-1 text-[#534741] text-[29px]">
                <i className="fa fa-twitter"></i>
              </div>
              <div className="col-span-1 text-[#534741] text-[29px]">
                <i className="fa fa-envelope"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[20px] overflow-hidden mt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0691669253342!2d106.67486747451754!3d10.806014558648329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d8c1782d29%3A0x361dc71292710cab!2zNjAgxJDDoG8gRHV5IEFuaCwgUGjGsOG7nW5nIDksIFBow7ogTmh14bqtbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1708878783701!5m2!1svi!2s"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-10 items-end sm:flex lg:flex justify-between flex-wrap grid grid-cols-2 md:grid grid-cols-3 md:flex-nowrap  lg:flex-nowrap gap-10">
          <div className="col-span-2 sm:col-span-1 lg:col-span-2 xl:grow">
            <div>
              <h1 className="text-[#534741] font-extrabold text-[20px]">
                Dịch vụ
              </h1>
              <ul className={`${styles.ul} mt-3 text-[#534741]`}>
                <li className=" flex gap-2 menu-footer">
                  <Link href={"/services/thiet-ke-san-xuat-bao-bi-giay"}>
                    Thiết kế & sản xuất bao bì
                  </Link>
                </li>
                <li className=" flex gap-2 menu-footer">
                  <Link href={"/services/thiet-ke-trung-bay-quang-cao"}>
                    Thiết kế trưng bày quảng cáo (POSM)
                  </Link>
                </li>
                <li className=" flex gap-2 menu-footer">
                  <Link href={"/services/in-thuong-mai-xuat-ban-an-pham"}>
                    In thương mại, xuất bản phẩm
                  </Link>
                </li>
                <li className=" flex gap-2 menu-footer">
                  <Link
                    href={"/services/thiet-ke-thi-cong-pano-hop-den-quang-cao"}
                  >
                    Thiết kế thi công pano, hộp đèn quảng cáo
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-2 xl:grow ">
            <h1 className="text-[#534741] font-extrabold text-[20px]">
              Sản phẩm
            </h1>
            <ul className={`${styles.ul} mt-3 text-[#534741]`}>
              <li className=" flex gap-2 menu-footer">
                <Link href={"/products/so-tay"}>Sổ tay</Link>
              </li>
              {/* <li className=' flex gap-2 menu-footer'>
                
                <Link href="/products/name-card" > Name card</Link>
              </li> */}
              <li className=" flex gap-2 menu-footer">
                <Link href="/products/lich">Lịch</Link>
              </li>
              {/* <li className=' flex gap-2 menu-footer'>
                
                <Link href={'/products/sticker'} >Sticker</Link>
              </li>
              <li className=' flex gap-2 menu-footer'>
                
                <Link href="/products/bang-ten-chuc-danh" > Bảng tên chức danh, menu (mica)</Link>
              </li> */}
              <li className=" flex gap-2 menu-footer">
                <Link href="/products/standee-backrop-pp-hiflex">
                  {" "}
                  Standee, backrop (PP, hiflex)
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 xl:grow">
            <div>
              <h1 className="text-[#534741] font-extrabold  text-[20px]">
                Liên hệ
              </h1>
              <ul className={`${styles.ul} mt-3 text-[#534741]`}>
                <li className=" flex gap-2 menu-footer">
                  <Link href={"/"} className="text-nowrap">
                    Form liên hệ
                  </Link>
                </li>
                <li className=" flex gap-2 menu-footer">
                  <Link href={"/"}>Điện thoại</Link>
                </li>
                <li className=" flex gap-2 menu-footer">
                  <Link href={"/"}>Email</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponentV2;
