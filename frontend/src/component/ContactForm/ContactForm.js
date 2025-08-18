import React, { useState } from 'react'
import "./ContactForm.css"
import axios from 'axios'
import { Spinner } from 'react-bootstrap'

function ContactForm() {

    const [Name,setName]= useState()
    const [email,setEmail]= useState()
    const [subject,setSubject]= useState()
    const [additionalText,setAdditionalText]= useState()
    
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    

    // const formSubmitHandler = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     if(cv === null)
    //     {
    //         setLoading(false)
    //         alert("Please upload a image file")
    //         return
    //     }
    //     axios
    //       .post("/send-assesment", {
    //         email: email,
    //         formType: "Get a Qoute",
    //         assementData:{
    //             name:Name,
    //             email:email,
    //             additionalText:additionalText,
    //             propertyPhotos:cv,
    //         }
    //       })
    //       .then((response) => {
    //         if (response.data.msg === "success") {
    //           setError(false);
    //           setSuccess("Quote form Submited Successfully!");
    //           setLoading(false);
    //           setEmail("");
    //         } else if (response.data.msg === "fail") {
    //           setSuccess(false);
    //           setError("Failed to send Quoute form, try again by reloading the page.");
    //           setLoading(false);
    //           setEmail("");
    //         }
    //       });
    //   };
  return (
    <div className='ContactForm-container standard-padding-space '>
        <div className='container pt-4 px-5'>
            <div className='container'>
                <div className='row align-items-center gy-lg-0 gy-5 inner-box p-0'>
                <div className='col-lg-6 bg-blue pe-0  mt-0' style={{height:"auto"}}>
                        <div className='content-container pe-0'>
                            <img src='/images/creatives/contact-form-side-img.png' alt='side' className='img-fluid '/>
                            
                            <h3 className='body-heading text-center pe-2' style={{color:"white"}}>Start our journey</h3>
                            <p className='body-paragraph text-center mb-4 pe-2' style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </div>

                    </div>

                    <div className='col-lg-6'>
                        <div className='form-container'>
                            <h3 className='body-heading mb-4' >Contact us</h3>

                            <div className='form-field d-flex flex-column justify-content-between col-lg-12'>
                                    <div className='d-flex flex-lg-row flex-column align-items-center gap-lg-4 gap-0'>
                                        <input
                                            value={Name}
                                            onChange={(e) => setName(e.target.value)}
                                            maxLength="100"
                                            required
                                            type='text' 
                                            placeholder='Your Name' 
                                            className='w-100'
                                        />
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            maxLength="100"
                                            required
                                            type='email' 
                                            placeholder='Your Email Address' 
                                            className='w-100'
                                        />

                                    </div>

                                    <input
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        maxLength="100"
                                        required
                                        type='text' 
                                        placeholder='Your Subject' 
                                    />
                                    
                                    <textarea 
                                        placeholder='Message' 
                                        value={additionalText} 
                                        onChange={(e) => setAdditionalText(e.target.value)}
                                        rows={4}
                                    ></textarea>
                                
                                    <button className='genral-btn mt-4 px-4'>Register

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm