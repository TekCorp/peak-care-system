import React from 'react'
import "./PlainText.css"
import { useNavigate } from 'react-router-dom'

function PlainText({
    heading="",
    content="",
    txtAnchor=false,
    btn=false,
    btnText="",
    btnRef="/"

}) {
    const navigate = useNavigate()
    return (
        <div className='PlainText-container'>
            <div className='container'>
                <div className='text-center'>
                    <h3 className='body-heading'>{heading}</h3>
                    <p className='body-paragraph'>{content}</p>
                    
                    {
                        txtAnchor?
                        <p className={`anchor-text mt-4 d-flex align-items-center gap-2 mx-auto justify-content-center`} onClick={()=>{navigate(btnRef)}}>{btnText}</p>
                        :
                        <>
                        {btn && <button className={` mt-4 mt-xl-5 d-flex align-items-center gap-2 mx-auto mx-lg-0`} onClick={()=>{navigate(btnRef)}}>{btnText}</button>}
                        </>
                    }

                </div>

            </div>
        </div>
    )
}

export default PlainText