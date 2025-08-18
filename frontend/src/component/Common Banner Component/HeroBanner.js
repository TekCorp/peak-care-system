import React,{useEffect,useState} from "react";
import "./HeroBanner.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const HeroBanner = ({
  Heading,
  subHeading,
  spanHeading="",
  nextLineSpanHeading,
  Paragraph,
  btnText,
  bgImg,
  bgVideo=false,
  btn=false,
  btnRef="/",
  socialLinks=false,
  serviceForm=false,
  bgEffect=false,
  heightAuto=false,
  smallHeading=false,
  sideLinks=true
}) => {
  const navigate = useNavigate()
  const paragraphs = Paragraph.split('\n').map((paragraph, index) => <p key={index} className='hero-paragraph mx-auto' style={{width:"80%"}}>{paragraph}</p>);
  return (
    <>
    <div className="container-fluid">
      <div className='row header-container'>
            <div className='col-lg-8 pt-2 ps-lg-5 ps-3'>
                <Header/>
            </div>
            <div className='col-lg-4 d-lg-flex d-none red-bg pt-2 justify-content-center  '>
                <div className='d-flex align-items-center btn-container justify-content-end pe-xxl-5'>
                    <div className='d-flex align-items-center justify-content-lg-start justify-content-center gap-3 social-icons pe-3'>
                        <img src='/images/icons/footer-fb-icon.png' alt='facebook' className='social-icon'/>
                        <img src='/images/icons/footer-insta-icon.png' alt='facebook' className='social-icon'/>
                    </div>
                    <button className='hero-genral-btn'>Emergency Service</button>
                </div>
            </div>
        </div>
        </div>
      <div
        className={`common_hero_section ${bgVideo && "bg-video"} ${heightAuto && "h-cus-auto"} mb-3`}
        style={{ backgroundImage: `url(${bgImg})`}}
          
      >
        <div className={`${bgEffect && "bg-effect"} h-100`}>
        { bgVideo && <video autoPlay loop muted>
          <source src="./images/backgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>}

        <div className="hero-container h-100  px-0"
        
        >
      <div className="wrapper d-flex flex-column pt-xl-0 pt-0">

        <div 
          className=" d-flex align-items-center py-5 my-auto container"
          >

          {sideLinks &&
          
          <div className="d-flex flex-column justify-content-center align-items-center gap-3">
            <h3 className="verticle-text" style={{color:"white"}}>SCROLL</h3>
            <div className="" style={{border:"1.5px solid white", width:"0" , height:"100px" }}></div>
          </div>
          }

          <div className="gy-2 w-100">
            <div
              className={
                serviceForm
                  ? "col-md-6 "
                  : "col-12 hero_content_wrapper px-3 w-100"
              }
            >
              <div className="hero-text-content w-100 text-center">
              <h5 className="hero-sub-heading">{subHeading}</h5>
              <h1 className={`hero-section-heading my-3 ${smallHeading && "hero-section-heading-small"}`} style={{color:"white",textShadow:"none"}}>
                {Heading}
                <span className="" style={{textTransform:"none"}}>{spanHeading}</span>
                {nextLineSpanHeading && <><br/> <span className="" style={{textTransform:"none"}}>{nextLineSpanHeading}</span></>}
              </h1>
              <p className="hero-paragraph mx-auto">{paragraphs}</p>
              {btn && <button className="genral-btn mt-4" onClick={()=>{navigate(btnRef)}}>{btnText}</button>}
              {socialLinks && (
                <div className="social-links py-2">
                  <div className="first-row d-flex gap-3">
                    <div className="link-container d-flex align-items-center gap-1">
                      <img src="/images/icons/social-1.png" alt="icon"/>
                      <p className="m-0">647-948-8750</p>
                    </div>
                    <div className="link-container d-flex align-items-center gap-1">
                      <img src="/images/icons/social-2.png" alt="icon"/>
                      <p className="m-0">416-904-2013</p>
                    </div>
                  </div>
                  <div className="link-container d-flex align-items-center gap-1">
                    <img src="/images/icons/social-3.png" alt="icon"/>
                    <p className="m-0">info@lotusaccounting.ca</p>
                  </div>
                  <div className="link-container d-flex align-items-center gap-1">
                    <img src="/images/icons/social-4.png" alt="icon"/>
                    <p className="m-0">Suite 304-305 Milner Ave. Toronto, ON M1B 3V4</p>
                  </div>
                  <div className="link-container d-flex align-items-center gap-1">
                    <img src="/images/icons/social-5.png" alt="icon"/>
                    <p className="m-0">Mon-Sat 10:00AM to 5:00PM Eastern Time</p>
                  </div>
                </div>
              )}
            </div>
            </div>
            {serviceForm && (
              <div className="col-md-6 pb-5">
                <div className="service-form d-flex flex-column px-5 py-5">
                  <h3 className="body-heading" style={{ color: "black" }}>
                    Let’s get in touch!
                  </h3>
                  <p
                    className="body-paragraph text-start"
                    style={{ color: "black" }}
                  >
                    Let’s discuss your project and find out what we
                  </p>
                  <input type="text" placeholder="Your Full Name" />
                  <input type="text" placeholder="Your Email Address" />
                  <input type="text" placeholder="Phone Number" />
                  <input type="text" placeholder="Your Message" />
                  <button className="service-from-btn  blue-btn">Submit</button>
                </div>
              </div>
            )}
          </div>
          {
          sideLinks &&
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <div className="icon-container d-flex flex-column align-items-center gap-3">
                <a 
                  href="https://www.facebook.com/meadowsequine/"
                  target="blank"  
                >
                  <img src="/images/icons/hero-fb-icon.svg" alt="icon"/>
                </a>

                <a 
                  href="https://www.instagram.com/meadows.equine/"
                  target="blank"  
                >
                  <img src="/images/icons/hero-insta-icon.svg" alt="icon"/>
                </a>
              </div>
              <div className="" style={{border:"1.5px solid white", width:"0" , height:"120px" }}></div>
            </div>
          }
        </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner; 