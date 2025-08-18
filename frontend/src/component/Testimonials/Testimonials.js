import "./Testimonials.css"
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Autoplay,Pagination  } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials() {
  const blogData = [
    {clientName:"Brooklyn Simmons",rank:"Sales Manager",clientReview:"Air conditioning services encompass a range of maintenance, repair, installation, and consultation activities designed to ensure the efficient operation and longevity of air conditioning systems"},
    {clientName:"Brooklyn Simmons",rank:"Sales Manager",clientReview:"Air conditioning services encompass a range of maintenance, repair, installation, and consultation activities designed to ensure the efficient operation and longevity of air conditioning systems"},
    {clientName:"Brooklyn Simmons",rank:"Sales Manager",clientReview:"Air conditioning services encompass a range of maintenance, repair, installation, and consultation activities designed to ensure the efficient operation and longevity of air conditioning systems"},
  ]

  return (
    <div className="Testimonials-container standard-margin-space">
      <div className="w-100 container-fluid px-0 ">
    <div className=" d-flex align-items-center w-100">
      <div className="col-12 text-center px-0">


        <div className="">
          <div className="d-flex">
            
            <div className="card-container px-5 ms-lg-3 ms-0 text-lg-start text-center py-5">
              
            <p className="sub-heading" style={{color:'#d63346'}}><img src="/images/icons/post-sub-para-icon.png" alt="circle icon"/> Testimonials</p>
            <h3 className="body-heading" style={{color:"white"}}>Our Clients Feedback</h3>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              loop={true}
              autoplay={
                {
                  delay:2000,
                  disableOnInteraction:false
                }
              }
              // modules={[Autoplay,Pagination]}
              modules={[Autoplay]}
              observer ={true}
              observeParents={true}
              parallax={true}
              className="testimonials-list py-5 pb-1"
              id="testimonial-cards-slider"
                  >
                    {
                      blogData.map((clientData,ind)=>{
                        return(<>
                          <SwiperSlide key={ind} >
                            <TestimonialCard clientImg={clientData.clientImg} clientName={clientData.clientName} clientReview={clientData.clientReview} rank={clientData.rank}/>
                          </SwiperSlide>
                          </>)
                      })
                    }
              </Swiper>

              <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between gap-3">
                <img src="/images/icons/google-review-icon.png" alt="google reviews icons" style={{width:"200px"}}/>
                <button 
                  className="genral-btn" 
                  onClick={()=>{window.open("https://www.google.com/maps/place/Thermal+Group+Services/@43.5346094,-79.8890103,12.19z/data=!4m6!3m5!1s0x882b6fc1c415d985:0x517bb149dbca82a5!8m2!3d43.5281241!4d-79.866827!16s%2Fg%2F11gd17pq3s?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D")}}
                >
                  Read More
                </button>
              </div>
            </div>
            
            <div className="d-lg-block d-none">
              <img src="/images/creatives/testimonial-side-img.png" alt="side"  className="img-fluid" style={{height:"100%"}}/>
            </div>
          </div>
        </div>
        
       
      </div>
      </div>
  </div>
</div>
  )
}

export default Testimonials