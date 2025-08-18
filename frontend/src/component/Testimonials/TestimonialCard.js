
function TestimonialCard(props) {
 
  return (
    <div className="testimonial-card ">
        <div className="testimonial-card-info pb-2">
          <div className="profile-info d-flex flex-column align-items-lg-start align-items-center justify-content-between gap-2 ">
              
              <div className="d-flex align-items-center gap-2">
                <img src="/images/icons/user-img.png" alt="" className="user-img"/>
                <div>
                  <h5 className="sub-heading mb-0" style={{color:"#d63346",fontWeight:"800"}}>{props.clientName}</h5>
                  <p className="body-paragraph text-lg-start text-center mb-0" style={{color:'silver'}}>{props.rank}</p>
                </div>
              </div>
              <img src="/images/icons/testimonial-stars.png" alt="star icons" className="img-fluid"/>
              <p className="body-paragraph text-lg-start text-center mb-0" style={{color:'white'}}>{props.clientReview}</p>
              
              
              
          </div>
        </div>
    </div>
  )
}

export default TestimonialCard