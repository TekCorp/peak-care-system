import axios from 'axios'; 
import '../../component/Blogs & Landing Page/BlogsListing.css'; 
import React, { Fragment, useEffect, useState } from 'react';
import LocationPagePopup from './LocationPagePopup';
import { Spinner } from 'react-bootstrap';
import { Settings } from '../../inc/Settings';

const LocationListings = () => {
    const [locationListings, setLocationListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [locationPopupDetails, setLocationPopupDetails] = useState({
        openPopup: false,
        editMode: false,
        id: null
    })

    let getLocationPageCalled = false

    useEffect(() => {
        getAllLocationPages()
    }, []);
  
    const getAllLocationPages = () => {
        if(getLocationPageCalled) return;
        getLocationPageCalled = true;
 
        setLoading(true)
        axios.get("/api/locationpages", {})
        .then((res) => {
            if (res.data.status === "success") {  
                setLoading(false)
                setLocationListings(res.data.data)
            }
        }).catch((err) => { 
            setLoading(false)
            console.log(err) 
        })
    }

    const UploadBlog = () => {
        setLocationPopupDetails((prevState) => {
            return {
                ...prevState, 
                openPopup: true,
                editMode: false,
                id: null
            }
        })
    }

    const editLandingPage = (id) => {
        if(!id) return;

        setLocationPopupDetails((prevState) => {
            return {
                ...prevState, 
                openPopup: true,
                editMode: true,
                id: id
            }
        })
    }

    const deleteLandingPage = (id) => { 
        if(!id) return;

        axios.delete(`/api/locationpages/${id}`, {})
        .then((res) => { if (res.data.status === "success") { 
            Settings.alert(res.data.message)
            getAllLocationPages() 
        } })
        .catch((err) => { 
            Settings.alert(err.message)
            getAllLocationPages() 
        })
    }

    // Modules,

    const LocationPageListingModule = () => {
        return (
            <div className='blogs_portal_listings mt-4 mb-4'>
                <div className='container'> 
                    <div className='blogs_upload'>
                        <button onClick={UploadBlog}>
                            <img src='/images/icons/plus-white.png' alt='icon'/>
                            <span>Add New Location Page</span>
                        </button>
                    </div>

                    <div className='blogs_list mt-5 mb-5'> { LocationPagePatch() } </div> 
                </div>
            </div>
        )
    }

    const LocationPagePatch = () => {
        return (
            <div className='row'> 
                {locationListings.map((element) => {
                    return ( 
                        <div className="col-lg-4 col-md-6 col-12 mb-5 "> 
                            <div className="blogs_card">
                                <div className='entity_details mb-2 d-flex justify-content-start align-items-center'>
                                    <img className='img-fluid' src={"/favicon.png"} alt='icon'/>
                                    <div className='entity_dates'>
                                        <h5>The Meadows</h5> 
                                        <p className='para_main'>Current URL: {element.slug_url}</p>
                                    </div> 
                                </div>
                                    
                                <div className='blogs_card_details'> 
                                    <div className='action_btns'>
                                        <button onClick={() => editLandingPage(element.location_id)} className='edit'> <span></span> Edit Location</button>
                                        <button onClick={() => deleteLandingPage(element.location_id)} className='delete'> <span></span> Delete Location</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <Fragment> 
            { loading ? <div className='w-100 text-center'> <Spinner style={{color: '#A1845D', width: '120px', height: '120px'}} /> </div> : LocationPageListingModule() } 
            { locationPopupDetails.openPopup && <LocationPagePopup reloadLocationPage={getAllLocationPages} locationPageDetails={setLocationPopupDetails} id={locationPopupDetails.id} editMode={locationPopupDetails.editMode} /> }
        </Fragment>  
    )
};

export default LocationListings;