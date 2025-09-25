import React from 'react'
import "./EnvironmentalSolutionsHome.css"

function EnvironmentalSolutionsHome() {
  return (
    <div className='main-container '>
      <div className="EnvironmentalSolutionsHome-container standard-padding-space">
          <div className="container main-card">
              <div className="d-flex flex-column content-section mb-lg-5">
                  <h3 className="secondary-body-heading color-white">Peakcare Environmental Solutions</h3>
                  <p className="body-paragraph color-white">Permanent Solutions for Problem Walls.</p>
                  <button className="genral-btn content-btn">Book A Free Analysis <img src="/images/icons/btn-arrow-b.png" className="img-fluid" alt="arrow icon" /></button>
              </div>
              <img src="/images/creatives/van-img.png" className="img-fluid van-img" alt="van"/>
          </div>
      </div>
    </div>
  )
}

export default EnvironmentalSolutionsHome