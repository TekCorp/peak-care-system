import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const blogData = [
    {
      count: 1,
      clientName: "Martin I., Varna",
      clientImg: "/images/icons/user-img.png",
      clientReview:
        "Split view of a bedroom: left with visible mold, 72% humidity and cough syrup on the nightstand; right after remediation with a clean wall, peaceful sleep, and an air-quality monitor reading ‘GO’.",
    },
    {
      count: 2,
      clientName: "Martin I., Varna",
      clientImg: "/images/icons/user-img.png",
      clientReview:
        "Split view of a bedroom: left with visible mold, 72% humidity and cough syrup on the nightstand; right after remediation with a clean wall, peaceful sleep, and an air-quality monitor reading ‘GO’.",
    },
    {
      count: 3,
      clientName: "Martin I., Varna",
      clientImg: "/images/icons/user-img.png",
      clientReview:
        "Split view of a bedroom: left with visible mold, 72% humidity and cough syrup on the nightstand; right after remediation with a clean wall, peaceful sleep, and an air-quality monitor reading ‘GO’.",
    },
  ];

  const handlePrevButtonClick = () => {
    const swiperInstance = document.querySelector(
      "#articles-cards-slider-tes"
    ).swiper;
    swiperInstance.slidePrev();
  };

  const handleNextButtonClick = () => {
    const swiperInstance = document.querySelector(
      "#articles-cards-slider-tes"
    ).swiper;
    swiperInstance.slideNext();
  };

  return (
    <div className="Testimonials-container standard-padding-space">
      <div className="container">
        <div className="row gy-4 d-flex align-items-center bg-container standard-padding-space">
          <div className="col-lg-6 col-md-12">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              observer={true}
              observeParents={true}
              parallax={true}
              className="testimonials-list"
              id="articles-cards-slider-tes"
            >
              {blogData.map((clientData, ind) => {
                return (
                  <>
                    <SwiperSlide key={ind}>
                      <TestimonialCard
                        clientImg={clientData.clientImg}
                        clientName={clientData.clientName}
                        clientReview={clientData.clientReview}
                      />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>

            <div className="testimonial-card-control gap-md-3 gap-3 d-flex align-items-center justify-content-center">
              <div
                className="swiper-button-prev control-btn"
                onClick={handlePrevButtonClick}
              >
                <img
                  src="/images/icons/arrow-left.png"
                  alt="arrow icon"
                  className="arrow-btn"
                />
              </div>
              <div
                className="swiper-button-next control-btn"
                onClick={handleNextButtonClick}
              >
                <img
                  src="/images/icons/arrow-right.png"
                  alt="arrow icon"
                  className="arrow-btn"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-3 text-center text-lg-start">
            <div className="text-content mx-auto mx-lg-0 card-bg d-flex flex-column py-3 px-4">
              <h3 className="secondary-body-heading side-card-title text-center color-white">
                Read What Our Customers Have to Say!
              </h3>
              <img
                src="/images/icons/testimonial-side-arrow-down-image.png"
                alt="arrow icon"
                className="img-fluid mx-auto arrow-down-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
