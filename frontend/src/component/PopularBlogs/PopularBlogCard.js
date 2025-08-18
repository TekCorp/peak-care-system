import React from 'react'

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength - 3) + '...';
  }
}

function PopularBlogCard({
    img,
    title,
    anchor,
    redirectionFunction
}) {
  const breifTitle = truncateText(title,50)
  return (
    <div className='popular-card d-flex flex-column flex-xl-row gap-2 align-items-center mb-4 mt-3 pt-3' onClick={()=>{redirectionFunction(anchor)}}>
        <img src={img} className='popular-blog-img' alt='icon'/>
        <div className='blog-details text-center text-xl-start'>
            <h5 className='card-title font-Lora'>{breifTitle}</h5>
            <p className='card-date mt-3'>
              <img src='/images/icons/popular-blog-logo.png' style={{marginRight:"5px"}} alt='icon'/>
              The Meadows</p>
        </div>
    </div>
  )
}

export default PopularBlogCard