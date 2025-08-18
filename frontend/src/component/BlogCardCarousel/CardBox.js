
function CardBox(props) {
  return (
    <div className="card-box">
        <div className="d-flex gap-1 ps-1">

          <h6 className="date-text d-lg-flex d-none">
            <img src="/images/icons/blog-calendar-icon.png" alt="calandar icon" />
            {props.date}
          </h6>
        <img src={props.cardImg} alt="someImage" />
        </div>
        <div className="card-text-content">
           
          <div className="top-links">
            <div className="d-flex align-items-center justify-content-start gap-1">
              <img src="/images/icons/user-icon.png" className="m-0" alt="person icon"/>
              <p className="m-0">Admin</p>
            </div>
            <div className="d-lg-none d-flex align-items-center justify-content-start gap-1">
              <img src="/images/icons/blog-calendar-icon.png" className="m-0" alt="calandar icon"/>
              <p className="m-0">{props.date}</p>
            </div>
          </div>
          <h5>{props.title}</h5>
          <p className="mb-2">{props.content}</p>
          <a onClick={()=>{props.redirection(props.readMoreRef)}} className="read-more-anchor d-flex align-items-center">
            Read More 
            <img src="/images/icons/genral-btn-arrow-w.png" alt="arrow icon" className="mb-0 ms-1"  style={{filter: "invert(1)",width:"18px",height:"10px"}}/>
            </a>
        </div>
    </div>
  )
}

export default CardBox