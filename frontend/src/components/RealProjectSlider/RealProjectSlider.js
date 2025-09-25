import React from 'react'
import "./RealProjectSlider.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const projectsCards = [
    {
        img:"/images/creatives/project-card-img-1.png",
        link:""
    },
    {
        img:"/images/creatives/project-card-img-2.png",
        link:""
    },
    {
        img:"/images/creatives/project-card-img-3.png",
        link:""
    },
    {
        img:"/images/creatives/project-card-img-4.png",
        link:""
    },
   
]

function RealProjectSlider() {
  return (
    <div className='RealProjectSlider-container standard-padding-space'>
        <div className='container'>

            <div className='text-container text-center pb-4'>
                <h3 className='secondary-body-heading'>Real Projects, Real Results</h3>
            </div>

            <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
          }}
          className="mx-auto"
        >
            {
                projectsCards.map((project)=>{
                    return(
                        <SwiperSlide className="d-flex ">
                            <img src={project?.img} alt='project card' className='img-fluid project-card-img' />
                        </SwiperSlide>
                )
                })
            }
           
        </Swiper>
        </div>
    </div>
  )
}

export default RealProjectSlider