import React,{useEffect,useState} from "react";
import "./HeroBannerDark.css"
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const HeroBannerDark = ({
  Heading,
  subHeading,
  spanHeading="",
  Paragraph,
  btnText,
  bgVideo=false,
  btn=false,
  btnRef="/",
  socialLinks=false,
  serviceForm=false,
  bgEffect=false,
  heightAuto=false,
  smallHeading=false,
  sideLinks=true,
  bottomSection=true,
  paddingBottom=true
}) => {
  const navigate = useNavigate()
  const paragraphs = Paragraph.split('\n').map((paragraph, index) => <p key={index} className='hero-paragraph hero-para color-dark'>{paragraph}</p>);
  return (
    <>
    <div
      className={`common_hero_section_dark  ${heightAuto && "h-cus-auto"} mb-5`}
      style={{ background:"transparent" ,paddingBottom:`${paddingBottom ? "300px":"50px"}`}}
        
    >
      <div className={`${bgEffect && "bg-effect"} h-100`}>
       {/* { bgVideo && <video autoPlay loop muted>
        <source src="./images/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>} */}

      <div className="hero-container h-100  px-0"
      
      >
     <div className="wrapper d-flex flex-column pt-xl-3 pt-0">

      <Header
        darkBg={true}
      />
      <div className="container">

      <div 
        className=" d-flex align-items-center justify-content-center py-5 my-auto "
        >

        <div className="d-flex flex-column flex-md-row gap-3 gy-2 w-100 align-items-center mt-5 justify-content-center">
          <div
            className={
              serviceForm
                ? "col-md-6 "
                : "col-12 hero_content_wrapper px-3 w-100"
            }
          >
            <div className="hero-text-content w-100 text-center">
            {subHeading && <div className="d-flex align-items-center gap-3 justify-content-center">
              <div style={{borderBottom:'1px solid black',width:"15%",height:"0"}}></div>
              <h5 className="sub-heading color-dark mb-0">{subHeading}</h5>
              <div style={{borderBottom:'1px solid black',width:"15%",height:"0"}}></div>
            </div>}
            <h1 className={`hero-section-heading my-4 px-2 color-dark ${smallHeading && "hero-section-heading-small"}`}
              // style={{color:"#1E1E1E",fontSize: "30px",fontWeight: 400}}
            >
              {Heading}
              <span style={{textTransform:"none"}}>{spanHeading}</span>
            </h1>
            <p className="hero-paragraph-sec px-2 color-dark mx-auto" >{paragraphs}</p>
            {btn && <button className="genral-btn mt-4" onClick={()=>{navigate(btnRef)}}>{btnText}</button>}
            {socialLinks && (
              <div className="social-links py-2">
                <div className="first-row d-flex gap-3">
                  <div className="link-container d-flex align-items-center gap-1">
                    <img src="/images/icons/social-phone.svg" alt='icon'/>
                    <p className="m-0">905-841-9879</p>
                  </div>
                  
                </div>
                <div className="link-container d-flex align-items-center gap-1">
                  <img src="/images/icons/social-mail.svg" alt='icon'/>
                  <p className="m-0">info@themeadowsequine.com</p>
                </div>
                <div className="link-container d-flex align-items-center gap-1">
                  <img src="/images/icons/social-loc.svg" alt='icon'/>
                  <p className="m-0">2495 Lloydtown Road, King City On L7B 1A3</p>
                </div>
                
              </div>
            )}
          </div>
          </div>
          {serviceForm && (
            <div className="col-md-6">
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d734757.2352412842!2d-79.553581!3d43.997719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad720aab86b87%3A0xa891f04d5c3291d2!2sThe%20Meadows%20Equine!5e0!3m2!1sen!2sus!4v1706005388621!5m2!1sen!2sus" className="contactMap" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          )}
        </div>
        
      </div>
      </div>
      </div>
      </div>
      
      </div>
    </div>
    {
      bottomSection &&
        <div style={{background:"black"}} className="hero-bottom-section">
          <div className="left-gradient-upper">
          <div className="right-gradient-bottom">
          <div className="container " >
                <div className="move-img">
                  <img src="/images/creatives/about-hero-img.png" className="w-100 main-img img-fluid" alt='icon'/>
                </div>
          </div>
          </div>
        </div>
      </div>
    }
    </>
  );
};

export default HeroBannerDark; 