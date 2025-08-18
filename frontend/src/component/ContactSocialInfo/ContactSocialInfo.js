import React from 'react'
import "./ContactSocialInfo.css"

function ContactSocialInfo() {
  return (
    <div className='ContactSocialInfo-container standard-padding-space'>
        <div className='container text-center py-4'>
            <h3 className='body-heading mb-2'>Get In Touch</h3>
            <p className='body-paragraph mb-3'>Stay connected with us on:</p>
            <div className='d-flex align-items-center justify-content-center gap-4'>
                
                    <img src='/images/icons/fb-icon.png' alt='facebook'/>
                    <img src='/images/icons/insta-icon.png' alt='insta' />
                    <img src='/images/icons/x-icon.png' alt='x'/>
            </div>
        </div>
    </div>
  )
}

export default ContactSocialInfo