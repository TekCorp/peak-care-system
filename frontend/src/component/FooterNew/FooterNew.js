import React from 'react'
import "./FooterNew.css"
import { NavLink, useNavigate } from 'react-router-dom'

function FooterNew() {
    const navigate = useNavigate()
  return (
    <div className='FooterNew-container standard-padding-space pb-0'>

        <div className='px-lg-0 px-2'>
            <div className='container info-section py-2 px-2 mb-5'>
                <div className='row gy-3'>
                    <div className='col-lg-4 d-flex align-items-center justify-content-center'>
                        <img src='/images/icons/footer-phone.png' alt='phone icon' className='img-fluid'/>
                        <div className='d-flex flex-column'>
                            <a className='body-paragraph' style={{color:"white"}} href='tel:289-878-5443'>289-878-5443</a>
                        </div>
                    </div>
                    <div className='col-lg-4 d-flex align-items-center justify-content-center'>
                        <img src='/images/icons/footer-mail.png' alt='mail icon' className='img-fluid'/>
                        <div className='d-flex flex-column'>
                            <a className='body-paragraph' style={{color:"white"}} href='mailto:info@thermalgroup.ca'>info@thermalgroup.ca</a>
                        </div>
                    </div>
                    <div className='col-lg-4 d-flex align-items-center justify-content-lg-center justify-content-center ps-lg-0 ps-4'>
                        <img src='/images/icons/footer-location.png' alt='navigation icon' className='img-fluid'/>
                        <div className=''>
                            {/* <p className='body-paragraph mb-0' style={{color:"white"}}>547 Main St E Unit 22 <br></br>Milton, ON L9T 3J2</p> */}
                            <p className='body-paragraph mb-0' style={{color:"white"}}>PO Box 544 Milton,<br></br> Ont. L9T 4Z1</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div className='container'>
            <div className='row gy-lg-0 gy-4'>
                <div className='col-lg-6  text-lg-start text-center pe-lg-5 pe-2'>
                    <img src='/images/icons/footer-logo-new.png' alt='logo' className='img-fluid footer-logo' onClick={()=>{navigate("/")}}/>
                    {/* <p className='body-paragraph mt-4' style={{color:'white'}}>Upgrading existing systems with newer more About Sign Up to get updates & news about energy efficient models to reduce energy consumption and lower utility</p> */}
                    <div className='d-flex align-items-center justify-content-lg-start justify-content-center gap-3 social-icons pt-4'>
                    <img src='/images/icons/footer-fb-icon.png' alt='facebook'/>
                    <img src='/images/icons/footer-insta-icon.png' alt='instagram'/>
                    {/* <img src='/images/icons/footer-x-icon.png' alt='facebook'/> */}
                </div>
                </div>

                <div className='col-lg-3 text-lg-start text-center'>
                    <h4 className='mb-4 mx-lg-0 mx-auto' style={{color:"white",fontWeight:"bold",width:"fit-content"}}>Quick links
                        <div className='w-100 d-flex align-items-center justify-content-between mt-2'>
                            <div style={{width:"55%",height:"0",border:"3px solid #D63346",borderRadius:"20px"}}></div>
                            <div style={{width:"30%",height:"0",border:"3px solid white",borderRadius:"20px"}}></div>
                            <div style={{width:"10%",height:"0",border:"3px solid white",borderRadius:"20px"}}></div>
                        </div>
                    </h4>
                    <div className='d-flex flex-column gap-3'>
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/"} className="anchor" exact activeClassName="active">
                                Home
                            </NavLink>
                        </div>
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/about"} className="anchor" exact activeClassName="active">
                                About
                            </NavLink>
                        </div>
                       
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/services"} className="anchor" exact activeClassName="active">
                                Services
                            </NavLink>
                        </div>
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/blog"} className="anchor" exact activeClassName="active">
                                Blog
                            </NavLink>
                        </div>
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/contact"} className="anchor" exact activeClassName="active">
                                Contact
                            </NavLink>
                        </div>
                        
                    </div>
                </div>


                <div className='col-lg-3 text-lg-start text-center'>
                    <h4 className='mb-4 mx-lg-0 mx-auto' style={{color:"white",fontWeight:"bold",width:"fit-content"}}>Services
                        <div className='w-100 d-flex align-items-center justify-content-between mt-2'>
                            <div style={{width:"55%",height:"0",border:"3px solid #D63346",borderRadius:"20px"}}></div>
                            <div style={{width:"30%",height:"0",border:"3px solid white",borderRadius:"20px"}}></div>
                            <div style={{width:"10%",height:"0",border:"3px solid white",borderRadius:"20px"}}></div>
                        </div>
                    </h4>
                    <div className='d-flex flex-column gap-3'>
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/services/heating-systems"} className="anchor" exact activeClassName="active">
                            Heating Systems
                            </NavLink>
                        </div>
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/services/refrigation"} className="anchor" exact activeClassName="active">
                            Refrigation
                            </NavLink>
                        </div>
                       
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/services/design-build"} className="anchor" exact activeClassName="active">
                            Design Build
                            </NavLink>
                        </div>
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/services/air-conditioning"} className="anchor" exact activeClassName="active">
                                Air Conditioning
                            </NavLink>
                        </div>
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"//services/gas-lines"} className="anchor" exact activeClassName="active">
                            Gas Lines
                            </NavLink>
                        </div>
                        {/* <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/services/sheet-metal"} className="anchor" exact activeClassName="active">
                            Sheet Metal
                            </NavLink>
                        </div>
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/services/fire-places"} className="anchor" exact activeClassName="active">
                            Fire Places
                            </NavLink>
                        </div>
                        <div className='mb-0' style={{color:"white"}}>
                            <img src='/images/icons/genral-btn-arrow-w.png' alt='arrow' className='me-2'/>
                            <NavLink to={"/services/hydronics"} className="anchor" exact activeClassName="active">
                            Hydronics
                            </NavLink>
                        </div> */}
                        
                    </div>
                </div>


{/* NEWSletter Section */}
                {/* <div className='col-lg-3 text-lg-start text-center'>
                    <h4 className='mb-4 mx-lg-0 mx-auto' style={{color:"white",fontWeight:"bold",width:"fit-content"}}>Newsletter
                        <div className='w-100 d-flex align-items-center justify-content-between mt-2'>
                            <div style={{width:"55%",height:"0",border:"3px solid #D63346",borderRadius:"20px"}}></div>
                            <div style={{width:"30%",height:"0",border:"3px solid white",borderRadius:"20px"}}></div>
                            <div style={{width:"10%",height:"0",border:"3px solid white",borderRadius:"20px"}}></div>
                        </div>
                    </h4>

                    <div className='d-flex flex-column gap-3'>
                        <p className='body-paragraph mb-1' style={{color:'white'}}>Sign Up to get updates & news about</p>
                        <div className=' form-container'>
                            <form className='d-flex flex-column align-items-center gap-3'>
                                <input
                                    type='text'
                                    className='news-letter-inp'
                                    placeholder='Your Email Address'
                                />
                                <button className='genral-btn'>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div> */}

             

               

                <div className='col-12 pt-4'>
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between text-lg-start text-center py-3">
                        <p className="mb-0" style={{color:'white'}}>Made With ❤️ By <a href="https://www.creativesquad.ca" target="blank" style={{color:'white'}}>Creative Squad </a></p>
                        <p className="mb-0" style={{color:'white'}}>© {new Date().getFullYear()} | Thermal Group Service | All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterNew