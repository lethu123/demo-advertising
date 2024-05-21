import Container from '@/commons/Container'
import Image from 'next/image'
import React, { Fragment } from 'react'
import styles from '@assets/scss/home.module.scss'
import design5 from '@assets/images/design5@2x.png'
import design6 from '@assets/images/design6@2x.png'
import design7 from '@assets/images/design7@2x.png'

import sp1 from '@assets/images/sp1.png';
import sp2 from '@assets/images/sp1.2.png';
import sp3 from '@assets/images/sp1.3.png';
import sp4 from '@assets/images/sp1.4.png';

import sp5 from '@assets/images/sp2.png';
import sp6 from '@assets/images/sp2.2.png';

import sp7 from '@assets/images/sp3.png';
import sp8 from '@assets/images/sp3.2.png';
import sp9 from '@assets/images/sp3.3.png';
import sp10 from '@assets/images/sp3.4.png';
import sp11 from '@assets/images/sp3.5.png';

import sp12 from '@assets/images/sp4.png';
import sp13 from '@assets/images/sp4.2.png';
import sp14 from '@assets/images/sp4.3.png';


import threeSlash from '@assets/images/three-slash.svg'
import threeSlash3 from '@assets/images/three-slash3.svg'
 
import '@assets/scss/button.scss'


const ProductComponent = () => {
    return (
        <Fragment>
            <div className='overflow-hidden our-product'>
                <Container>
                    <div  >
                        <div className='text-center'>
                            <h1 className='pb-4 inline-block relative text-xl sm:text-2xl md:text-[35.03px] font-avo_bold'>
                                SẢN PHẨM CỦA CHÚNG TÔI
                            </h1>
                        </div>
                        <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem] my-8'>THIẾT KẾ & SẢN XUẤT BAO BÌ</h3>
                        <div className='grid grid-cols-2 gap-10'>
                            <div className='col-span-2 md:col-span-1'>
                                <p className='text-[18px] mb-3 md:mt-4'>Thay vì sử dụng các túi nhựa khó phân hủy, gây ô nhiễm đến môi trường toàn cầu thì người tiêu dùng hiện nay đang có xu hướng chuyển qua dùng các túi làm bằng giấy, vừa bảo vệ được cảnh quan sống .</p>
                                <p><b>- Một sản phẩm nổi bật, thu hút khách hàng từ cái nhìn đầu tiên không phải dựa vào công dụng của nó, mà chính là nhờ vào giao diện bên ngoài của sản phẩm đó. Việc chăm chút cho bao bì bên ngoài đó là điều cần thiết cho mỗi sản phẩm. </b></p>
                                <div className='text-center mt-7'>
                                    <button className="btn btn-three text-sm md:text-[23.47px]">
                                        <span>Xem thêm</span>
                                    </button>
                                </div>
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <div className='w-full relative'>
                                    {/* <Image alt='' className='h-full w-full animated animatedFadeInUp fadeInUp' src={design1} /> */}

                                    <div className='col-span-2 md:col-span-1  grid grid-cols-2 gap-1'>
                                        <div className='col-span-1'>
                                            <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp1} />
                                        </div>
                                        <div className='col-span-1'>
                                            <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp2} />
                                        </div>
                                        <div className='col-span-1'>
                                            <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp3} />
                                        </div>
                                        <div className='col-span-1'>
                                            <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp4} />
                                        </div>
                                    </div>


                                    <div className='absolute -top-[136px] -right-[51px] w-[265px] -z-[1]'>
                                        <Image alt='' src={threeSlash3} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-16'>
                            <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem] my-8'>THIẾT KẾ TRƯNG BÀY QUẢNG CÁO ( POSM...)</h3>
                            <div className='grid grid-cols-2 gap-10 items-stretch relative'>
                                <div className='col-span-2 md:col-span-1'>
                                    <div className='w-full relative pt-20 pe-5'>
                                        <Image alt='' style={{ position: 'absolute', right: 0, top: 0, width: '60%' }} className={`z-10 ${styles.image_hover} `} src={sp6} />
                                        <Image alt='' className={`${styles.image_hover}`} src={sp5} />
                                        <div className='absolute -top-[37px] -left-[97px] w-[265px] -z-[1]'>
                                            <Image alt='' src={threeSlash} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 md:col-span-1'>
                                    <p className='text-[18px] mb-3'>Chào mừng bạn đến với <b>M.A.I</b> - nơi kết nối thương hiệu với khách hàng thông qua những chiến lược quảng cáo độc đáo và hiệu quả. Chúng tôi tự hào là đối tác chiến lược trong việc đưa thông điệp của bạn đến với đối tượng mục tiêu một cách sáng tạo và tinh tế.</p>
                                    <p><b>M.A.I</b> không chỉ là một công ty quảng cáo thông thường, mà là một đội ngũ chuyên gia sáng tạo và đam mê về nghệ thuật quảng cáo. Chúng tôi tin rằng mỗi thương hiệu là một câu chuyện riêng biệt, và nhiệm vụ của chúng tôi là giúp bạn kể lên câu chuyện đó một cách cuốn hút và sâu sắc.</p>
                                    <div className='text-center mt-7'>
                                        <button className="btn btn-three text-sm md:text-[23.47px]">
                                            <span>Xem thêm</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='relative mt-16'>
                            <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem] my-8'>IN THƯƠNG MẠI, XUẤT BẢN PHẨM</h3>

                            <div className=' grid grid-cols-4 gap-1 items-stretch'>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp7} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1 mt-3'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp8} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1 mt-3'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp9} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design5} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design6} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1 mb-3'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp10} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1 mb-3'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp11} />
                                </div>
                                <div className='col-span-2 sm:col-span-2 md:col-span-1'>
                                    <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design7} />
                                </div>
                            </div>
                            <div className='text-center mt-7'>
                                <button className="btn btn-three text-sm md:text-[23.47px]">
                                    <span>Xem thêm</span>
                                </button>
                            </div>
                            <div className='absolute -top-[37px] -left-[97px] w-full -z-[1]'>
                                <Image alt='' src={threeSlash} />
                            </div>
                        </div>

                        <div className='relative mt-16'>
                            <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem] my-8'>THIẾT KẾ THI CÔNG PANO, HỘP ĐÈN QUẢNG CÁO</h3>
                            <div className='grid grid-cols-2 items-center gap-10 '>
                                <div className='col-span-2 md:col-span-1'>
                                    <p className='text-[18px] mb-3'>M.A.I Advertising - nơi bạn có thể biến tưởng thành hiện thực với công nghệ in kỹ thuật số hiện đại. Chúng tôi là đối tác tin cậy của bạn trong việc tạo ra các sản phẩm in ấn chất lượng cao với độ tinh xảo và sáng tạo không giới hạn.</p>
                                    <p>Không chỉ là một công ty in thông thường, mà là một đội ngũ chuyên gia sáng tạo và kỹ thuật viên đam mê về công nghệ in kỹ thuật số. Chúng tôi đưa ra những giải pháp in đa dạng từ in offset, in kỹ thuật số đến in ấn 3D, đáp ứng mọi nhu cầu của bạn.</p>
                                    <p>... CÒN NỮA</p>
                                    <div className='text-center mt-7'>
                                        <button className="btn btn-three text-sm md:text-[23.47px]">
                                            <span>Xem thêm</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-span-2 md:col-span-1  grid grid-cols-2 gap-1'>
                                    <div className='col-span-1'>
                                        <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp12} />
                                    </div>
                                    <div className='col-span-1'>
                                        <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp13} />
                                    </div>
                                    <div className='col-span-1'>
                                        <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={design6} />
                                    </div>
                                    <div className='col-span-1'>
                                        <Image alt='' className={`h-full w-full ${styles.image_hover} `} src={sp14} />
                                    </div>
                                </div>


                            </div>
                            <div className='absolute top-[70px] -right-[270px] w-[400px] '>
                                <Image alt='' src={threeSlash3} />
                            </div>
                        </div>
                    </div>

                </Container> 
            </div>
 
        </Fragment>

    )
}

export default ProductComponent
