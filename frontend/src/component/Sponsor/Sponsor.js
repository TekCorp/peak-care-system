import React from 'react'
import "./Sponsor.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Sponsor() {
  return (
    <div className='sponsor-container  standard-margin-space pt-5 mb-0'>
      <div className='container mt-5'>
       
        <div className="companies-logo-box p-3 py-4 d-flex align-items-center justify-content-evenly w-100">
          <div className='d-flex align-items-center justify-content-center'>
            <img src="/images/icons/sponsor-logo-1.png" alt="partner icon" className='img-fluid'/>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <img src="/images/icons/sponsor-logo-2.png" alt="partner icon" className='img-fluid'/>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <img src="/images/icons/sponsor-logo-3.jpg" alt="partner icon" className='img-fluid'/>
          </div>
        {/* <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
                200:{
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 2,
                },
                800: {
                  slidesPerView: 4,
                },
              }}
            className="mx-auto"
            >
                <SwiperSlide>
                <img src="/images/icons/sponsor-logo-1.png" alt="partner icon" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/icons/sponsor-logo-2.png" alt="partner icon" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/icons/sponsor-logo-3.jpg" alt="partner icon" />
                </SwiperSlide>
               

                <SwiperSlide>
                <img src="/images/icons/sponsor-logo-1.png" alt="partner icon" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/icons/sponsor-logo-2.png" alt="partner icon" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/icons/sponsor-logo-3.jpg" alt="partner icon" />
                </SwiperSlide>

            </Swiper> */}
        </div>
        </div>
    </div>
  )
}

export default Sponsor