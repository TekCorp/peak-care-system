import React from 'react'
import "./EnvironmentalSolutionsHome.css"
import { useLanguageContent } from '../Utils/MultilingialContent'

function EnvironmentalSolutionsHome() {
  const GetLanguageContent = useLanguageContent()
  return (
    <div className='main-container'>
      <div className="EnvironmentalSolutionsHome-container standard-padding-space pt-lg-5">
          <div className="container main-card ">
              <div className="d-flex flex-column content-section mb-lg-5 mb-4 text-lg-start text-center">
                  <h3 className="secondary-body-heading color-white">{GetLanguageContent?.home?.environmentalsolutions?.title}</h3>
                  <p className="body-paragraph color-white">{GetLanguageContent?.home?.environmentalsolutions?.subline}</p>
                  <button className="genral-btn content-btn d-flex align-items-center gap-3 mx-lg-0 mx-auto">{GetLanguageContent?.home?.environmentalsolutions?.cta} <img src="/images/icons/btn-arrow-b.png" className="img-fluid" alt="arrow icon" /></button>
                  <p className="body-paragraph under-cta-text color-white mb-0 mt-3">{GetLanguageContent?.home?.environmentalsolutions?.underCtaBlurb}</p>
              </div>
              <img src="/images/creatives/van-img.png" className="img-fluid van-img" alt="van"/>
          </div>
      </div>
    </div>
  )
}

export default EnvironmentalSolutionsHome