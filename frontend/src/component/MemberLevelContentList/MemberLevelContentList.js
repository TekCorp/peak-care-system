import React from 'react'
import "./MemberLevelContentList.css"

const pointsData = [
    {
        heading:"Platinum Membership",
        points:[
            "Unlimited access to all services, including consulting, sports management, mental performance, and sports lab.", 
            "Monthly 1:1 strategy sessions with top consultants.",
            "Personalized performance and nutrition plans.",
            "Exclusive invitations to elite workshops and events. "
        ],
        sideImg:"/images/creatives/msl-player-1.png"
    },
    {
        heading:"Gold Membership",
        points:[
            "Access to most services with limits on 1:1 consultations.",
            "Discounted sports lab testing and group programs.",
            "Priority registration for seasonal camps and workshops."
        ],
        sideImg:"/images/creatives/msl-player-2.png",
        swipeRight:true
    },
    {
        heading:"Silver Membership",
        points:[
            "Access to group programs, webinars, and foundational services.", 
            "Focus on building strong fundamentals and general guidance. "
        ],
        sideImg:"/images/creatives/msl-player-3.png"
    },
]

function MemberLevelContentList() {
  return (
    <div className='MemberLevelContentList-container standard-padding-space'>
        <div className='container'>
            {
                pointsData.map((pointDetails)=>{
                    return(
                        <div className='list-card'>
                        <div className={`row ${pointDetails?.swipeRight ?"flex-lg-row-reverse flex-column":""} align-items-center`}>
                            <div className='col-lg-7'>
                                <div className='list-box py-4 px-4'>
                                    <h3 className='body-heading mb-4'>{pointDetails.heading}</h3>
        
                                        {
                                            pointDetails.points.map((pointList)=>{
                                                return(
                                                    <div className='d-flex align-items-start justify-content-start gap-2'>
                                                        <img src='/images/icons/custom-bullet-list-icon.png' alt='bullet' className='mt-2'/>
                                                        <p className='body-paragraph'>{pointList}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                </div>
                            </div>
                            <div className='col-lg-4 text-center text-lg-start'>
                                <img src={pointDetails.sideImg} className='img-fluid player-img' alt='player' />
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MemberLevelContentList