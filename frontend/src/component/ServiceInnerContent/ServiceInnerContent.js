import React, { useState } from 'react'
import "./ServiceInnerContent.css"
import { useNavigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const innerService = [
    {
        // img:"/images/creatives/inner-service-thumb-0.png",
        img:"/images/creatives/service-inner-content-1.png",
        title:"Heating Systems",
        link:"/services/heating-systems"
    },
    {
        // img:"/images/creatives/inner-service-thumb-1.png",
        img:"/images/creatives/service-inner-content-2.png",
        title:"Refrigation",
        link:"/services/refrigation"
    },
    {
        // img:"/images/creatives/inner-service-thumb-2.png",
        img:"/images/creatives/service-inner-content-3.png",
        title:"Design Build",
        link:"/services/design-build"
    },
    {
        // img:"/images/creatives/inner-service-thumb-3.png",
        img:"/images/creatives/service-inner-content-4.png",
        title:"Air Conditioning",
        link:"/services/air-conditioning"
    },
    {
        // img:"/images/creatives/inner-service-thumb-4.png",
        img:"/images/creatives/service-inner-content-5.png",
        title:"Gas Lines",
        link:"/services/gas-lines"
    },
    {
        // img:"/images/creatives/inner-service-thumb-5.png",
        img:"/images/creatives/service-inner-content-6.png",
        title:"Sheet Metal",
        link:"/services/sheet-metal"
    },
    {
        // img:"/images/creatives/inner-service-thumb-5.png",
        img:"/images/creatives/service-inner-content-7.png",
        title:"Fire Places",
        link:"/services/fire-places"
    },
    {
        // img:"/images/creatives/inner-service-thumb-5.png",
        img:"/images/creatives/service-inner-content-8.png",
        title:"Hydronics",
        link:"/services/hydronics"
    },
]

function ServiceInnerContent({
    mainImg=""
}) {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("") 
    const [subject,setSubject]= useState("")
    const [message,setMessage]= useState("")

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()


    const formSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
       
        
        console.log({
            name:name,
            subject:subject,
            message:message,
            email:email,
        })

        setTimeout(()=>{
            setLoading(false)
        },3000)
        // axios
        //   .post("/send-assesment", {
        //     email: email,
        //     formType: "Contact Page Form",
        //     assementData:{
        //         firstName:firstName,
        //         lastName:lastName,
        //         title:title,
        //         company:company,
        //         country:country,
        //         zip:zip,
        //         opt:opt=="no"?false:true,
        //         email:email,

        //     }
        //   })
        //   .then((response) => {
        //     if (response.data.msg === "success") {
        //       setError(false);
        //       setSuccess("Register form Submited Successfully!");
        //       setLoading(false);
        //       setEmail("");
        //     } else if (response.data.msg === "fail") {
        //       setSuccess(false);
        //       setError("Failed to send Register form, try again by reloading the page.");
        //       setLoading(false);
        //       setEmail("");
        //     }
        //   });
      };
  return (
    <div className='ServiceInnerContent-container standard-padding-space mt-5'>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='main-content px-3 py-3 text-lg-start text-center'>
                        <img src={mainImg} class='main-img img-fluid' alt="content" />

                        <h3 className='title mt-4'>Reliable Replacement Products</h3>

                        <p className='body-paragraph'>Fast and efficient installation of new air conditioning units. Our certified technicians ensure your system is properly installed for optimal performance Site assessment, equipment delivery air an complete installation.</p>
                        <p className='body-paragraph'>Regular maintenance services to keep your air conditioning system running smoothly and for as efficiently, preventing an breakdowns and extending its lifespan Filter replacement, coil cleaning, refrigerant check, thermostat calibration, and system inspection air conditioning Upgrading your existing air conditioning system.</p>

                       
                        <div className='grey-box d-flex flex-lg-row flex-column justify-content-evenly align-items-lg-end py-4 px-2'>
                            <div className='d-flex flex-column text-center px-2'>
                                <img src='/images/icons/grey-box-icon-1.png' alt='service icon' className='service-box-icon mx-auto mb-2' />
                                <p className='body-paragraph'>Same Day Service From Techs Available 24/7</p>
                            </div>
                            <div className='d-flex flex-column text-center px-2'>
                                <img src='/images/icons/grey-box-icon-2.png' alt='service icon' className='service-box-icon mx-auto mb-2' />
                                <p className='body-paragraph'>Unrivalled Expertise With over 40 Years in Business</p>
                            </div>
                            <div className='d-flex flex-column text-center px-2'>
                                <img src='/images/icons/grey-box-icon-3.png' alt='service icon' className='service-box-icon mx-auto mb-2' />
                                <p className='body-paragraph'>Sensible Rates That Don't Exploit Emergencies</p>
                            </div>
                            <div className='d-flex flex-column text-center px-2'>
                                <img src='/images/icons/grey-box-icon-4.png' alt='service icon' className='service-box-icon mx-auto mb-2' />
                                <p className='body-paragraph'>Full Repair Warranty & Free Equipment Tune-up</p>
                            </div>

                        </div>

                        {/* <div className='row mt-4 gy-lg-0 gy-3'>
                            <div className='col-md-6'>
                                <img src='/images/creatives/service_details_2.png' alt='servicing' className='img-fluid' />
                            </div>
                            <div className='col-md-6'>
                                <img src='/images/creatives/service_details_1.png' alt='servicing' className='img-fluid' />
                            </div>
                        </div> */}

                        <h3 className='title mt-4'>Your Comfort, Our Mission</h3>
                        <p className='body-paragraph'>Upgrading your existing air conditioning system to more energy-efficient models, helping you save on energy bills and reduce your carbon footprint Lubrication of moving parts, electrical connection inspection.</p>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className='links-container px-3 py-3'>
                        <h3 className='title'>Catergories</h3>
                        <div className='mt-4 d-flex flex-column gap-3'>
                            {
                                innerService.map((ele)=>{
                                    return(
                                        <div className='d-flex align-items-center gap-4' >
                                            <img src={ele.img} alt='Builders thumbnail' className='thumbnail'/>
                                            <h5 className="link-title" onClick={()=>{navigate(ele.link)}} >{ele.title}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='form-container mt-4 px-3 py-3'>
                    <h4 style={{fontWeight:"600",color:"black"}} className='text-start mb-3'>Get In Touch</h4>

                        <form className='form-field d-flex flex-column justify-content-between col-lg-12' onSubmit={formSubmitHandler}>
                          
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    maxLength="100"
                                    required
                                    type='text' 
                                    placeholder='Your Name' 
                                />

                            
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    maxLength="100"
                                    required
                                    type='email' 
                                    placeholder='Your Email'
                                />
                               

                          
                                <input
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    maxLength="100"
                                    type='text' 
                                    required
                                    placeholder='Subject' 
                                />

                                <textarea 
                                    placeholder='Write Message....'
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    
                                >

                                </textarea>
                               
                               
                            <button className='genral-btn mt-4' style={{backgroundColor:"black",color:"white",fontSize:"17px"}} type='submit'>Submit

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
    </div>
  )
}

export default ServiceInnerContent