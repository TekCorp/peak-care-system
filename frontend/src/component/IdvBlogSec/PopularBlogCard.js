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
    <div className='popular-card d-flex flex-column flex-xl-row gap-3 align-items-center my-5' onClick={()=>{redirectionFunction(anchor)}}>
        <img src={img} className='popular-blog-img' alt='blog-img'/>
        <div className='blog-details text-center text-xl-start'>
            <h5 className='card-title'>{breifTitle}</h5>

        </div>
    </div>
  )
}

export default PopularBlogCard