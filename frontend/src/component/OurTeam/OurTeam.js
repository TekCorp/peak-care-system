import React from 'react'
import "./OurTeam.css"

const teamCardData = [
    {
        heading:"Sports/Accident Related Injuries/Tissue Trauma",
        para:"The technology is non invasive, non toxic, and is currently utilized in many countries world wide."
    },
    {
        heading:"Sports/Accident Related Injuries/Tissue Trauma",
        para:"The technology is non invasive, non toxic, and is currently utilized in many countries world wide."
    },
    {
        heading:"Sports/Accident Related Injuries/Tissue Trauma",
        para:"The technology is non invasive, non toxic, and is currently utilized in many countries world wide."
    },
]

function OurTeam() {
  return (
    <div className='OurTeam-container standard-padding-space'>
        <div className='container py-4'>
            <div className='text-content text-center '>
                <h3 className='body-heading mb-5'>What is Laser Therapy?</h3>
               
            </div>

            <div className='row  pt-4'>
                    {
                        teamCardData.map((ele)=>{
                            return(
                                <div className='col-lg-4 px-lg-4 px-2'>
                                    <div className='team-card '>
                                        <h6 style={{fontWeight:"600",color:"#4293b6"}} className='text-lg-start text-center mb-3'>{ele.heading}</h6>
                                        <p className="text-lg-start text-center" style={{color:"#6cb4c6"}}>{ele.para}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    </div>
  )
}

export default OurTeam