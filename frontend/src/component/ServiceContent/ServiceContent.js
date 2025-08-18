import React from 'react'
import "./ServiceContent.css"

function ServiceContent({
    img="",
    heading="",
    paraList=[],
    shiftRow=true
}) {
  return (
    <div className='ServiceContent-container py-1 '>
        <div className='container'>
            <div className={`row d-flex ${shiftRow && "flex-lg-row-reverse"} align-items-center gy-2`}>
            <div className={`col-lg-6 p-lg-5 p-4 d-flex align-items-center justify-content-center`}>
                    <img src={img} alt='content thumbnail' className='img-fluid' />
                </div>
                <div className='col-lg-6'>
                    <div className='service-card '>
                        <h4 style={{fontWeight:"600",color:"#65c0c1e6"}} className='text-lg-start text-center mb-3'>{heading}</h4>
                         {
                                paraList.map((ele)=>{
                                    return(<div className='d-flex align-items-center gap-3 mb-3'>
                                        <img src='/images/icons/list-point-light.png' alt='list bullet icon'/>
                                        <p className="text-lg-start text-center mb-0" style={{color:"#6cb4c6"}}>{ele}</p>
                                    </div>)
                                })
                            }
                            
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ServiceContent