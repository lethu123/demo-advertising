import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconLocation, IconPhone } from "@srccommons/icons";
import styles from "@assets/scss/home.module.scss";
import bct from "@assets/images/BCT.png";

const FooterComponent = () => {
  return (
    <footer
      className="py-[5rem] overflow-hidden"
      style={{ background: "#666666" }}
    >
      <div className="w-full px-3 xl:w-5/6 max-w-screen-xl lg:mx-auto">
        <div className="grid grid-cols-5 gap-10 xl:gap-16   items-stretch flex-wrap">
          <div className="col-span-5 lg:col-span-2">
            <h1 className="text-orange1 text-xl font-extrabold font-avo_bold lg:text-[20px] mb-2">
              Công ty TNHH Quảng Cáo và{" "}
              <br className="hidden lg:block 2xl:hidden" /> Phát Triển M.A.I
            </h1>
            <h3 className="text-xl lg:text-[18.5px] font-avo text-orange1">
              M.A.I Development And Advertising Company Limited
            </h3>

            <div className="hidden lg:block">
              <div className="flex custom-text-mode gap-2 items-start mb-1">
                <IconLocation
                  color="white"
                  className="w-[15px] custom-icon-show mt-1"
                />
                <span className=" font-avo flex-1">
                  60 Đào Duy Anh, Phường 9, Q. Phú Nhuận, TP HCM
                </span>
              </div>
              <div className="flex flex-wrap gap-10 lg:gap-0 lg:justify-between">
                <div className="flex custom-text-mode gap-2">
                  <IconPhone
                    color="white"
                    className="w-[15px] custom-icon-show"
                  />

                  <span className="text-[18px] font-avo">
                    {" "}
                    (+84) 28 2240 6511{" "}
                  </span>
                </div>
                <div>
                  <span className="custom-text-mode text-[18px] font-avo">
                    Hotline 0902 668 246
                  </span>
                </div>
              </div>
              <div className="flex gap-5 my-5 lg:justify-end">
                <div className=" text-white text-[29px]">
                  <i className="fa fa-instagram"></i>
                </div>
                <div className=" text-white text-[29px]">
                  <i className="fa fa-facebook-f"></i>
                </div>
                <div className=" text-white text-[29px]">
                  <i className="fa fa-twitter"></i>
                </div>
                <div className=" text-white text-[29px]">
                  <i className="fa fa-envelope"></i>
                </div>
              </div>

              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0691669253342!2d106.67486747451754!3d10.806014558648329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d8c1782d29%3A0x361dc71292710cab!2zNjAgxJDDoG8gRHV5IEFuaCwgUGjGsOG7nW5nIDksIFBow7ogTmh14bqtbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1708878783701!5m2!1svi!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-3">
            <div className="md:flex xl:flex col-span-3 flex-wrap grid grid-cols-2 lg:grid lg:grid-cols-4 md:flex-nowrap  xl:flex-nowrap gap-10">
              <div className="col-span-2 sm:col-span-1 lg:col-span-2 xl:grow">
                <div>
                  <h1 className="custom-text-mode font-extrabold text-[20px]">
                    Dịch vụ
                  </h1>
                  <ul className={`${styles.ul} custom-text-mode`}>
                    <li className=" flex gap-2 menu-footer">
                      <div>
                        <i className="fa fa-angle-right"></i>
                      </div>
                      <Link href={"/services/thiet-ke-san-xuat-bao-bi-giay"}>
                        Thiết kế & sản xuất bao bì
                      </Link>
                    </li>
                    <li className=" flex gap-2 menu-footer">
                      <div>
                        <i className="fa fa-angle-right"></i>
                      </div>
                      <Link href={"/services/thiet-ke-trung-bay-quang-cao"}>
                        Thiết kế trưng bày quảng cáo (POSM)
                      </Link>
                    </li>
                    <li className=" flex gap-2 menu-footer">
                      <div>
                        <i className="fa fa-angle-right"></i>
                      </div>
                      <Link href={"/services/in-thuong-mai-xuat-ban-an-pham"}>
                        In thương mại, xuất bản phẩm
                      </Link>
                    </li>
                    <li className=" flex gap-2 menu-footer">
                      <div>
                        <i className="fa fa-angle-right"></i>
                      </div>
                      <Link
                        href={
                          "/services/thiet-ke-thi-cong-pano-hop-den-quang-cao"
                        }
                      >
                        Thiết kế thi công pano, hộp đèn quảng cáo
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 lg:col-span-2 xl:grow ">
                <h1 className="custom-text-mode font-extrabold text-[20px]">
                  Sản phẩm
                </h1>
                <ul className={`${styles.ul} custom-text-mode`}>
                  <li className=" flex gap-2 menu-footer">
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={"/products/so-tay"}>Sổ tay</Link>
                  </li>
                  {/* <li className=' flex gap-2 menu-footer'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href="/products/name-card" > Name card</Link>
                  </li> */}
                  <li className=" flex gap-2 menu-footer">
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href="/products/lich">Lịch</Link>
                  </li>
                  {/* <li className=' flex gap-2 menu-footer'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={'/products/sticker'} >Sticker</Link>
                  </li>
                  <li className=' flex gap-2 menu-footer'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href="/products/bang-ten-chuc-danh" > Bảng tên chức danh, menu (mica)</Link>
                  </li> */}
                  <li className=" flex gap-2 menu-footer">
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href="/products/standee-backrop-pp-hiflex">
                      {" "}
                      Standee, backrop (PP, hiflex)
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 xl:grow">
                <div>
                  <h1 className="custom-text-mode font-extrabold  text-[20px]">
                    Liên hệ
                  </h1>
                  <ul className={`${styles.ul} custom-text-mode`}>
                    <li className=" flex gap-2 menu-footer">
                      <div>
                        <i className="fa fa-angle-right"></i>
                      </div>
                      <Link href={"/"} className="text-nowrap">
                        Form liên hệ
                      </Link>
                    </li>
                    <li className=" flex gap-2 menu-footer">
                      <div>
                        <i className="fa fa-angle-right"></i>
                      </div>
                      <Link href={"/"}>Điện thoại</Link>
                    </li>
                    <li className=" flex gap-2 menu-footer">
                      <div>
                        <i className="fa fa-angle-right"></i>
                      </div>
                      <Link href={"/"}>Email</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:hidden xl:hidden col-span-1 lg:block lg:col-span-2 xl:ms-auto">
                <Image alt="" className="w-[250px] xl:mt-20" src={bct} />
              </div>
            </div>
            <div className="hidden md:flex lg:hidden xl:flex xl:justify-end">
              <Image alt="" className="w-[250px]  md:mt-20" src={bct} />
            </div>
          </div>

          <div className="col-span-5 lg:hidden">
            <div className="flex custom-text-mode gap-2 items-start mb-1">
              <IconLocation
                color="white"
                className="w-[15px] custom-icon-show mt-1"
              />
              <span className=" font-avo flex-1">
                60 Đào Duy Anh, Phường 9, Q. Phú Nhuận, TP HCM
              </span>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-between">
              <div className="flex custom-text-mode gap-2">
                <IconPhone
                  color="white"
                  className="w-[15px] custom-icon-show"
                />

                <span className="text-[18px] font-avo">
                  {" "}
                  (+84) 28 2240 6511{" "}
                </span>
              </div>
              <div>
                <span className="custom-text-mode text-[18px] font-avo">
                  Hotline 0902 668 246
                </span>
              </div>
            </div>
            <div className="flex gap-5 my-5 lg:justify-end">
              <div className=" text-white text-[29px]">
                <i className="fa fa-instagram"></i>
              </div>
              <div className=" text-white text-[29px]">
                <i className="fa fa-facebook-f"></i>
              </div>
              <div className=" text-white text-[29px]">
                <i className="fa fa-twitter"></i>
              </div>
              <div className=" text-white text-[29px]">
                <i className="fa fa-envelope"></i>
              </div>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0691669253342!2d106.67486747451754!3d10.806014558648329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d8c1782d29%3A0x361dc71292710cab!2zNjAgxJDDoG8gRHV5IEFuaCwgUGjGsOG7nW5nIDksIFBow7ogTmh14bqtbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1708878783701!5m2!1svi!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* <div className='col-span-5 md:col-span-3'>
            <div className=''>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0691669253342!2d106.67486747451754!3d10.806014558648329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d8c1782d29%3A0x361dc71292710cab!2zNjAgxJDDoG8gRHV5IEFuaCwgUGjGsOG7nW5nIDksIFBow7ogTmh14bqtbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1708878783701!5m2!1svi!2s" width="100%" height="250" style={{ border: 0 }} loading="lazy"  ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
