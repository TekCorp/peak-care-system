import React,{useState,useEffect} from "react";
import "./CardBlog.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardBox from "./CardBox";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Spinner } from "react-bootstrap";

let defaultBlogObj = []

const blogData = [
  {
    cardImg: "/images/creatives/blog-card-img1.png",
    title: "Where Comfort Meets and Efficiency",
    content:
      "Common signs include unusual and ace for noisesreduced airflow uneven cooling.",
      slug_url:"/blog",
      date:"12 May, 2024"
  },
  {
    cardImg: "/images/creatives/blog-card-img2.png",
    title: "Your Comfort, Our Mission Cool Choice for AC",
    content:
      "Cleaning or replacing filters sealing leaks in ductwork and using a ace.",
      slug_url:"/blog",
      date:"10 May, 2024"
  },
  
  {
  
    cardImg: "/images/creatives/blog-card-img3.png",
    title: "Your Trusted Air Cool, Stay Comfortable",
    content:
      "We recommend annual inspections especi before the winter and after severe storms.",
      slug_url:"/blog",
      date:"05 May, 2024"
  },

  {
    cardImg: "/images/creatives/blog-card-img1.png",
    title: "Where Comfort Meets and Efficiency",
    content:
      "Common signs include unusual and ace for noisesreduced airflow uneven cooling.",
      slug_url:"/blog",
      date:"12 May, 2024"
  },
  {
    cardImg: "/images/creatives/blog-card-img2.png",
    title: "Your Comfort, Our Mission Cool Choice for AC",
    content:
      "Cleaning or replacing filters sealing leaks in ductwork and using a ace.",
      slug_url:"/blog",
      date:"10 May, 2024"
  },
  
  {
  
    cardImg: "/images/creatives/blog-card-img3.png",
    title: "Your Trusted Air Cool, Stay Comfortable",
    content:
      "We recommend annual inspections especi before the winter and after severe storms.",
      slug_url:"/blog",
      date:"05 May, 2024"
  },
  
];

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    const lastSpaceIndex = text.lastIndexOf(' ', maxLength - 4);
    return text.substring(0, lastSpaceIndex) + '...';
  }
  return text;
}

function BlogCardCarousel({
  headinText=true
}) {
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  let blogAPICalled = false;

  useEffect(() => {
    getAllBlogsListing();
  }, []);

  const getAllBlogsListing = () => {
    if (blogAPICalled) return;
    blogAPICalled = true;

    setLoading(true);
    axios
      .get("/blogs", {})
      .then((res) => {
        if (res.data.status === "success") {
          let Updated_data_Blogs = [];
          let Updated_recent_blogs = [];
          res.data.data.forEach((item) => {
            Updated_data_Blogs.push({
              id: item.blog_id,
              main_heading: item.title,
              paragraph: item.brief_paragraph,
              logo: "/favicon.png",
              entity: "Creative Squad",
              date: item.published_date,
              slug_url: item.slug_url,
              category: item.category,
              blog_creative: item.blog_image,
            });
          });
          res.data.data.forEach((item) => {
            Updated_recent_blogs.push({
              id: item.blog_id,
              slug_url: item.slug_url,
              logo: item.blog_image,
              blog_description: item.title,
              date: item.published_date,
            });
          });
          setRecentBlogs(Updated_recent_blogs.slice(0, 3));
          setBlogs(Updated_data_Blogs);
          if(blogs?.length <= 3)
          {
            setBlogs((prev)=>[...prev,...prev])
          }
          defaultBlogObj = Updated_data_Blogs;
          setLoading(false);
        }
          
      })
      .catch((err) => {
        console.log("eror =>",err);
        setLoading(false);
      });
  };

  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (id) => {
    if (!id) return;
    let slug = convertToSlug(id);

    navigate(`/blog/${slug}`);
  };

  

  return (
    <div className='BlogCardCarousel-container container standard-padding-space my-4'>
      <div className="blog-upper-content">
        <div className="container">
          {
            headinText &&
            <div className="row">
              <div className="col-12">
                <div className="blog-text-content text-center">
                  <p className="sub-heading" style={{color:"#D43243"}}>Blog Post</p>
                  <h3 className="body-heading" style={{color:'black',textShadow:"1px 0 black"}}>Our Latest News and Updates</h3>   
                  
                </div>
              </div>
              
            </div>
          }
        </div>
      </div>
      {
        loading ?
        <Spinner style={{color:"black"}}></Spinner>
        :
        <Swiper
            loop={true}
            spaceBetween={50}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
                280: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 3,
                }
              }}
            className="card-list py-4 mx-0 w-100 px-2"
            >
            {blogs.map((blogData,ind)=>{
              return (
                <>
                  <SwiperSlide key={ind} style={{ height: "auto" }}>
                    <CardBox
                      className="h-100"
                      cardImg={blogData.blog_creative}
                      title={blogData.main_heading}
                      readMoreRef={blogData.slug_url}
                      content={truncateText(blogData.paragraph, 90)}
                      redirection={redirectUserToBlog}
                      date={blogData.date}
                    />
                  </SwiperSlide>
                </>
              );
            })}
            
        </Swiper>
      }

    </div>
  )
}

export default BlogCardCarousel