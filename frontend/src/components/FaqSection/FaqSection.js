import React from 'react'
import "./FaqSection.css"
import DropDownBox from './DropDownBox'

const faqData = [
    {
        title:"How do I know if I have mould or water damage?",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title:"Will you need to break walls or floors?",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title:"How long does the installation take?",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title:"What kind of warranty do you offer?",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

function FaqSection() {
  return (
    <div className="FaqSection-container">
        <div className="container">
                <div className='main-heading-container mb-lg-2 mb-4'>
                    <h4 className='bg-font-heading d-lg-block d-none'>FAQ</h4>
                    <div className="ovelaying-heading">
                        <h6 className="sub-heading mb-lg-0 mb-3">ALL OF YOUR</h6>
                        <h3 className='secondary-body-heading main-heading'>QUESTIONS, ANSWERED</h3>
                    </div>
                </div>
                <div className="faq-container">
                    {
                        faqData.map((ele)=>{
                            return(
                        <div className=''>
                        <DropDownBox title={ele.title} content={ele.content} />
                        <div className='line-seprator'></div>
                        </div>
                            )
                        })
                    }

                </div>
        </div>
    </div>
  )
}

export default FaqSection