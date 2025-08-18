import React from 'react'
import "./GenralHero.css"
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'

function GenralHero({
    subheading="",
    postSubheading="",
    heading="",
    para="",
    heroImg=false,
    bgImg="/images/creatives/home-hero.png",
    textCentered=true,
    btn=false,
    btnRef="/",
    emergencyPhoneSection=false,
    postPara="",
    smallHeight=true
}) {

    const navigate = useNavigate()
  return (
    <>
    <div className={`GenralHero-container d-flex flex-column ${smallHeight &&"small-height-hero-section"} `}>
        <div className='container-fluid h-100' >
        <div className='row header-container'>
            <div className='col-lg-8 pt-2 ps-lg-5 ps-3'>
                <Header/>
            </div>
            <div className='col-lg-4 red-bg pt-2 pe-lg-5 pe-3 '>
                <div className='d-flex align-items-center btn-container justify-content-end pe-xxl-5'>
                    <div className='d-flex align-items-center justify-content-lg-start justify-content-center gap-3 social-icons pe-3'>
                        <img src='/images/icons/footer-fb-icon.png' alt='facebook' className='social-icon'/>
                        <img src='/images/icons/footer-insta-icon.png' alt='facebook' className='social-icon'/>
                    </div>
                    <button className='hero-genral-btn' onClick={()=>{window.open("tel:289-878-5443")}}>Emergency Service</button>
                </div>
            </div>
        </div>

        <div className='row ' style={{height:"inherit",position:'relative'}}>
            <div className='col-lg-8 col-9 white-bg d-flex '>

            </div>

            <div className='col-lg-4 col-3 red-bg'>

            </div>

            <div className='hero-img d-flex mt-4' style={{backgroundImage:`url(${bgImg})`}}>
                <div className={`hero-content p-4 ${heroImg?"pb-lg-0 pb-3":""} d-flex align-items-center ${textCentered?"justify-content-center":""}`}>
                    <div className={`${textCentered?"text-center":"text-start"}`}>
                    <p className='sub-heading' style={{color:"white"}}>{subheading}</p>
                    <h3 className='body-heading' style={{color:"white"}}>{heading}</h3>
                    {postSubheading && <p className='sub-heading mb-2' style={{color:"white"}}>{postSubheading}</p>}
                    <p className='body-paragraph' style={{color:"white"}}>{para}</p>
                    {postPara && <p className='body-paragraph' style={{color:"white"}}>{postPara}</p>}
                    {
                        btn &&
                        <button className='genral-btn' onClick={()=>{navigate(btnRef)}}>{btn}</button>
                    }
                    </div>
                    {
                        heroImg && 
                        <img src='/images/creatives/home-hero-person-img.png' alt='person ' className='img-fluid d-lg-block d-none' style={{position:"relative",right:0,width:"30%",bottom:0}}/>
                    }
                    
                </div>
                

            </div>
        
        </div>
        {
            emergencyPhoneSection &&
            <div className='row pb-4' >
                <div className='col-lg-8 px-5 '>
                    <div className='ps-xl-4 ps-lg-3 d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center  text-lg-start text-center'>
                    
                        <img src='/images/icons/post-sub-para-star-icon.png' alt='star icon' className='me-2' />
                        <h3 className='body-heading mt-auto mb-0' style={{color:"black", textShadow:"1px black"}}>Emergency Services</h3>

                        <div className='ms-xl-4 ms-2 d-flex align-items-center'>
                            <img src='/images/icons/contact-page-info-phone-filled.png' alt='phone icon' className='pe-2 ' style={{width:"30px"}} />
                            <a href='tel:289-878-5443'  style={{color:"black", fontWeight:"bold",fontSize:"1.4rem"}} >289-878-5443</a>
                        </div>

                    </div>
                </div>

                <div className='col-lg-4 col-0 red-bg'>
                        
                    
                </div>

            
            </div>

        }
        
        </div>

       
    </div>
    <div style={{height:"80px"}} className=''>

    </div>
    </>
  )
}

export default GenralHero