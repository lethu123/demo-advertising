import Image from "next/image";
import React from "react";
import slat from "@assets/images/slat1.svg";
import contact from "@assets/images/contact.png";
import styles from "@assets/scss/home.module.scss";
import Container from "@/commons/Container";

const ContactComponent = () => {
  return (
    <div className="overflow-hidden ">
      <Container>
        <h1 className="border-l-4 pl-5 border-gray-800 text-[32px] mb-7 xl:mb-0 md:text-[40px] mt-10 ">
          Kết nối với chúng tôi
        </h1>
        <div className="ps-3 pt-5">
          <p className="mb-3 font-avo_bold">
            Nếu bạn muốn đặt hàng với yêu cầu đặc biệt, góp ý, nhắn nhủ hay đơn
            giản là một ý nghĩ bất chợt tới chúng tôi, xin đừng ngần ngại.{" "}
          </p>
          <p className="font-avo_bold">
            Mọi lời nhắn của bạn đều rất có giá trị với chúng tôi. Và ngược lại,
            chúng tôi sẽ cố gắng phản hồi nhanh nhất có thể vì không điều gì tệ
            hơn việc để khách quý của mình phải chờ đợi quá lâu.
          </p>
        </div>
        <div className="md:w-4/5 mx-auto ">
          <form className="relative  pt-10 pb-[150px]">
            <div className="form-group">
              <input
                className="placeholder:text-[#6D6E71] w-full"
                placeholder="Tên*"
              />
            </div>
            <div className="form-group">
              <input
                className="placeholder:text-[#6D6E71] w-full"
                placeholder="Email*"
              />
            </div>
            <div className="form-group">
              <input
                className="placeholder:text-[#6D6E71] w-full"
                placeholder="Số điện thoại*"
              />
            </div>
            <div className="form-group">
              <textarea
                className="placeholder:text-[#6D6E71] w-full"
                rows={4}
                placeholder="Lời nhắn gửi*"
              ></textarea>
            </div>
            <h3 className="text-[17px] mt-5 lg:text-[26px] font-avo_bold">
              SẢN PHẨM VÀ DỊCH VỤ QUÝ KHÁCH HÀNG QUAN TÂM
            </h3>
            <div className="grid grid-cols-2 mt-3 lg:gap-10">
              <div className="col-span-2 lg:col-span-1">
                <div className=" flex items-center mb-3">
                  <input
                    className="h-[20px] w-[20px] me-2"
                    id="c-schadule"
                    name="c-schadule"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="c-schadule">Sổ tay</label>
                </div>
                {/* <div className=" flex items-center mb-3">
                  <input
                    className="h-[20px] w-[20px] me-2"
                    id="c-name-card"
                    name="c-name-card"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="c-name-card">Name Card</label>
                </div> */}
                <div className=" flex items-center mb-3">
                  <input
                    className="h-[20px] w-[20px] me-2"
                    id="c-schadule"
                    name="c-schadule"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="c-schadule">Lịch</label>
                </div>
                {/* <div className=" flex items-center mb-3">
                  <input
                    className="h-[20px] w-[20px] me-2"
                    id="c-sticker"
                    name="c-sticker"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="c-sticker">Sticker</label>
                </div>
                <div className=" flex items-center mb-3">
                  <input
                    className="h-[20px] w-[20px] me-2"
                    id="c-bang-ten"
                    name="c-bang-ten"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="c-bang-ten">
                    Bảng tên, chức danh, menu (mica)
                  </label>
                </div> */}
                <div className=" flex items-center mb-3">
                  <input
                    className="h-[20px] w-[20px] me-2"
                    id="c-standee"
                    name="c-standee"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="c-standee">
                    Standee, backrop (PP, hiflex)
                  </label>
                </div>
                <div className=" flex items-center mb-3">
                  <input
                    className="h-[20px] w-[20px] me-2"
                    id="c-design-pano"
                    name="c-design-pano"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="c-design-pano">
                    Thiết kế thi công pano, hộp đèn quảng cáo
                  </label>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" flex items-center mb-3">
                  <input
                    className="h-[20px] w-[20px] me-2"
                    id="c-design-boxing"
                    name="c-design-boxing"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="c-design-boxing">
                    Thiết kế & sản xuất bao bì giấy
                  </label>
                </div>
                <div className=" flex items-center mb-3">
                  <input
                    className="h-[20px] w-[20px] me-2"
                    id="c-design-ads"
                    name="c-design-ads"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="c-design-ads">
                    Thiết kế trưng bày quảng cáo (POSM)
                  </label>
                </div>
                <div className=" flex items-center mb-3">
                  <input
                    className="h-[20px] w-[20px] me-2"
                    id="c-printing"
                    name="c-printing"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="c-printing">
                    In thương mại, xuất bản ấn phẩm
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center mt-14">
              <button className="view-more text-sm md:text-[23.47px]">
                GỬI LỜI NHẮN
              </button>
            </div>
          </form>
        </div>

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.521263707445!2d106.54401639357908!3d10.867770499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b93635e7d83%3A0x7784b185f7215232!2zTmjDoCBpbiBExrDGoW5nIFBob25n!5e0!3m2!1svi!2s!4v1709973614919!5m2!1svi!2s"
          className="w-full max-w-full pb-10 h-lvh"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </Container>
    </div>
  );
};

export default ContactComponent;
