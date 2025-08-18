import "./serviceText.css"
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Autoplay,Pagination  } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from "react-router-dom";


function ServiceText() {
  const blogData = [
    {clientName:"Brooklyn Simmons",rank:"Sales Manager",clientReview:"Air conditioning services encompass a range of maintenance, repair, installation, and consultation activities designed to ensure the efficient operation and longevity of air conditioning systems"},
    {clientName:"Brooklyn Simmons",rank:"Sales Manager",clientReview:"Air conditioning services encompass a range of maintenance, repair, installation, and consultation activities designed to ensure the efficient operation and longevity of air conditioning systems"},
    {clientName:"Brooklyn Simmons",rank:"Sales Manager",clientReview:"Air conditioning services encompass a range of maintenance, repair, installation, and consultation activities designed to ensure the efficient operation and longevity of air conditioning systems"},
  ]

  const navigate = useNavigate()

  return (
    <div className="serviceText-container standard-margin-space">
      <div className="w-100 container-fluid px-0 ">
    <div className=" d-flex align-items-center w-100">
      <div className="col-12 text-center px-0">


        <div className="">
          <div className="d-flex">
            
            <div className="card-container px-5 ms-lg-3 ms-0 text-lg-start text-center py-5">
              
              <div className="d-flex flex-column"> 
                <p className="sub-heading" style={{color:'#d63346'}}><img src="/images/icons/post-sub-para-icon.png" alt="circle icon"/> Free to Contact Us</p>
                <h3 className="body-heading" style={{color:"white"}}>Get Premium Air Services From With Us!</h3>

              </div>
              
              <button className="hero-genral-btn mt-4" onClick={()=>{navigate("/contact")}}>Describe More</button>
            </div>
            <div className="d-lg-block d-none">
              <img src="/images/creatives/service-text-side-img.png" alt="side"  className="img-fluid" style={{height:"100%"}}/>
            </div>
          </div>
        </div>
        
       
      </div>
      </div>
  </div>
</div>
  )
}

export default ServiceText