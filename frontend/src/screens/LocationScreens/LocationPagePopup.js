 import React, { useEffect, useState } from 'react';
import Popup from '../../component/PortfolioSec_/Popup';
import $ from 'jquery';
import axios from 'axios';
import { Settings } from '../../inc/Settings';
// import '../../Components/Blogs & Landing Page/BlogsListing.css'; 
import "../../component/Blogs & Landing Page/BlogsListing.css"
import { Spinner } from 'react-bootstrap';

const LocationPagePopup = ({locationPageDetails, editMode, reloadLocationPage, id}) => { 
    const [locationPageData, setLandingPageData] = useState({ 
        slug_url: null,
        main_heading: null,
        main_paragraph: null,
        highlighted_heading: null,
        heading_1: null,
        paragraph_1: null,
        heading_2: null,
        paragraph_2: null,
        heading_3: null,
        paragraph_3: null,
        heading_4: null,
        paragraph_4: null,
        meta_keywords: null,
        meta_link: null,
        meta_title: null,
        meta_description: null
    })  
    const [loading, setLoading] = useState(true)

    useEffect(() => { 
        getLandingPageById()  
    }, [])

    let getLocationPagebyId = false;

    const getLandingPageById = () => {
        if(getLocationPagebyId) return;
        getLocationPagebyId = true;
  
        if(!id && !editMode) {
            setLoading(false)
            return;
        }

        setLoading(true)
        axios.get(`/api/locationpages/${id}`, {})
        .then((res) => {
            if (res.data.status === "success") {
                setLoading(false)
                setLandingPageData(res.data.data)
            }
        }).catch((err) => { setLoading(false) })
    }    
 
    // onChange handlers,

    const handleInputChange = (event) => {
        let { name, value } = event.target;
        setLandingPageData((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };
  
    const PopupCloseHandler = () => {
        locationPageDetails((prevState) => {
            return {
                ...prevState,
                openPopup: false,
                id: null
            }
        });
        $('html').removeClass('rs_popup_open');
    };
 
    // ------

    const PutAPICall = () => {
        axios.put(`/api/locationpages/${id}`, locationPageData)
        .then((res) => {
            if(res.data.status === "success") {
                Settings.alert(res.data.message)
                PopupCloseHandler()
                reloadLocationPage()
            }
        }).catch((err) => {  
            Settings.alert(err.response.data.message, 'failure')
        })
    }

    const PostAPICall = () => {
        axios.post(`/api/locationpages/create`, locationPageData)
        .then((res) => {
            if (res.data.status === "success") {
                Settings.alert(res.data.message)
                PopupCloseHandler()
                reloadLocationPage()
            }
        }).catch((err) => {  
            Settings.alert(err.response.data.message, 'failure')
        })
    }

    // Modules,

    const PopupModule = () => {
        return (
            <div className='popup_blog_view'> 
                <div className='blogs_closing'>
                    <h2 className='h2_main'>Location Page Upload</h2>
                    <button onClick={PopupCloseHandler}><span><img src='/images/icons/cancel.svg' alt='icon'/></span></button>
                </div>

                <div className='location_fields input_fields_blogs'>
                    <div className='row'>
                        <div className='col-12'> 
                            <label>Main Slug URL*</label>
                            <input onChange={handleInputChange} value={locationPageData.slug_url} name='slug_url' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Main Heading*</label>
                            <input onChange={handleInputChange} value={locationPageData.main_heading} name='main_heading' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Main Paragraph*</label>
                            <textarea onChange={handleInputChange} value={locationPageData.main_paragraph} name='main_paragraph' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Highlighted Heading*</label>
                            <input onChange={handleInputChange} value={locationPageData.highlighted_heading} name='highlighted_heading' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Heading #1 *</label>
                            <input onChange={handleInputChange} value={locationPageData.heading_1} name='heading_1' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Paragraph #1 *</label>
                            <textarea onChange={handleInputChange} value={locationPageData.paragraph_1} name='paragraph_1' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Heading #2 *</label>
                            <input onChange={handleInputChange} value={locationPageData.heading_2} name='heading_2' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Paragraph #2 *</label>
                            <textarea onChange={handleInputChange} value={locationPageData.paragraph_2} name='paragraph_2' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Heading #3 *</label>
                            <input onChange={handleInputChange} value={locationPageData.heading_3} name='heading_3' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Paragraph #3 *</label>
                            <textarea onChange={handleInputChange} value={locationPageData.paragraph_3} name='paragraph_3' /> 
                        </div> 
                        <div className='col-12'> 
                            <label>Heading #4 *</label>
                            <input onChange={handleInputChange} value={locationPageData.heading_4} name='heading_4' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Paragraph #4 *</label>
                            <textarea onChange={handleInputChange} value={locationPageData.paragraph_4} name='paragraph_4' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Meta Title*</label>
                            <textarea onChange={handleInputChange} value={locationPageData.meta_title} name='meta_title' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Meta Keywords*</label>
                            <textarea onChange={handleInputChange} value={locationPageData.meta_keywords} name='meta_keywords' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Meta Link*</label>
                            <textarea onChange={handleInputChange} value={locationPageData.meta_link} name='meta_link' /> 
                        </div>
                        <div className='col-12'> 
                            <label>Meta Description*</label>
                            <textarea onChange={handleInputChange} value={locationPageData.meta_description} name='meta_description' /> 
                        </div>
                    </div>
                    
                    <div className='row mt-4'>
                        <div className='col-12'>
                            <div className='action_btns'>
                               <button onClick={SubmitHandler} className='submit'>{editMode ? 'Save' : 'Upload'}</button>
                               <button onClick={PopupCloseHandler} className='discard'>Discard</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }

    const SubmitHandler = () => { if(editMode && id) PutAPICall(); if(!editMode && !id) PostAPICall(); }
    return ( 
        <Popup className='popup-blog-details' autoOpen={true} width="auto" onClose={PopupCloseHandler}>
            {loading ? <div className='w-100 text-center'> <Spinner style={{color: '#A1845D', width: '120px', height: '120px'}} /> </div> : PopupModule()}
        </Popup> 
    )
}

export default LocationPagePopup;