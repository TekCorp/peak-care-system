import React, { useState } from 'react'
import "./ServicesCard.css"
import { useNavigate } from 'react-router-dom'

const serviceCard = [
    {
        img:"/images/creatives/service-page-card-1.png",
        heading:"Replacement Products",
        para:"We provide high-quality replacement furnaces, air conditioning units and other products to ensure your home or busines",
        link:"/"
    },
    {
        img:"/images/creatives/service-page-card-2.png",
        heading:"Builders",
        para:"We provide high-quality replacement furnaces, air conditioning units and other products to ensure your home or busines",
        link:"/"
    },
    {
        img:"/images/creatives/service-page-card-3.png",
        heading:"Indoor Air Quality",
        para:"We provide high-quality replacement furnaces, air conditioning units and other products to ensure your home or busines",
        link:"/"
    },
    {
        img:"/images/creatives/service-page-card-4.png",
        heading:"24/7 Emergency Services",
        para:"We provide high-quality replacement furnaces, air conditioning units and other products to ensure your home or busines",
        link:"/"
    },
    {
        img:"/images/creatives/service-page-card-5.png",
        heading:"Maintenance Programs",
        para:"We provide high-quality replacement furnaces, air conditioning units and other products to ensure your home or busines",
        link:"/"
    },
    {
        img:"/images/creatives/service-page-card-6.png",
        heading:"Custom Ductwork",
        para:"We provide high-quality replacement furnaces, air conditioning units and other products to ensure your home or busines",
        link:"/"
    },
   
]

const newServiceCard = [
    {
        img:"/images/icons/s-c-1.png",
        link:"/services/heating-systems"
    },
    {
        img:"/images/icons/s-c-2.png",
        link:"/services/refrigation"
    },
    {
        img:"/images/icons/s-c-3.png",
        link:"/services/design-build"
    },
    {
        img:"/images/icons/s-c-4.png",
        link:"/services/air-conditioning"
    },
    {
        img:"/images/icons/s-c-5.png",
        link:"/services/gas-lines"
    },
    {
        img:"/images/icons/s-c-6.png",
        link:"/services/sheet-metal"
    },
    {
        img:"/images/icons/s-c-7.png",
        link:"/services/fire-places"
    },
    {
        img:"/images/icons/s-c-8.png",
        link:"/services/hydronics"
    },
]

const newServiceCardHovered = [
    {
        img:"/images/icons/s-h-1.png",
    },
    {
        img:"/images/icons/s-h-2.png",
    },
    {
        img:"/images/icons/s-h-3.png",
    },
    {
        img:"/images/icons/s-h-4.png",
    },
    {
        img:"/images/icons/s-h-5.png",
    },
    {
        img:"/images/icons/s-h-6.png",
    },
    {
        img:"/images/icons/s-h-7.png",
    },
    {
        img:"/images/icons/s-h-8.png",
    },
]

function ServicesCard() {
    const navigate = useNavigate()
  return (
    <div className='ServicesCard-container standard-padding-space mt-5'>
        <div className='container'>
            <div className='row'>
                {
                    newServiceCard.map((ele,ind)=>{
                        return(<ServiceCardHover ind={ind} ele={ele}/>)
                    })
                }
                {/* {
                    serviceCard.map((ele)=>{
                        return(
                            <div className='col-lg-4'>
                            <div className='service-card-container'>
                                <div className='card-top' style={{backgroundImage:`url(${ele.img})`}}></div>
                                    <div className='service-card px-5 py-2'>
                                        <h4 className='title '>{ele.heading}</h4>
                                        <p className='body-paragraph mb-2'>{ele.para}</p>
                                        <p className='anchor' onClick={()=>{navigate(ele.link)}}>Read More <img src='/images/icons/arrow-right.png' alt='arrow icon' /></p>
                                    </div>
                                <div className='card-bottom' style={{backgroundImage:`url(${ele.img})`}}></div>
                            </div>
                        </div>
                        )
                    })
                } */}
               
            </div>
        </div>
    </div>
  )
}

export default ServicesCard


const ServiceCardHover = ({ ind, ele }) => {
    const navigate = useNavigate();
    return (
        <div 
            className="col-lg-3 p-0 " 
            onClick={() => navigate(ele.link)}
        >
            <div className='service-card-new'>
                <img src={ele.img} alt="" className="img-fluid main-img" />
                <img src={newServiceCardHovered[ind].img} alt="" className="img-fluid hover-img" />
            </div>
        </div>
    );
};

