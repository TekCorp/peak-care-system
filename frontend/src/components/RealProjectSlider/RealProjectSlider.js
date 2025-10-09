import React from 'react'
import "./RealProjectSlider.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useLanguageContent } from '../Utils/MultilingialContent';

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
  const GetLanguageContent = useLanguageContent()
  return (
    <div className='RealProjectSlider-container standard-padding-space'>
        <div className='container'>

            <div className='text-container text-center pb-4'>
                <h3 className='secondary-body-heading real-project-heading'>{GetLanguageContent?.home?.realProject?.title}</h3>
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
                GetLanguageContent?.home?.realProject?.cardData.map((project,ind)=>{
                    return(
                        <SwiperSlide className="d-flex ">
                          <div className='project-card d-flex align-items-center justify-content-center' style={{backgroundImage:`url(${projectsCards[ind]?.img})`}}>
                            <div className='content-box py-2 px-2 mx-auto text-center'>
                              <h3 className='font-DM-sans title-font color-white mb-0'>{project?.title} </h3>
                              <p className=' body-paragraph color-white mb-0'>{project?.subTitle} </p>
                            </div>
                          </div>
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