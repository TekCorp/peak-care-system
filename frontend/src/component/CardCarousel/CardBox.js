import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength - 3) + '...';
  }
}


function CardBox({
  service="",
  title="",
  link="/"
}) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()
  // const breifTitle = truncateText(title,50)
  return (
    <div >
      <div className="servicecard" onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}} onClick={()=>{navigate(link)}}>
      <div className={`${hovered?"red-overlay" : "no-overlay" } red-overlay d-flex align-items-end justify-content-center`}>
        <div className="title-container mb-5">
          <h6 className="mb-lg-0 mb-md-4 mb-4">{title}</h6>
        </div>
      </div>
      <img src={service} alt="service card" className="img-fluid w-100" />
    </div>
      <div className={`round-btn ${hovered?"btn-hovered" : "" }`} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}  onClick={()=>{navigate(link)}}> 
        <img src="/images/icons/service-card-arrow.png" alt="arrow icon" className="text-center"/>
      </div>
    </div>
  )
}

export default CardBox