import { useState } from "react";
import "./Footer.css"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"
import {Spinner } from "react-bootstrap"

const areasList1 = [
    "Toronto",
    "Mississauga",
    "Hamilton",
    "Brampton",
    "Oakville",
    "Burlington",
]

const areasList2 = [
    "Milton",
    "Georgetown",
    "Guelph",
    "Cambridge",
    "Kitchener",
    "Waterloo",
]

function Footer({
    newsletterSection=true,
    newsLetterBg=true,
    footerDark=true,
}) {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
  
    const formSubmitHandler = (e) => {
      e.preventDefault();
      setLoading(true);
      axios
        .post("/send-newsletter", {
          email: email,
          formType: "Newsletter",
        })
        .then((response) => {
          if (response.data.msg === "success") {
            setError(false);
            setSuccess("Newsletter Subscribed Successfully!");
            setLoading(false);
            setEmail("");
          } else if (response.data.msg === "fail") {
            setSuccess(false);
            setError("Email failed to send, try again by reloading the page.");
            setLoading(false);
            setEmail("");
          }
          })
        }
  return (
    <>
    {newsletterSection && 
        <div className="news-letter-container my-5 py-5">
                <div className={`container py-4 px-4 ${newsLetterBg?"NL-bg":''} `}>
                    <div className="form-container row gy-2 py-4 ">
                        <div className="col-lg-6 mt-0">
                            <div 
                                className="text-container text-center text-lg-start d-flex flex-column align-items-lg-start align-items-center gap-3"
                            >
                                <h3 className="body-heading " style={{color:`${newsLetterBg?"":"black"}`}}>
                                Subscribe
                                </h3>
                            <p className="body-paragraph" >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center mx-auto">
                            <form className='inp-container d-flex align-items-center justify-content-between' onSubmit={formSubmitHandler}>
                                <input 
                                    type='text' 
                                    placeholder='Enter your Email...'  
                                    value={email}
                                    maxLength="36"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className='inp-btn d-flex align-items-center gap-2 '>
                                    <img src="/images/icons/btn-arow.png" className="bell-icon mb-0" alt="icon" loading='lazy'/>
                                    {loading ? (
                                        <Spinner
                                        animation="border"
                                        role="status"
                                        style={{ color: "white", width: "15px", height: "15px", marginLeft: "10px" }}
                                        />
                                    ) : (
                                        success ? (
                                        <div >
                                            {setLoading(false)}
                                            {alert(success)}
                                            {setSuccess(false)}
                                        </div>
                                        ) : (
                                        error && (
                                            <div>
                                            {setLoading(false)}
                                            {alert(error)}
                                            {setError(false)}
                                            </div>
                                        )
                                        )
                                    )}
                                </button>
                            </form>
                        </div>
                    
                    
                    </div>
                </div>
        </div>
    }
    
    <div className={`footer-container ${footerDark?"dark-bg":""}`}>
        <div className="container px-0">
        <div className="form container">
        
        </div>
        
        <div className="upper-newsletter-container container-fluid mx-auto  pt-5" >

            <div className="row d-flex align-items-start gy-5">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="text-container pe-lg-5 pe-0">
                        <img  src="/images/icons/footer-nav-logo.png" alt="brand icon" className="img-fluid brand-logo mb-3" onClick={()=>{navigate("/")}} style={{cursor:"pointer"}} loading='lazy'/>
                        <div className="text-content">
                            <p className="body-paragraph my-3" style={{color:"white"}}>Laser Therapy is a recognized practice covered under most physiotherapy benefit plans.</p>
                        </div>
                        <div className="social-link d-flex align-items-center justify-content-lg-start justify-content-center gap-4 pt-2">
                           
                            <a href="#" target="blank" rel="noopener noreferrer">
                            <img src="/images/icons/linked-icon.png" alt="icon" className="social-icons" loading='lazy'/>
                            </a>
                            <a href="#" target="blank" rel="noopener noreferrer">
                                <img src="/images/icons/fb-icon.png" alt="icon" className="social-icons" loading='lazy'/>
                            </a>
                            <a href="#" target="blank" rel="noopener noreferrer">
                                <img src="/images/icons/insta-icon.png" alt="icon" className="social-icons" loading='lazy'/>
                            </a>
                      
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 pt-lg-4 pt-0">
                    <div className="page-links d-flex flex-md-row gap-3 flex-column align-items-md-start align-items-center text-center justify-content-md-evenly justify-content-center">
                        <div className="text-md-start text-center d-flex flex-column gap-3">
                            <h3 className="footer-title color-light font-mons">Service Area:</h3>
                            {/* <Link to={"/"} className="anchor" exact activeClassName="active">
                                Home
                            </Link>
                    
                            <Link to={"/about"} className="anchor" exact activeClassName="active">
                            About
                            </Link>
                            
                            <Link to={"/blogs"} className="anchor" exact activeClassName="active">
                            Blogs
                            </Link> 
                            <Link to={"/"} className="anchor" exact activeClassName="active">
                            Privacy Policy
                            </Link>  */}

                            <ul className="ps-3">
                            {
                                areasList1.map((ele)=>{
                                    return(
                                        <li className="mb-2">{ele}</li>
                                    )
                                })
                            }
                            </ul>
                           
                        </div>
                        <div className="text-md-start text-center d-flex flex-column  gap-3">
                            <h3 className="footer-title color-light d-lg-block d-none font-mons mt-0 mt-lg-0 pb-lg-4 pb-0"> </h3>
                            {/* <Link to={"/contact"} className="anchor" exact activeClassName="active">
                            Contact
                            </Link> 
                            <Link to={"/shop"} className="anchor" exact activeClassName="active">
                            Shop
                            </Link> 
                            <Link to={"/track-order"} className="anchor" exact activeClassName="active">
                            Track Order
                            </Link> 
                            <Link to={"/user-signin"} className="anchor" exact activeClassName="active">
                            SignIn
                            </Link>  */}
                             <ul className="ps-3">
                            {
                                areasList2.map((ele)=>{
                                    return(
                                        <li className="mb-2">{ele}</li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-12 pt-lg-4 pt-0">
                    <div className="info-container">
                        <h3 className="footer-title color-light font-mons mb-4 text-center text-lg-start">Contact</h3>
                        <ul className="ps-3 d-flex flex-column align-items-center align-items-lg-start">
                            <li className="mb-2"><a style={{color:"white",textDecoration:"none"}} href="mailto:info@mobilelasertherapy.ca">info@mobilelasertherapy.ca</a></li>
                            <li className="mb-2"><a style={{color:"white",textDecoration:"none"}} href="tel:647-367-0067">647-367-0067</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            
           
        </div>
        </div>
        {/* div for border lining */}
        <div className="my-5"></div>

        <div className="line-seprator"></div>
            <div className="lower-container container flex-column gap-1 flex-md-row justify-content-md-between justify-content-center pb-3">
                <p className="mb-0" style={{color:"white"}}>Made With ❤️ By <a href="https://www.creativesquad.ca" target="blank" style={{color:"white"}}>Creative Squad </a></p>
                <p className="mb-0" style={{color:"white"}}>© 2025 | Mobile Laser Therapy | All rights reserved</p>
            </div>
        
    </div>
    </>
  )
}

export default Footer