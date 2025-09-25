import React from "react";
import "./HomeHeroSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { getLanguageContent } from "../Utils/MultilingialContent";

function HomeHeroSlider() {
  return (
    <div className="HomeHeroSlider-container ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        observer={true}
        observeParents={true}
        parallax={true}
        className=""
        id="hero-cards-slider"
      >
        <SwiperSlide>
          <div className="first-slide pt-lg-2 pt-5">
            <div className="container">
              <div className="row ">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="content-section">
                    <h4 className="bg-font-heading ">
                      {getLanguageContent()?.homeHeroContent?.fadeHeading}
                    </h4>
                    <h3 className="secondary-body-heading ovelaying-heading">
                      {getLanguageContent()?.homeHeroContent?.mainHeading}
                    </h3>

                    <h4 className="post-heading">
                      {getLanguageContent()?.homeHeroContent?.subHeading}
                    </h4>
                    <p className="body-paragraph color-white">
                      {getLanguageContent()?.homeHeroContent?.paragraph}
                    </p>
                    <button className="genral-btn">
                      {getLanguageContent()?.homeHeroContent?.buttonText}
                    </button>
                  </div>
                </div>

                <div className="col-lg-6 d-flex align-items-end">
                  <img
                    src="/images/creatives/home-side-image.png"
                    alt="person"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeHeroSlider;
