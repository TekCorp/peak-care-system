import React from "react";
import "./CardBlog.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardBox from "./CardBox";

const handlePrevButtonClick = () => {
  const swiperInstance = document.querySelector('#articles-cards-slider').swiper;
  swiperInstance.slidePrev();
};

const handleNextButtonClick = () => {
  const swiperInstance = document.querySelector('#articles-cards-slider').swiper;
  swiperInstance.slideNext();
};

const servicesAr = [
  {
    img:"/images/creatives/service-card-1.png",
    title:"Heating Systems",
    link:'/services/heating-systems'
  },
  {
    img:"/images/creatives/service-card-2.png",
    title:"Refrigation",
    link:'/services/refrigation'
  },
  {
    img:"/images/creatives/service-card-3.png",
    title:"Design Build",
    link:'/services/design-build'
  },
  {
    img:"/images/creatives/service-card-4.png",
    title:"Air Conditioning",
    link:'/services/air-conditioning'
  },
  {
    img:"/images/creatives/service-card-5.png",
    title:"Gas Lines",
    link:'/services/gas-lines'
  },
  {
    img:"/images/creatives/service-card-6.png",
    title:"Sheet Metals",
    link:'/services/sheet-metal'
  },
  {
    img:"/images/creatives/service-card-7.png",
    title:"Fire Places",
    link:'/services/fire-places'
  },
  {
    img:"/images/creatives/service-card-8.png",
    title:"Hydronics",
    link:'/services/hydronics'
  },

  
]

function ServiceCardCarousel() {

  return (
    <div className='blog-container pt-5 mb-5 container px-0'>
      <div className="blog-upper-content my-4">
        <div className="container d-flex flex-lg-row flex-column align-items-lg-end align-items-center justify-content-between px-5">
            <div className="blog-text-content text-lg-start text-center">
              <p className="sub-heading mb-1" style={{color:"white"}}>Let Us help You</p>
              <h3 className="body-heading mb-0" style={{color:"white"}}>Our Services</h3> 
            </div>
            <div >
            <div className="blog-btn mt-4">
              <button className="swiper-button-prev swiper-button active" onClick={handlePrevButtonClick}><img src="/images/icons/genral-btn-arrow-w.png" alt="arrow icon" className="btn-arrow-icon btn-arrow-icon-left mb-0"/></button>
              <button className="swiper-button-next swiper-button" onClick={handleNextButtonClick} ><img src="/images/icons/genral-btn-arrow-w.png" alt="arrow icon" className={`btn-arrow-icon  mb-0`}/></button>
            </div>
          </div>
        </div>
      </div>
        <Swiper
            spaceBetween={30}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={true}
            autoplay={
              {
                delay:1500,
                disableOnInteraction:false
              }
            }
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            observer ={true}
            observeParents={true}
            parallax={true}
            breakpoints={{
                280: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 4,
                }
              }}
            className="card-list py-4 px-3"
            id="articles-cards-slider"
            >


            {servicesAr.map((service,ind)=>{
              return (<>
                <SwiperSlide key={ind}>
                  <CardBox
                    service={service.img}
                    title={service.title}
                    link={service.link}
                    />
                </SwiperSlide>
              </>)
            })}
            
        </Swiper>
       
       {/* <div className="bottom-icon-section d-flex align-items-center justify-content-evenly py-2">
        <img src="/images/icons/emergency-img.png" alt="emergency booking icon" className="img-fluid " style={{width:"30%"}}/>
        <img src="/images/icons/emergency-img.png" alt="emergency booking icon" className="img-fluid " style={{width:"30%"}}/>
        <img src="/images/icons/emergency-img.png" alt="emergency booking icon" className="img-fluid " style={{width:"30%"}}/>

       </div> */}
       <div className='bottom-icon-section ps-lg-4 d-flex flex-lg-row flex-column align-items-center justify-content-center  text-lg-start text-center bg-red py-2 '>
                    
                    {/* <img src='/images/icons/post-sub-para-star-icon.png' alt='star icon' className='me-2'  /> */}
                    <h3 className='body-heading mt-auto' style={{color:"white", textShadow:"1px white"}}>Emergency Services</h3>

                    <div className='ms-4 d-flex align-items-center'>
                        <img src='/images/icons/contact-page-info-phone-filled.png' alt='phone icon' className='pe-2 ' style={{filter:"invert(1)",width:"35px"}} />
                        <a href='tel:289-878-5443' style={{color:"white", fontWeight:"bold",fontSize:"1.4rem"}} >289-878-5443</a>
                    </div>

                </div>
        
    </div>
  )
}

export default ServiceCardCarousel