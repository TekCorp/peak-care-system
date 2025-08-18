import React from 'react'
import HeroBanner from '../component/Common Banner Component/HeroBanner'
import Footer from '../component/Footer/Footer';
import Helmet from "react-helmet"
import Header from '../component/Header/Header';

function ThankYou() {
    let heading = "Thank you for submitting your request";
    let message = "We've received it and will be in touch with more details soon.";

    
  return (
    <>
    <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Header />
      
       <div className='container py-5 my-5'>
        <div className='text-center my-5 py-5'>
          <h3 className='body-heading'>{heading}</h3>
          <p>{message}</p>
        </div>

       </div>
        <Footer
            newsletterSection={false}
        />
    </>
  )
}

export default ThankYou