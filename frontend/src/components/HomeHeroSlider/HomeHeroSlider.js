import React from "react";
import "./HomeHeroSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useLanguageContent } from "../Utils/MultilingialContent";

function HomeHeroSlider() {
  const GetLanguageContent = useLanguageContent()
  return (
    <div className="HomeHeroSlider-container ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        observer={true}
        observeParents={true}
        parallax={true}
        className=""
        id="hero-cards-slider"
      >
        <SwiperSlide>
          <div className="first-slide py-lg-3 pb-lg-0 py-5">
            <div className="container">
              <div className="row gy-5">
                <div className="col-lg-6 d-flex align-items-center text-slide pb-4">
                  <div className="content-section">
                    <h4 className="bg-font-heading ">
                      {GetLanguageContent?.home?.hero?.fadeHeading}
                    </h4>
                    <h3 className="secondary-body-heading ovelaying-heading">
                      {GetLanguageContent?.home?.hero?.h1}
                    </h3>

                    <h4 className="post-heading font-DM-sans">
                      {GetLanguageContent?.home?.hero?.subHeading}
                    </h4>
                    <p className="body-paragraph color-white">
                      {GetLanguageContent?.home?.hero?.subline}
                    </p>
                    <div className="d-flex align-items-center flex-wrap gap-3">
                      {GetLanguageContent?.home?.hero?.ctas && (
                        <>
                          {Object.entries(GetLanguageContent?.home?.hero?.ctas).map(
                            ([key, value]) => (
                              <button className="genral-btn d-flex align-items-center gap-2">
                                {value}
                                <img
                                  src="/images/icons/btn-arrow-b.png"
                                  className="img-fluid"
                                  alt="arrow icon"
                                />
                              </button>
                            )
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 d-flex align-items-end image-slide" >
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
        <SwiperSlide>
          <div className="first-slide py-lg-3 pb-lg-0 py-5">
            <div className="container">
              <div className="row gy-5">
                <div className="col-lg-6 d-flex align-items-center text-slide pb-4">
                  <div className="content-section">
                    <h4 className="bg-font-heading ">
                      {GetLanguageContent?.home?.hero?.fadeHeading}
                    </h4>
                    <h3 className="secondary-body-heading ovelaying-heading">
                      {GetLanguageContent?.home?.hero?.h1}
                    </h3>

                    <h4 className="post-heading font-DM-sans">
                      {GetLanguageContent?.home?.hero?.subHeading}
                    </h4>
                    <p className="body-paragraph color-white">
                      {GetLanguageContent?.home?.hero?.subline}
                    </p>
                    <div className="d-flex align-items-center flex-wrap gap-3">
                      {GetLanguageContent?.home?.hero?.ctas && (
                        <>
                          {Object.entries(GetLanguageContent?.home?.hero?.ctas).map(
                            ([key, value]) => (
                              <button className="genral-btn d-flex align-items-center gap-2">
                                {value}
                                <img
                                  src="/images/icons/btn-arrow-b.png"
                                  className="img-fluid"
                                  alt="arrow icon"
                                />
                              </button>
                            )
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 d-flex align-items-end image-slide" >
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
