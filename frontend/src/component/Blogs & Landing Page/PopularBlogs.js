import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const PopularBlogs = ({popularBlogs}) => {
    const navigate = useNavigate()

    const convertToSlug = (str) => {
        return str.toLowerCase().replace(/\s+/g, '-');
    }

    const redirectUserToBlog = (id) => {
        if(!id) return; 
        let slug = convertToSlug(id);
        navigate(`/blog/${slug}`);
    }
    return (
        <div className='popular_blogs'> 
            <div className='container'>
                <div className='blogs_details'>
                    <h1 className='heading_capital'>MOST <span>POPULAR BLOGS</span></h1>
                </div>

                <div className="row">
                    {popularBlogs.map((element, index) => {
                        return ( 
                            <div key={`${element.id}-${index}`} className="col-lg-4 col-md-6 col-12 mb-5">
                                <div onClick={() => redirectUserToBlog(element.slug_url)} className="blogs_card">
                                    <img src={element.creative} className='img-fluid blg_crt' alt='icon'/>  
                                    <div className='blogs_card_details'> 
                                        <h3>{element.heading}</h3>  
                                    </div>
                                    <div className='entity_details d-flex justify-content-between align-items-center'>
                                        <h4 className='h4_main'>Published By: Creative Squad</h4>
                                        <h4 className='h4_main'>{element.date}</h4>
                                    </div>
                                </div>
                            </div> 
                        )
                    })};
                </div> 
            </div>
        </div>
    )
}

export default PopularBlogs;
