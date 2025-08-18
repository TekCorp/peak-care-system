import React from 'react'
import "./OurService.css"

const cardDetails = [
    {
        img:"/images/icons/home-services-story.png",
        heading:"Our Story",
        para:"Learn about the visionary behind the brand."
    },
    {
        img:"/images/icons/home-services.png",
        heading:"Services",
        para:"Explore our tailored solutions for young athletes."
    },
    {
        img:"/images/icons/home-services-member.png",
        heading:"Membership Levels",
        para:"Find the right plan for your family."
    },
]

function OurService() {
  return (
    <div className='OurService-container standard-padding-space'>
        <div className='container py-4'>
            <div className='row gy-lg-0 gy-3'>
                {
                    cardDetails.map((card)=>{
                        return(
                        <div className='col-lg-4'>
                            <div className='services-card d-flex align-items-center justify-content-center gap-3'>
                                <img src={card.img} className="img-fluid" alt='story icon'/>
                                <div className='card-content'>
                                    <h3 className='body-heading' style={{color:"white",fontSize:"27px",fontWeight:"800"}}>{card.heading}</h3>
                                    <p className='body-paragrpah mb-0' style={{color:"white"}}>{card.para}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default OurService