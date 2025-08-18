import React from 'react'
import "./FullWidthContent.css"

function FullWidthContent() {
  return (
    <div className='FullWidthContent-container standard-padding-space'>
        <div className='container-fluid'>
            <div className='row align-items-center'>
                <div className='col-lg-7'>
                    <img src='/images/creatives/membershiplvl-img-1.png' alt='thumbnail' className='img-fluid'/>
                </div>

                <div className='col-lg-5'>
                    <div className='heading-grey-container px-3 py-4'>
                        <h3 className='body-heading' >Client Portal</h3>
                    </div>

                    <p className='body-paragraph my-3'>Members-only access to schedules, progress reports, and exclusive content.</p>

                    <button className='genral-btn' style={{color:"black"}}>Become a Member</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default FullWidthContent