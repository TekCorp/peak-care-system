import React from 'react'

function BlogContent() {
  return (
    <div className='BlogContent-container standard-padding-space mt-0 pt-2'>
        <div className='container px-md-5 px-3 '>
            {/* <img src='/images/creatives/blog-main.png' className='img-fluid' alt='blog-thumbnail'/> */}

            <div className='d-flex align-items-center gap-5 pt-1'>
              <div className="d-flex align-items-center justify-content-start gap-1">
                <img src="/images/icons/user-img.png" className="m-0" alt="person icon" style={{width:"40px"}}/>
                <p className="m-0">Admin</p>
              </div>
              <div className="d-flex align-items-center justify-content-start gap-1">
                <img src="/images/icons/blog-calendar-icon.png" className="m-0" alt="calandar icon"/>
                <p className="m-0">10 Jan, 2025</p>
              </div>
            </div>

            {/* <h3 className='body-heading mt-3' style={{textShadow:"none",fontSize:"2.4rem"}}>Your Comfort, Our Mission Cool Choice for AC</h3> */}

            <p className='body-paragraph'>Energy-efficient upgrades to your existing air conditioning system, including the installation of smart thermostats, high-efficiency filters, and advanced cooling technologies Cleaning of you condenser and evaporator coils, thermostat calibration.</p>
            <p className='body-paragraph'>Precise calibration of your air conditioning system to ensure balanced airflow and consistent cooling throughout your home or office pinpointing problems, providing repair options, and a implementing solutions.</p>

            <h4 style={{color:"black",fontWeight:"bold"}}>The Benefits of Professional Ace Servicing</h4>
            <p className='body-paragraph'>Deep cleaning of coils, fins, and filters, as well as cleaning the blower motor and ducts if your an necessary Ductwork inspection, airflow measurement, adjustments to dampers and registers and a final system test.</p>
            <h4 style={{color:"black",fontWeight:"bold"}}>The Benefits of Professional Ace Servicing</h4>
            <p className='body-paragraph'>Deep cleaning of coils, fins, and filters, as well as cleaning the blower motor and ducts if your an necessary Ductwork inspection, airflow measurement, adjustments to dampers and registers and a final system test.</p>
            <p className='body-paragraph'>Energy-efficient upgrades to your existing air conditioning system, including the installation of smart thermostats, high-efficiency filters, and advanced cooling technologies Cleaning of you condenser and evaporator coils, thermostat calibration.</p>
            <p className='body-paragraph'>Precise calibration of your air conditioning system to ensure balanced airflow and consistent cooling throughout your home or office pinpointing problems, providing repair options, and a implementing solutions.</p>

        </div>
    </div>
  )
}

export default BlogContent