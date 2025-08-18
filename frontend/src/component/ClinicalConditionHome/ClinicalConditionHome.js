import React from 'react'
import "./ClinicalConditionHome.css"

function ClinicalConditionHome() {
  return (
    <div className='ClinicalConditionHome-container standard-padding-space'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h3 className='body-heading'>The Clinical Conditions Typically Treated with Laser Therapy</h3>
                    <div className='row mt-5' >
                    {/* <div className='d-flex align-items-start gap-2'> */}
                        <div className='col-lg-6 mb-lg-0 mb-4'>
                            <div className='blue-box box-content'>
                                <h6 style={{color:"white",fontWeight:"600"}} className='text-center'>Sports/Accident Related Injuries/Tissue Trauma</h6>
                                <div className='my-3' style={{height:0,width:"90%",margin:"auto",border:"1px solid white"}}></div>
                                <div className='d-flex align-items-center gap-3 '>
                                    <img src='/images/icons/list-point.png' alt='list bullet icon'/>
                                    <p className='body-paragraph' style={{color:"white",fontSize:"14px"}}>Ligament Sprains</p>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src='/images/icons/list-point.png' alt='list bullet icon'/>
                                    <p className='body-paragraph' style={{color:"white",fontSize:"14px"}}>Tendon Tears</p>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src='/images/icons/list-point.png' alt='list bullet icon'/>
                                    <p className='body-paragraph' style={{color:"white",fontSize:"14px"}}>Muscle Strains</p>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src='/images/icons/list-point.png' alt='list bullet icon'/>
                                    <p className='body-paragraph' style={{color:"white",fontSize:"14px"}}>Tendonitis</p>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src='/images/icons/list-point.png' alt='list bullet icon'/>
                                    <p className='body-paragraph' style={{color:"white",fontSize:"14px"}}>Contusions</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 px-3 d-flex flex-column justify-content-between gap-3 ' style={{height:"auto"}}>
                            <div className='box-content'>
                                <h6 style={{fontWeight:"600",color:"#135790"}} className='text-center'>Sports/Accident Related Injuries/Tissue Trauma</h6>
                            </div>
                            <div className='box-content'>
                                <h6 style={{fontWeight:"600",color:"#135790"}} className='text-center'>Sports/Accident Related Injuries/Tissue Trauma</h6>
                            </div>
                            <div className='box-content mb-lg-0 mb-4'>
                                <h6 style={{fontWeight:"600",color:"#135790"}} className='text-center'>Sports/Accident Related Injuries/Tissue Trauma</h6>
                            </div>
                        </div>
                         
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src='/images/creatives/home-text-2.png' alt='side ' className='img-fluid'/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ClinicalConditionHome