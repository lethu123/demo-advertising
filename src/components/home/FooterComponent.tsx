import Container from '@srccommons/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import bct from '@assets/images/BCT.png'
import { IconLocation, IconPhone } from '@srccommons/icons'

const FooterComponent = () => {
  return (
    <footer className="py-[5rem]" style={{ background: '#666666' }}>
      <div className='w-full xl:w-5/6 max-w-screen-xl mx-auto'>
        <div className="grid grid-cols-5 gap-7 items-stretch flex-wrap">
          <div className="col-span-5 lg:col-span-2">
            <h1 className="text-orange text-xl font-extrabold font-avo_bold lg:text-[20.85px] mb-2">Công ty TNHH Quảng Cáo và Phát Triển M.A.I</h1>
            <h3 className='text-xl lg:text-[18.5px] font-avo text-orange'>M.A.I Development And Advertising Company Limited</h3>
            <div className="flex items-center gap-8 lg:gap-16 flex-wrap mt-1 justify-center lg:justify-start">
              <div >
                <div className="flex custom-text-mode gap-2">
                  <IconLocation color='white' className='w-[12px] custom-icon-show ' />
                  <IconLocation color='black' className='w-[12px] custom-icon-hidden' />
                  <span className='text-[18px] font-avo '>60 Đào Duy Anh, Phường 9, Quận Phú Nhuận, TPHCM</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex custom-text-mode gap-2">
                    <IconPhone color='white' className='w-[12px] custom-icon-show' />
                    <IconPhone color='black' className='w-[12px] custom-icon-hidden' />

                    <span className='text-[18px] font-avo'>  (+84) 28 2240 6511 </span>
                  </div>
                  <div>
                    <span className="custom-text-mode text-[18px] font-avo">Hotline 0902 668 246</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-5 my-5 justify-end'>
              <div className=' text-white text-[29px]'>
                <i className="fa fa-instagram"></i>
              </div>
              <div className=' text-white text-[29px]'>
                <i className="fa fa-facebook-f"></i>
              </div>
              <div className=' text-white text-[29px]'>
                <i className="fa fa-twitter"></i>
              </div>
              <div className=' text-white text-[29px]'>
                <i className="fa fa-envelope"></i>
              </div>
            </div>
            <div className=''>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0691669253342!2d106.67486747451754!3d10.806014558648329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d8c1782d29%3A0x361dc71292710cab!2zNjAgxJDDoG8gRHV5IEFuaCwgUGjGsOG7nW5nIDksIFBow7ogTmh14bqtbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1708878783701!5m2!1svi!2s" width="100%" height="250" style={{ border: 0 }}   loading="lazy"  ></iframe>
            </div>
          </div>
          <div className='col-span-3'>
            <div className='grid grid-cols-3 gap-5'>
              <div className="col-span-1 ">
                <h1 className="custom-text-mode font-extrabold text-[20px]">Dịch vụ</h1>
                <ul className={`${styles.ul} custom-text-mode`}>
                  <li className='text-[20px] flex gap-2'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={'/'} >Phát triển sản phẩm</Link>
                  </li>
                  <li className='text-[20px] flex gap-2'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={'/'} >Sản xuất sản phẩm</Link>
                  </li>
                  <li className='text-[20px] flex gap-2'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={'/'} >Đầu tư và có giải pháp
                      các thương hiệu
                      hiện đại và truyền thống</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 ">
                <h1 className="custom-text-mode font-extrabold text-[20px]">Về chúng tôi</h1>
                <ul className={`${styles.ul} custom-text-mode`}>
                  <li className='text-[20px] flex gap-2'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={'/'} >Hồ sơ công ty</Link>
                  </li>
                  <li className='text-[20px] flex gap-2'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={'/'} >Các đối tác</Link>
                  </li>
                  <li className='text-[20px] flex gap-2'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={'/'} >Đôi ngũ nhân viên</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 ">
                <h1 className="custom-text-mode font-extrabold text-[20px]">Liên hệ</h1>
                <ul className={`${styles.ul} custom-text-mode`}>
                  <li className='text-[20px] flex gap-2'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={'/'} >Form liên hệ</Link>
                  </li>
                  <li className='text-[20px] flex gap-2'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={'/'} >Điện thoại</Link>
                  </li>
                  <li className='text-[20px] flex gap-2'>
                    <div>
                      <i className="fa fa-angle-right"></i>
                    </div>
                    <Link href={'/'} >Email</Link>
                  </li>
                </ul>
              </div>
              <div className='col-span-3 ms-auto'>
                <Image alt='' className='w-[250px] mt-20' src={bct} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
