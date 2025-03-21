import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "@assets/scss/home.module.scss";
import logo2 from "@assets/images/logo.svg";
import flagVN from "@assets/images/vietnam.png";
import flagUK from "@assets/images/UK.png";

const menu = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Sản phẩm",
    path: "/",
    subMenu: [
      {
        title: "Sổ tay",
        path: "/",
      },
      // {
      //   title: "Name card",
      //   path: "/",
      // },
      {
        title: "Lịch",
        path: "/",
      },
      // {
      //   title: "Sticker",
      //   path: "/",
      // },
      // {
      //   title: "Bảng tên chức danh, menu (mica)",
      //   path: "/",
      // },
      {
        title: "Standee, backrop (PP, hiflex)",
        path: "/",
      },
    ],
  },
  {
    title: "Dịch vụ",
    path: "/",
    subMenu: [
      {
        title: "Thiết kế & sản xuất bao bì giấy",
        path: "/services/thiet-ke-san-xuat-bao-bi-giay",
      },
      {
        title: "Thiết kế trưng bày quảng cáo (POSM)",
        path: "/services/thiet-ke-trung-bay-quang-cao",
      },
      {
        title: "In thương mại, xuất bản phẩm",
        path: "/services/in-thuong-mai-xuat-ban-an-pham",
      },
      {
        title: "Thiết kế thi công pano, hộp đèn quảng cáo",
        path: "/services/thiet-ke-thi-cong-pano-hop-den-quang-cao",
      },
    ],
  },
  {
    title: "Về chúng tôi",
    path: "/about-us",
  },
  {
    title: "Tin tức",
    path: "/news",
  },
  {
    title: " Liên hệ",
    path: "/contact",
  },
  {
    title: "Tiếng Anh",
    path: "#",
    icon: flagUK,
    language: "en" as const,
  },
  {
    title: "Tiếng Việt",
    path: "#",
    icon: flagVN,
    language: "vi" as const,
  },
];
const MenuMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.mobile_menu} lg:hidden relative`}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-2 md:p-6 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="" width={80} height={80} src={logo2} />
          </a>
        </div>

        <button
          id="btn-open"
          type="button"
          className="-m-2.5 border inline-flex items-center justify-center rounded-md py-2 px-3 text-gray-700 text-2xl"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <i className="fa fa-bars text-[#2E3A40]"></i>
        </button>
      </nav>
      <div
        className={`${
          open ? styles.menu_show : styles.menu_hidden
        } overflow-hidden  absolute top-16   w-full z-10`}
      >
        <div
          className={`device-x bg-white rounded-md   mx-6 p-2  shadow-lg ring-1 ring-gray-900/5 h-[80%] overflow-y-scroll ${styles.sidebar}`}
        >
          {menu.map((it, index) => {
            if (it.subMenu) {
              return (
                <div
                  key={it.title}
                  className={`${index != menu.length - 1 ? "border-b" : ""}`}
                >
                  <h3 className="px-5  p-3 font-semibold text-gray-900 ">
                    {it.title}
                  </h3>
                  <div className="ms-7">
                    {it.subMenu.map((i, idx) => (
                      <Link
                        onClick={() => setOpen(!open)}
                        key={i.title}
                        href={i.path}
                        className={`${
                          idx != it.subMenu.length - 1 ? "border-b" : ""
                        } flex  items-center px-5  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100`}
                      >
                        {i.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                onClick={() => setOpen(!open)}
                key={it.title}
                href={it.path}
                className={`${
                  index != menu.length - 1 ? "border-b" : ""
                } flex  items-center px-5 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100`}
              >
                {it.icon && (
                  <Image
                    style={{ width: 20, height: 20 }}
                    alt=""
                    src={it.icon}
                  />
                )}
                {it.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
