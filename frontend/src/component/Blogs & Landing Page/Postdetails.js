import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import HeroBanner from "../HeroBanner/HeroBanner";
import NavbarCS from "../HeroMenu/NavbarCS";
import Footer from "../Footer_/Footer";
import BlogDetailView from "./BlogDetailView";
import PopularBlogs from "./PopularBlogs"; 
import axios from "axios";
import { Spinner } from "react-bootstrap";

const Postdetails = () => {
  const [blogsData, setBlogsData] = useState({})
  const [popularBlogs, setPopularBlogs] = useState([])

  const [loading, setLoading] = useState(true) 

  const {id} = useParams();

  let blogAPICalledId = false
  let allBlogsCalled = false

  const convertToOriginalFormat = (slug) => {
    const words = slug.split('-');
    const originalString = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return originalString;
  }


  const getAllBlogs = async() => {
    if(allBlogsCalled) return;
      allBlogsCalled = true;
   
      setLoading(true)
      axios.get(`/blogs`, {})
      .then((res) => {
        if (res.data.status === "success") {
          let slug = convertToOriginalFormat(id);
          let blog = res.data.data.find((item) => item.slug_url == slug);
          setBlogsData(blog);

          let Popular_blogs_data = []
          res.data.data.forEach((item) => {
            Popular_blogs_data.push({
              blog_id: item.blog_id,
              heading: item.title,  
              slug_url: item.slug_url,
              creative: item.blog_image, 
              date: item.published_date,  
            })
          })
          setPopularBlogs(Popular_blogs_data);  
          setLoading(false)
        }
      }).catch((err) => { 
        console.log(err)
        setLoading(false) 
      })
    }

  useEffect(() => {
    // getBlogById()
    getAllBlogs() 
  }, [id]);
  

  const DetailModuleBlogs = () =>{ 
    return (
      <Fragment>
        <NavbarCS /> 
        <HeroBanner 
          title={blogsData.title} 
          btnReq={false} 
          txtCenter={true} 
        />
        <BlogDetailView blog={blogsData} />
        <PopularBlogs popularBlogs={popularBlogs} />
        <Footer />
      </Fragment>
    )
  }

  return (
    <Fragment> {loading ? <div className='spinner-styles'> <Spinner style={{color: '#A1845D', width: '120px', height: '120px'}} /> </div> : DetailModuleBlogs()} </Fragment>
    ) 
};

export default Postdetails; 