import React from 'react';
import './PartnershipAwards.css';

const PartnershipAwards = () => {
    return (
        <div className='partnership_awards'>
            <div className='container'>
                <div className="flex-container align-items-center justify-content-center">
                    <div className="flex-item"><img className="img-fluid" src="/images/icons/sponsor-logo-1.png" alt="partner icon" /></div>
                    <div className="flex-item"><img className="img-fluid" src="/images/icons/sponsor-logo-2.png" alt="partner icon" /></div>
                    <div className="flex-item"><img className="img-fluid" src="/images/icons/sponsor-logo-3.png" alt="partner icon" /></div>
                </div>
            </div>
        </div>
    )
};

export default PartnershipAwards;