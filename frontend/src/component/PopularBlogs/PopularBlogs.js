import React,{useState,useEffect} from 'react'
import "./PopularBlogs.css"
import BlogCard from './BlogCard'
import PopularBlogCard from './PopularBlogCard'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {Spinner} from "react-bootstrap"


const blogsDummy = [
  {
    catagory: "Knowledge",
    date: "Apr 10, 2023",
    main_heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    blog_creative: "/images/creatives/blog-card-thumbnail.jpg",
    slug_url: "bloginner",
  },
  {
    catagory: "Knowledge",
    date: "Apr 10, 2023",
    main_heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    blog_creative: "/images/creatives/blog-card-thumbnail.jpg",
    slug_url: "bloginner",
  },
  {
    catagory: "Knowledge",
    date: "Apr 10, 2023",
    main_heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    blog_creative: "/images/creatives/blog-card-thumbnail.jpg",
    slug_url: "bloginner",
  },
  
];

const popularBlogDate = [
  {
    logo: "/images/creatives/popular-blog-thumbnail.jpg",
    blog_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "Apr 10, 2023",
    slug_url:"bloginner"
  },
  {
    logo: "/images/creatives/popular-blog-thumbnail.jpg",
    blog_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "Apr 10, 2023",
    slug_url:"bloginner"
  },
  {
    logo: "/images/creatives/popular-blog-thumbnail.jpg",
    blog_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "Apr 10, 2023",
    slug_url:"bloginner"
  },
  
];

let defaultBlogObj= [];

function PopularBlogs({selectedCatagory}) {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  let blogAPICalled = false;

  useEffect(() => {
    getAllBlogsListing();
    setCurrentPage(1)
  }, [selectedCatagory]);

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
            if(item.category == selectedCatagory || selectedCatagory == 0)
            {

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
            }
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
          defaultBlogObj = Updated_data_Blogs;
          setLoading(false);
        }
          
      })
      .catch((err) => {
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNewsData = blogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if(page <= (Math.ceil(blogs.length/itemsPerPage)))
    {
      setCurrentPage(page);
    }
    else{
      return
    }
  }

  return (
    <div className='popular-blog-container standard-padding-space'>
        {loading ? 
        (<div className="w-100 text-center mb-5">
          <Spinner
            style={{ color: "#A1845D", width: "120px", height: "120px" }}
          />
        </div>):(
        <div className='container'>
            <div className='row justify-content-between'>
                <div className='col-md-6 '>
                    

                    {
                        currentNewsData.map((ele)=>{
                            return(
                                <BlogCard
                                    title={ele.main_heading}
                                    content={ele.paragraph}
                                    img={ele.blog_creative}
                                    anchor={ele.slug_url}
                                    redirectionFunction={redirectUserToBlog}
                                    />)
                        })
                    }
                    

                </div>
                <div className='col-md-5 ' >
                    <div className='popular-card-container p-3'>
                    <h4 className='body-heading mb-4 mt-3 text-center text-xl-start' style={{fontSize:"20px" , color: "#1e1e1e" , fontWeight: 700}}>Most Popular Blogs</h4>
                    {
                        recentBlogs.map((ele)=>{
                            return(
                                <PopularBlogCard
                                img={ele.logo}
                                title={ele.blog_description}
                                anchor={ele.slug_url}
                                redirectionFunction={redirectUserToBlog}
                                />
                            )
                        })
                    }
                    </div>
                </div>
            </div>

            <div className="page-btn-container my-5 d-flex align-items-center justify-content-md-center justify-content-center  gap-3">
              
                 {[...Array(Math.ceil(blogs.length / itemsPerPage)).keys()].map((page) => {
                    if (page + 1 <= 3) {
                      return (
                        <button
                          key={page + 1}
                          className={currentPage === page + 1 ? 'active' : ''}
                          onClick={() => handlePageChange(page + 1)}
                        >
                          {page + 1}
                        </button>
                      );
                    } else {
                      return (
                        <button key="next" onClick={() => handlePageChange(currentPage + 1)}>
                          <img src="/images/icons/next-btn-icon.svg" className="next-icon" alt="arrow " />
                        </button>
                      );
                    }
                  })}
            </div>

        </div>)}
    </div>
  )
}

export default PopularBlogs