import React from 'react'
import { useNavigate } from 'react-router-dom'

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength - 3) + '...';
  }
}

function BlogCard({
    content,
    img,
    title,
    anchor,
    redirectionFunction
}) {

  const breifPara = truncateText(content,120)
  const breifTitle = truncateText(title,50)

  return (
    <div className='blog-card mb-5 p-4' >
       
        <img src={img} className='card-img img-fluid' alt='icon'/>
        <h3 className='body-heading text-md-start text-center my-3' style={{fontSize:"20px" , color: "#1e1e1e" , fontWeight: 700}}>{breifTitle}</h3>
        <p className='body-paragraph text-md-start text-center'>{breifPara}</p>
        <div className='bottom mt-4 d-flex flex-column flex-md-row  align-items-center justify-content-between gap-4'>
          <button className='genral-btn d-flex align-items-center gap-2 ' onClick={()=>{redirectionFunction(anchor)}}>READ MORE <img src='/images/icons/genral-btn-arrow.svg' alt='icon'/></button>
          <div className='d-flex gap-3'>
              <div className='d-flex align-items-center gap-1'>
                <img src='/images/icons/blog-card-like.svg' alt='icon'/>
                <p className='body-paragraph mb-0' style={{color:"#575757"}}>25</p>
              </div>
              <div className='d-flex align-items-center gap-1'>
                <img src='/images/icons/blog-card-comment.svg' alt='icon'/>
                <p className='body-paragraph mb-0' style={{color:"#575757"}}>05</p>
              </div>

          </div>
        </div>
       
    </div>
  )
}

export default BlogCard