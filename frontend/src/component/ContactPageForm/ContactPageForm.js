import React, {  useState } from 'react'
import "./ContactPageForm.css"
import axios from 'axios'
import { Spinner } from 'react-bootstrap'


function ContactPageForm() {

    const [name,setName]= useState("")
    const [email,setEmail]= useState("") 
    const [subject,setSubject]= useState("")
   
    const [message,setMessage]= useState("")

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);



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
        axios
          .post("/send-contact-form-main", {
              formType: "Contact Page Form",
              name:name,
              email: email,
                subject:subject,
                message:message
          })
          .then((response) => {
            if (response.data.msg === "success") {
              setError(false);
              setSuccess("Appointment form Submited Successfully!");
              setLoading(false);
              setEmail("");
            } else if (response.data.msg === "fail") {
              setSuccess(false);
              setError("Failed to send Appointment form, try again by reloading the page.");
              setLoading(false);
              setEmail("");
            }
          });
      };
  return (
    <div className='ContactPageForm-container standard-padding-space '>
        <div className='container py-5'>
            <div className='row align-items-center gy-lg-0 gy-5'>
            <div className='col-lg-6'>
                    <div className='content-container text-lg-start text-center'>
                       <h3 className='body-heading mb-3'>Contact Information</h3>
                        {/* <p className='body-paragraph'>FREE humidifier, programmable thermostat, and A/C cover with the purchase of a new furnace and air conditioning combo!</p> */}
                        <div className='row gy-2'>
                        <div className='col-lg-6 p-2 h-100'>
                                <div className='form-info-container d-flex flex-lg-row flex-column align-items-center gap-2 justify-content-evenly px-2 py-3'>

                                    <img src='/images/icons/contact-page-info-mail.png' style={{background:"#D73344",width:"55px"}} alt='location icon'/>
                                    <div>
                                        <h4 className='mb-1' style={{color:"black",fontWeight:"bold"}}>Email</h4>
                                        <a className='mb-0 ' href='mailto:info@thermalgroup.ca' style={{color:"grey",textDecoration:"none"}}>info@thermalgroup.ca</a>
                                        <br></br>
                                        
                                    </div>
                                </div>
                            </div>
                           
                            <div className='col-lg-6 p-2 h-100'>
                                <div className='form-info-container d-flex flex-lg-row flex-column align-items-center gap-2 justify-content-evenly px-2 py-3'>

                                    <img src='/images/icons/contact-page-info-phone.png' style={{background:"#D73344"}} alt='location icon'/>
                                    <div>
                                        <h4 className='mb-1' style={{color:"black",fontWeight:"bold"}}>Phone Number</h4>
                                        <a className='mb-0 ' href='tel:289-878-5443' style={{color:"grey",textDecoration:"none"}}>289-878-5443</a>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 p-2 h-100'>
                                <div className='form-info-container d-flex flex-lg-row flex-column align-items-center gap-2 justify-content-evenly px-2 py-3'>

                                    <img src='/images/icons/contact-page-info-location.png' style={{background:"#D73344"}} alt='location icon'/>
                                    <div>
                                        <h4 className='mb-1' style={{color:"black",fontWeight:"bold"}}>Our Address</h4>
                                        {/* <p className='mb-0'>PO Box 544 <br></br>Milton, Ont.<br></br> L9T 4Z1</p> */}
                                        <p className='mb-0'>PO Box 544 Milton, <br></br> Ont. L9T 4Z1</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='col-lg-6 p-2 h-100'>
                                <div className='form-info-container d-flex flex-lg-row flex-column align-items-center gap-2 justify-content-evenly px-2 py-3'>

                                    <img src='/images/icons/contact-page-info-time.png' style={{background:"#D73344"}} alt='location icon'/>
                                    <div>
                                        <h4 className='mb-1' style={{color:"black",fontWeight:"bold"}}>Working Hours</h4>
                                        <p className='mb-0'>Mon - Fri<br></br> 8AM - 5PM</p>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>

                       
                        {/* <h3 className='mb-3 title-txt pt-4'>Follow The Social Media:</h3>
                        <p className='body-paragraph'>Ensure your AC system is ready for the hottest days with our Comfort Check Tune-Up</p> */}

                        <div className='d-flex align-items-center justify-content-lg-start justify-content-center gap-3 social-icons mt-4'>
                            <img src='/images/icons/contact-fb-icon.png' alt='facebook'/>
                            <img src='/images/icons/contact-insta-icon.png' alt='instagram'/>
                            {/* <img src='/images/icons/contact-x-icon.png' alt='x'/> */}
                        </div>
                    </div>

                </div>

                <div className='col-lg-6'>
                    <div className='form-container'>
                    <h4 style={{fontWeight:"600",color:"black"}} className='text-center mb-3'>Book An Appointment</h4>

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
                               
                               
                            <button className='genral-btn mt-4' style={{backgroundColor:"black",color:"white",fontSize:"17px"}} type='submit'>Appointment Now

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

export default ContactPageForm