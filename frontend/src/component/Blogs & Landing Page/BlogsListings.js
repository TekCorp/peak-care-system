import React, { useEffect, useState } from 'react';
import './BlogsListing.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

let defaultBlogObj = []

const BlogsListings = () => {
    const [blogs, setBlogs] = useState([])
    const [recentBlogs, setRecentBlogs] = useState([])
    const [categories, setCategories] = useState([])

    const [loading, setLoading] = useState(true) 

    const [activeTab, setActiveTab] = useState(12); 
    const navigate = useNavigate()

    let blogAPICalled = false;
    let categoryAPICalled = false; 

    useEffect(() => {  
        getAllBlogsListing()  
        getAllCategories()
    }, []);
  
    const getAllBlogsListing = () => {
        if(blogAPICalled) return;
        blogAPICalled = true;

        setLoading(true)
        axios.get("/blogs", {})
        .then((res) => {
            if (res.data.status === "success") { 
                let Updated_data_Blogs = []
                let Updated_recent_blogs = []
                res.data.data.forEach((item) => {
                    Updated_data_Blogs.push({
                        id: item.blog_id,
                        main_heading: item.title,
                        paragraph: item.brief_paragraph,
                        logo:  '/favicon.png',
                        entity: 'Creative Squad',
                        date: item.published_date,
                        slug_url: item.slug_url,
                        category: item.category,
                        blog_creative: item.blog_image
                    })
                })
                res.data.data.forEach((item) => {
                    Updated_recent_blogs.push({
                        id:item.blog_id,
                        slug_url: item.slug_url,
                        logo: item.blog_image,
                        blog_description: item.title,
                        date: item.published_date,
                    })
                })
                setRecentBlogs(Updated_recent_blogs.slice(0, 3))
                setBlogs(Updated_data_Blogs)
                defaultBlogObj = Updated_data_Blogs
                setLoading(false)
            }
        }).catch((err) => { setLoading(false) })
    }

    const getBlogByCategory = (id) => { 
        setLoading(true)
        if(id === 12){
            setBlogs(defaultBlogObj)
            setLoading(false)
            return;
        }
        
        axios.get(`/get_blogs_by_category/${id}`, {})
        .then((res) => {
            if (res.data.status === "success") {  
                let Updated_data_Blogs = []
                res.data.data.forEach((item) => {
                    Updated_data_Blogs.push({
                        id: item.blog_id,
                        slug_url: item.slug_url,
                        main_heading: item.title,
                        paragraph: item.brief_paragraph,
                        logo: '/favicon.png',
                        entity: 'Creative Squad',
                        date: item.published_date,
                        category: item.category,
                        blog_creative: item.blog_image
                    })
                })
                setBlogs(Updated_data_Blogs)
                setLoading(false)
            }
        }).catch((err) => { 
            console.log(err) 
            setLoading(false)
        })
    }

    const getAllCategories = () => {
        if(categoryAPICalled) return;
        categoryAPICalled = true;
 
        axios.get("/api/categories", {})
        .then((res) => {
            if (res.data.status === "success") {  
                setCategories(res.data.data)
            }
        }).catch((err) => { console.log(err) })
    }
  
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);   
            getBlogByCategory(tab);
        }   
    };

    const convertToSlug = (str) => {
        return str.toLowerCase().replace(/\s+/g, '-');
    }

    const redirectUserToBlog = (id) => {
        if(!id) return; 
        let slug = convertToSlug(id);
        navigate(`/blog/${slug}`);
    }

  return (
    <div className='blogs_listings_component'>
        <div className='blogs_tabs mb-5 mt-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div
                            className="nav nav-tabs d-flex justify-content-center mb-3"
                            id="myTab"
                            role="tablist"
                        >
                            {categories.map((item) => {
                                return (
                                    <button className={`nav-link ${activeTab === item.category_id ? "active" : ""}`} onClick={() => toggle(item.category_id)}>
                                        {item.category}
                                    </button>
                                )})
                            }  
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='blogs_filtered'>
            {loading ? <div className='w-100 text-center mb-5'> <Spinner style={{color: '#A1845D', width: '120px', height: '120px'}} /> </div> :  ( 
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 mb-5 col-12'>
                            <div className="tab-content" id="myTabContent">
                                {blogs.map((item) => {
                                    return ( 
                                        <div key={item.category} className={`tab-pane fade blog_detailed mb-5 ${activeTab === item.category || activeTab === 12 ? 'show active' : ''}`} id={item.category} role="tabpanel">
                                            <h1 className='heading_main mb-4'>{item.main_heading}</h1>
                                            <div className='entity-details mb-4 d-flex justify-content-start align-items-center'>
                                                <img src={item.logo} className='img-fluid' alt='icon'/>
                                                <div className='entity ms-3'>
                                                    <h4 className='h4_main'>{item.entity}</h4>
                                                    <div className='date_extra_info d-flex justify-content-start align-items-center'>
                                                        <h4 className='h4_main'>{item.date}</h4>
                                                        <h4 className='underline_txt ms-3'>Knowledge</h4>
                                                    </div> 
                                                </div>
                                            </div>
                                            <img src={item.blog_creative} className='img-fluid main-crt' alt='icon'/>
                                            <p className='para_main text-start mt-4'>{item.paragraph}</p>
                                            <h4 onClick={() => redirectUserToBlog(item.slug_url)} className='underline_txt mt-2'>CONTINUE READING</h4>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className='col-lg-5 col-12'>
                            <div className='container'>
                                <div className='recent_blogs'> <h1 className='heading_main mb-4'>Most Popular</h1> </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div>
                                            {recentBlogs.map((item) => {
                                                return (
                                                    <div onClick={() => redirectUserToBlog(item.slug_url)} className='detail_recents mb-3 d-flex justify-content-start align-items-center'>
                                                        <img src={item.logo} className='img-fluid' alt='icon'/>
                                                        <div className='detail_recents_desc ms-3'>
                                                            <h4 className='h4_main'>{item.blog_description}</h4>
                                                            <h4 className='h4_main_dt'>{item.date}</h4>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default BlogsListings;
