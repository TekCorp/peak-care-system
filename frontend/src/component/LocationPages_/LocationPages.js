import React, { Fragment, useEffect, useState, useRef } from 'react';
import './LandingPage.css';
import { Helmet } from 'react-helmet';
import PartnershipAwards from './Components/PartnershipAwards';
import LocationContent from './Components/LocationContent';
import BusinessGrowth from './Components/BusinessGrowth';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import NotFound from '../../screens/NotFound';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TextContent from '../TextContent/TextContent';

const LocationPages = () => {
    const [locationPage, setLocationPage] = useState({});
    const [loading, setLoading] = useState(false);
    const { slug } = useParams();
    const locationDataCalled = useRef(false);

    useEffect(() => {
        fetchLocationPageDataById();
    }, [slug]);

    const fetchLocationPageDataById = () => {
        if (locationDataCalled.current) return;
        locationDataCalled.current = true;

        setLoading(true);
        axios.get(`/api/locationpages/url/${slug}`, {})
            .then((res) => {
                setLoading(false);
                if (res.data.status === "success") {
                    setLocationPage(res.data.data);
                }
            }).catch(() => {
                setLoading(false);
            });
    };

    const MapHelmetMetaTags = () => {
        return (
            <Helmet>
                <title>{locationPage?.meta_title}</title>
                <meta name="keywords" content={locationPage?.meta_keywords} />
                <link rel="canonical" href={locationPage?.meta_link} />
                <meta name="description" content={locationPage?.meta_description} />
            </Helmet>
        );
    };

    const isEmpty = (obj) => Object.keys(obj).length === 0;

    const LocationPageModule = () => {
        return (
            <div className='location_page_wrapper'>
                {MapHelmetMetaTags()}
                <Header darkBg={true} />
                <TextContent
                    heading={locationPage?.main_heading}
                    content={locationPage?.main_paragraph}
                    img={"/images/creatives/home-text-1.png"}
                    headingH1={true}
                />
                <PartnershipAwards />
                <LocationContent heading={locationPage?.heading_1} paragraph={locationPage?.paragraph_1} />
                <LocationContent heading={locationPage?.heading_2} paragraph={locationPage?.paragraph_2} />
                <BusinessGrowth normalHeading={locationPage?.highlighted_heading} highlightedHeading={''} />
                <LocationContent heading={locationPage?.heading_3} paragraph={locationPage?.paragraph_3} />
                <LocationContent heading={locationPage?.heading_4} paragraph={locationPage?.paragraph_4} />
                <div style={{ height: "50px" }} />
                <Footer newsletterSection={false} />
            </div>
        );
    };

    return (
        <Fragment>
            {loading ? (
                <div className='w-100 text-center'>
                    <Spinner style={{ color: '#A1845D', width: '120px', height: '120px' }} />
                </div>
            ) : (
                isEmpty(locationPage) ? <NotFound /> : LocationPageModule()
            )}
        </Fragment>
    );
};

export default LocationPages;
