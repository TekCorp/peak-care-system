import React from 'react'
import "./PricingCards.css"

function PricingCards() {

    const pricingCardData = [
        {
            price:150,
            name:"Basic Plan",
            includedPoint:[
                "Refrigerant leak detection & repair",
                "Thermostat replacement",
                "Clean condenser coil"
            ],
            notIncludedPonit:[
                "Air filter replacement",
                "Clean condenser coil",
                "AC fan replacement"
            ]
        },
        {
            price:200,
            name:"Standard Plan",
            includedPoint:[
                "Refrigerant leak detection & repair",
                "Thermostat replacement",
                "Clean condenser coil",
                "Air filter replacement",
            ],
            notIncludedPonit:[
                "Clean condenser coil",
                "AC fan replacement",
            ]
        },
        {
            price:250,
            name:"Premium Plan",
            includedPoint:[
                "Refrigerant leak detection & repair",
                "Thermostat replacement",
                "Clean condenser coil",
                "Air filter replacement",
                "Clean condenser coil",
                "AC fan replacement"
            ],
            notIncludedPonit:[
            ]
        },

    ]

  return (
    <div className='PricingCards-container py-2'>
        <div className='container pb-5'>
            {/* <div className='row gy-lg-0 gy-4'>
                {
                    pricingCardData.map((ele,ind)=>{
                        return(
                            <div className='col-lg-4 '>
                                <div className='ps-3 pb-3' style={{position:"relative"}}>
                                    <div className='card-bg' style={{backgroundColor:`${ind==1?'#D73346':'#A0A0A0'}`}}></div>
                                    <div className='pricing-card px-2 py-4'>
                                        <div className='top-section d-flex align-items-center gap-xxl-5 gap-4'>
                                            <div className='pricing-section' >
                                                <img src='/images/icons/pricing-card-upper.png' alt='upper-serction' className='w-100 ribbion-bar' />
                                                <div className='mx-3 content-section p-2'>
                                                    <h4 className='mb-1'>${ele.price}</h4>
                                                    <h6>Monthly</h6>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className='plan-name-txt'>{ele.name}</h3>
                                                <div style={{width:"100%",height:"0",border:"3px solid #D63346",borderRadius:"20px"}}></div>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-column gap-2 mt-4 ps-3'>
                                            {
                                                ele.includedPoint.map((ponits)=>{
                                                    return(
                                                        <p className='mb-0 color-black'><img src='/images/icons/pricing-card-list.png' className='list-bullet me-1' alt='list'/> {ponits}</p>
                                                    )
                                                })
                                            }
                                            {
                                                ele.notIncludedPonit.map((ponits)=>{
                                                    return(
                                                        <p className='mb-0 '><img src='/images/icons/pricing-card-list.png' className='list-bullet-none me-1' alt='list'/> {ponits}</p>
                                                    )
                                                })
                                            }
                                        </div>

                                        <button className='genral-btn ms-3 mt-4' onClick={()=>{window.open("tel:289-878-5443")}}>Choose Plan</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div> */}

            <div className='red-section p-3 text-center '>
                <h5 className='mb-0'>For industrial and commercial containment, <span onClick={()=>{window.open("tel:289-878-5443")}} style={{cursor:"pointer"}}>contact us.</span></h5>
            </div>
        </div>
    </div>
  )
}

export default PricingCards