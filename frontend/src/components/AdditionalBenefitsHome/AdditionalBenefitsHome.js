import React from 'react'
import "./AdditionalBenefitsHome.css"

const cardData = [
  {
    heading:"Increase in Property Value",
    para:"Your home gains a higher energy efficiency rating, boosting its market value.",
    img:"/images/creatives/additionalBenifitHomecard-1.png"
  },
  {
    heading:"Soundproofing",
    para:"Walls become less sound-permeable, creating a quieter, more comfortable living space.",
    img:"/images/creatives/additionalBenifitHomecard-2.png"
  },
  {
    heading:"Mould Protection",
    para:"Walls stay dry and warm, preventing mould growth and protecting your health.",
    img:"/images/creatives/additionalBenifitHomecard-3.png"
  },
  {
    heading:"Fire Protection",
    para:"Materials used are non-flammable, enhancing your home's safety.",
    img:"/images/creatives/additionalBenifitHomecard-4.png"
  }
]

function AdditionalBenefitsHome() {
  return (
    <div className='AdditionalBenefitsHome-container container'>
        <div className='main-heading-container mb-lg-2 mb-4'>
            <h4 className='bg-font-heading d-lg-block d-none'>BENEFITS</h4>
            <h3 className='secondary-body-heading ovelaying-heading'>Additional Benefits</h3>
        </div>

        <div className='row gy-4'>
          {
            cardData.map((ele)=>{
              return(
                <div className='col-lg-6 pxx-lg-3'>
                  <div className='card-box d-flex flex-lg-row flex-column gap-2 px-4 px-lg-2'>
                    <img src={ele?.img} alt='card' className='img-fluid card-img mx-lg-0 mx-auto' />
                    <div className='d-flex flex-column justify-content-center text-lg-start text-center'>
                      <h3 className='card-heading'>{ele?.heading}</h3>
                      <p className='body-paragraph'>{ele?.para}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default AdditionalBenefitsHome