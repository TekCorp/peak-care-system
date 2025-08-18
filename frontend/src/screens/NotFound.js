import React from 'react'
import HeroBanner from '../component/Common Banner Component/HeroBanner'
import Footer from '../component/Footer/Footer'
import Header from '../component/Header/Header'

function NotFound() {
  return (
    <>
   
   <Header/>
      
       <div className='container py-5 my-5'>
        <div className='text-center my-5 py-5'>
          <h3 className='body-heading'>404</h3>
          <p>Requested Page Could Not Be Found</p>
        </div>

       </div>
        <Footer
            newsletterSection={false}
            />
        
    </>
  )
}

export default NotFound