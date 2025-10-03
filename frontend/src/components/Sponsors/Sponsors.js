import React from "react";
import "./Sponsors.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const sponsorData = [
  "/images/icons/sponsor-logo-1.png",
  "/images/icons/sponsor-logo-2.png",
  "/images/icons/sponsor-logo-3.png",
  "/images/icons/sponsor-logo-4.png",
  "/images/icons/sponsor-logo-5.png",
  "/images/icons/sponsor-logo-6.png",
  "/images/icons/sponsor-logo-7.png",
];

function Sponsors({
  normalPadding=false
}) {
  return (
    <div className={`Sponsors-container ${normalPadding && "normalPadding"} `}>
      <div className="container">
        <Swiper
          spaceBetween={50}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            200: {
              slidesPerView: 2,
            },
            550: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 7,
            },
          }}
          className="mx-auto"
        >
          {sponsorData.map((ele) => {
            return (
              <SwiperSlide className="d-flex ">
                <img src={ele} alt="partner icon" className="mx-auto sponsor-icon" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Sponsors;
