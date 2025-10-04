
function TestimonialCard(props) {
 
  return (
    <div className="testimonial-card">
        <img src={props.clientImg} alt="reviewer" className="img-fluid person-img mx-auto" />
        <div className="profile-info d-flex flex-column p-3 pt-5">
            <p className="color-white text-center">{props.clientReview}</p>
            <div className="profile-info-text">
              <img src="/images/icons/testimonials-stars.png" alt="stars icon"/>
              <h5 className="color-white">{props.clientName}</h5>
            </div>
        </div>
         
    </div>
  )
}

export default TestimonialCard