import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom'; 

const BlogDetailView = ({blog}) => {   
    const navigate = useNavigate(); 
    return ( 
        <div className='inner_blogs_img'>
            <div className='blog_detail_cn mb-5'>
                <div className='container text-center'>
                    <img style={{borderRadius:"8px"}} className='img-fluid blog_main_creative' src={blog.blog_image} alt='icon'/>
                    <div className='blog_short_detail'>
                        {/* Listen To Blog Feature */}
                    </div>
                </div>
            </div>
    
            <div className='container'> 
                <Fragment>
                <div className='blogs_content_cn'> 
                    {blog.blogs_content &&
                        blog.blogs_content.map((item, index) => (
                            <Fragment key={index}>
                                <h3 className='h3_main'>{item.heading}</h3>
                                <p><div dangerouslySetInnerHTML={{ __html: item.paragraph }} /></p>
                            </Fragment>
                        ))
                    }
                </div>

                    <div className="publishing_details">
                        <h4 className="h4_main">
                            Published Date: <span>{blog.published_date}</span>
                        </h4>
                    </div>
                </Fragment>
            </div> 
        </div> 
    )
}
export default BlogDetailView;