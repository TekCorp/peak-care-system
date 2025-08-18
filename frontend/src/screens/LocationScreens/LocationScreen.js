import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import HeroBanner from '../../component/Common Banner Component/HeroBanner';
import LocationListings from './LocationListings';

const LocationScreen = () => {
    return (
        <Fragment>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <HeroBanner
                Heading="Location Pages"
                Paragraph={"Location Page Portal"}
                bgImg={"/images/creatives/plane-hero-bg.png"}
                sideLinks={false}
            />
            <LocationListings />
        </Fragment>
    )
};

export default LocationScreen;