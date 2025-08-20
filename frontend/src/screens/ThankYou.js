import React from 'react'

function ThankYou() {
    let heading = "Thank you for submitting your request";
    let message = "We've received it and will be in touch with more details soon.";

    
  return (
    <>
      
       <div className='container py-5 my-5'>
        <div className='text-center my-5 py-5'>
          <h3 className='body-heading'>{heading}</h3>
          <p>{message}</p>
        </div>

       </div>
       
    </>
  )
}

export default ThankYou