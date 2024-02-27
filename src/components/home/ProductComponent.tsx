import Container from '@/commons/Container'
import Image from 'next/image'
import React from 'react'
import design1 from '@assets/images/design1@2x.png'
import design2 from '@assets/images/design2@2x.png'
import design3 from '@assets/images/design3@2x.png'
import design4 from '@assets/images/design4@2x.png'
import design5 from '@assets/images/design5@2x.png'
import design6 from '@assets/images/design6@2x.png'
import design7 from '@assets/images/design7@2x.png'


const ProductComponent = () => {
    return (
        <Container>
            <div>
                <h1 className='text-center text-xl sm:text-2xl md:text-[35.03px] font-avo_bold'>
                    SẢN PHẨM CỦA CHÚNG TÔI
                </h1>
                <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem] my-8'>THIẾT KẾ - SÁNG TẠO – IN ẤN</h3>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='col-span-2 md:col-span-1'>
                        <p className='text-[18px] mb-3'>Chào mừng bạn đến với M.A.I - nơi kết nối ý tưởng và sự sáng tạo với thế giới thực. Chúng tôi là một doanh nghiệp chuyên về thiết kế sáng tạo, nơi nâng cao giá trị và trải nghiệm của sản phẩm và dịch vụ.</p>
                        <p>Sứ mệnh của chúng tôi: <br />
                            Tại M.A.I, chúng tôi tin rằng sự sáng tạo có thể thay đổi thế giới. Sứ mệnh của chúng tôi là tạo ra những sản phẩm và dịch vụ mang tính đột phá, tối ưu hóa trải nghiệm người dùng, và góp phần làm thay đổi cách mọi người tương tác với thế giới xung quanh.</p>
                        <div className='text-center mt-7'>
                            <button className='view-more text-sm md:text-[23.47px]'>Xem thêm</button>
                        </div>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <div className='w-full'>
                            {/* <Image alt='' className='h-full w-full animated animatedFadeInUp fadeInUp' src={design1} /> */}
                            <Image alt='' className='h-full w-full bounce' src={design1} />

                        </div>
                    </div>
                </div>

                <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem] my-8'>THI CÔNG, THIẾT KẾ, CHO THUÊ <br /> BẢNG HIỆU TRONG NHÀ & PANO NGOÀI TRỜI</h3>
                <div className='grid grid-cols-2 gap-10 items-stretch'>
                    <div className='col-span-2 md:col-span-1'>
                        <div className='w-full relative pt-20 pe-5'>
                            <Image alt='' style={{ position: 'absolute', right: 0, top: 0, width: '60%' }} className='z-10 bounce' src={design3} />
                            <Image alt=''  className='bounce' src={design2} />
                        </div>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <p className='text-[18px] mb-3'>Chào mừng bạn đến với M.A.I - nơi kết nối thương hiệu với khách hàng thông qua những chiến lược quảng cáo độc đáo và hiệu quả. Chúng tôi tự hào là đối tác chiến lược trong việc đưa thông điệp của bạn đến với đối tượng mục tiêu một cách sáng tạo và tinh tế.</p>
                        <p>M.A.I không chỉ là một công ty quảng cáo thông thường, mà là một đội ngũ chuyên gia sáng tạo và đam mê về nghệ thuật quảng cáo. Chúng tôi tin rằng mỗi thương hiệu là một câu chuyện riêng biệt, và nhiệm vụ của chúng tôi là giúp bạn kể lên câu chuyện đó một cách cuốn hút và sâu sắc.</p>
                        <div className='text-center mt-7'>
                            <button className='view-more text-sm md:text-[23.47px]'>Xem thêm</button>
                        </div>
                    </div>

                </div>

                <h3 className='text-center text-base sm:text-xl text-[27.88px] font-icie_medium tracking-[0.15rem] my-8'>SẢN XUẤT VẬT PHẨM – THIẾT BỊ QUẢNG CÁO <br /> IN PHUN KỸ THUẬT SỐ</h3>
                <div className='grid grid-cols-2 items-center gap-10'>
                    <div className='col-span-2 md:col-span-1  grid grid-cols-2 gap-1'>
                        <div className='col-span-1'>
                            <Image alt='' className='h-full w-full' src={design4} />
                        </div>
                        <div className='col-span-1'>
                            <Image alt='' className='h-full w-full' src={design5} />
                        </div>
                        <div className='col-span-1'>
                            <Image alt='' className='h-full w-full' src={design6} />
                        </div>
                        <div className='col-span-1'>
                            <Image alt='' className='h-full w-full' src={design7} />
                        </div>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <p className='text-[18px] mb-3'>M.A.I Advertising - nơi bạn có thể biến tưởng thành hiện thực với công nghệ in kỹ thuật số hiện đại. Chúng tôi là đối tác tin cậy của bạn trong việc tạo ra các sản phẩm in ấn chất lượng cao với độ tinh xảo và sáng tạo không giới hạn.</p>
                        <p>Không chỉ là một công ty in thông thường, mà là một đội ngũ chuyên gia sáng tạo và kỹ thuật viên đam mê về công nghệ in kỹ thuật số. Chúng tôi đưa ra những giải pháp in đa dạng từ in offset, in kỹ thuật số đến in ấn 3D, đáp ứng mọi nhu cầu của bạn.</p>
                        <div className='text-center mt-7'>
                            <button className='view-more text-sm md:text-[23.47px]'>Xem thêm</button>
                        </div>
                    </div>

                </div>
            </div>

        </Container>
    )
}

export default ProductComponent
