import React from 'react'
import "./HomeFunctionalityTab.css"

const tabAr = [
    {
        img:"/images/icons/home-function-1.png",
        title:"Residential",
        redBg:true
    },
    {
        img:"/images/icons/home-function-2.png",
        title:"Commercial",
        redBg:false
    },
    {
        img:"/images/icons/home-function-3.png",
        title:"Industrial",
        redBg:false
    },
    {
        img:"/images/icons/home-function-4.png",
        title:"Facility Services",
        redBg:false
    },
]

function HomeFunctionalityTab() {
  return (
    <div className='HomeFunctionalityTab-container mt-5 pt-5'>
        <div className='container'>
            <div className='row px-lg-0 px-4'>
                {
                    tabAr.map((ele)=>{
                        return(
                            <div className={`col-lg-3 col-md-6 pt-3 px-3`}>
                                <div className={`tab-bg d-flex flex-column align-items-center justify-content-center text-center px-2`}>
                                    <img src={ele.img} alt='heat icon' className='img-fluid mt-3'/>
                                    <h3 className='tab-title mt-2'>{ele.title}</h3>
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

export default HomeFunctionalityTab