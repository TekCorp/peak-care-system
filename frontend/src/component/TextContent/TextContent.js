import React from 'react'
import "./TextContent.css"
import { useNavigate } from 'react-router-dom';
import DropDownContainer from './DropDownContainer';

function TextContent({
  heading,
  headingH1=false,
  nextLineHeading="",
  subHeading="",
  subPara="",
  subHeadingLine=true,
  postSubHeading="",
  postHeading="",
  postContent="",
  content,
  btn=false,
  btnRefTel=false,
  btnText,
  btnRef="/",
  shiftRow=false,
  img,
  reviewContent= false,
  review,
  reviewUser,
  userImg,
  mobileTextCenter=true,
  btnImg=false,
  dropDown=false,
  dropDownList=[],
  bulletList=false,
  bulletListData=[],
  customList=false,
  customListData=[],
  btnEnd=false,
  fontDark=true,
  lineBetween=false,
  txtAnchor=false,
  experienseTxt=false
}) {
  const paragraphs = content.split('\n').map((paragraph, index) => <p key={index} className={`body-paragraph my-1 mb-3 ${fontDark ? "color-dark":"color-light"}`}>{paragraph}</p>);
  const navigate = useNavigate()
  return (
    <div 
      className='text-content-section  standard-padding-space '
      style={{background:`${fontDark ? "transparent":"black"}`}}
    >
  
      <div className={`${!fontDark && "right-gradient-bottom "} `}>
      <div className={`${!fontDark && "left-gradient-upper "} py-4 `}>
      <div className={`container my-4 my-xl-4 `}>
        <div className={`row d-flex ${shiftRow && "flex-row-reverse"} align-items-center gy-2`} >
          <div className={`col-lg-6 p-2 px-3 px-lg-2 d-flex align-items-center justify-content-center ${shiftRow ? "justify-content-lg-end" : "justify-content-lg-start"}`}>
            <img src={img} className='img-fluid' alt='content' loading='lazy'/>
          </div>
          <div className='col-lg-6 '>
            <div className={`text-content ${mobileTextCenter && "text-center text-lg-start"} px-3 ${lineBetween && "leftBorderedContainer ps-lg-4 ps-0"}`}>
              {subHeading && <p className={`sub-heading mb-0 justify-content-lg-start justify-content-center d-flex aling-items-center gap-lg-4 gap-3 ${fontDark ? "color-dark":"color-light"}`}>{subHeadingLine &&<div style={{height:"0",width:"50px",borderTop:`1px solid ${fontDark ? "#252525":"white"}`,margin:"auto 0" }}></div>}{subHeading}</p>}
              {subPara && 
                <div className='d-flex align-items-center gap-3'>
                  <img src="/images/icons/post-sub-para-icon.png" alt='arrow icon' style={{height:"20px"}}/>
                  <p className='body-paragraph mb-0'>{subPara}</p> 
                </div>
              }
              {/* <div className='paddLeft'> */}
              <div className='paddLef'>
                <div className='d-flex flex-lg-row flex-column align-items-center gap-4'>
                {
                  headingH1 ?
                  <h1 className={`body-heading my-4 `}>{heading}<br></br>{nextLineHeading && nextLineHeading}</h1>
                    :
                    <>
                      {
                        heading?
                        <h3 className={`body-heading my-4 `}>{heading}<br></br>{nextLineHeading && nextLineHeading}</h3>
                        :
                        <></>
                      }
                    </>
                }
                 {
                  experienseTxt &&
                  <div className='vertical-text mb-4'>
                    <h3 className='text'><span className='number'>{experienseTxt}+</span>Experience</h3>
                  </div>
                }
                </div>
                <p className={`sub-heading mb-3 mb-xxl-4 ${fontDark ? "color-dark":"color-light"}`}>{postSubHeading}</p>
                <div className={`${fontDark ? "color-dark":"color-light"} `}>{paragraphs}</div>
                {postHeading && <h3 className={`body-heading mt-3 my-xl-3 mt-xl-4 ${fontDark ? "color-dark":"color-light"}`}>{postHeading}</h3>}
                {postContent && <p className={`body-paragraph my-1 mb-3 ${fontDark ? "color-dark":"color-light"}`}>{postContent}</p>}
                
                <div className={`d-flex justify-content-between ${content?"align-items-end ":"align-items-start flex-column  "}`}>
               
                {
                  btnRefTel ?
                  (
                    <a href='tel:' style={{textDecoration:"none"}}>
                      {btn && <button className={`${fontDark ? "genral-btn":"genral-btn"}  ${content?"mt-4 mt-xl-5":"mt-1"} d-flex align-items-center gap-2 mx-auto mx-lg-0`}>{btnText}</button>}
                    </a>
                  ):
                  (
                    <>
                    {
                      txtAnchor?

                       <p className={`anchor-text mt-4 d-flex align-items-center gap-2 mx-auto mx-lg-0`} onClick={()=>{navigate(btnRef)}}>{btnText}</p>
                      :
                      <>
                        {btn && <button className={`${fontDark ? "genral-btn":"genral-btn"} ${content?"mt-4 mt-xl-5":"mt-1"} d-flex align-items-center gap-2 mx-auto mx-lg-0`} onClick={()=>{navigate(btnRef)}}>{btnText}</button>}
                      </>
                    }
                    </>
                  )
                }
                
                </div>
               
              </div>
              {
                reviewContent &&
                <>
                  <div className='line-seprator my-2 mt-4'></div>
                  <div className='d-flex align-items-start gap-3 pt-4'>
                    <img src={userImg} alt='user' loading='lazy'/>
                    <div className='my-3'>
                      <p className='body-paragraph mb-1'>{review}</p>
                      <p className='body-paragraph mb-0'>{reviewUser}</p>
                    </div>
                  </div>
                  <button className='text-btn mt-3' onClick={()=>{navigate("/about")}}>ABOUT US</button>
                </>
              }
              {
                dropDown &&
                <>
                  {
                    dropDownList.map((ele,ind)=>{
                      return(
                        <>
                        <DropDownContainer
                          title={ele.title}
                          content={ele.content}
                        />
                        {ind < dropDownList.length-1 ? <div className='line-seprator'></div>:<></>}
                        </>
                      )
                    })
                  }
                </>
              }
              {
                bulletList &&
                <ul className='bulletList-container'>
                  {
                    bulletListData.map((ele,ind)=>{
                      return(
                          <li><p className='body-paragraph'>{ele}</p></li>
                      )
                    })
                  }
                </ul>
              }
              {
                customList &&
                <ul className='bulletList-container'>
                  {
                    customListData.map((ele,ind)=>{
                      return(
                          <li ><div dangerouslySetInnerHTML={{__html : ele}}></div></li>
                      )
                    })
                  }
                </ul>
              }
              {
                btnEnd &&
                (
                  <a href='tel:905-841-9879' style={{textDecoration:"none"}}>
                    <button className={`${fontDark ? "genral-btn-light":"genral-btn"} mt-4 d-flex align-items-center gap-2 mx-auto mx-lg-0`}>{btnText}</button>
                  </a>
                )

              }
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

      
    </div>
  )
}

export default TextContent