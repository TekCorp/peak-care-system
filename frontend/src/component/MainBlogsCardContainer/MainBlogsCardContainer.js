import React,{useState,useEffect} from "react";
import "./MainBlogsCardContainer.css"
import CardBox from "./CardBox";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Spinner } from "react-bootstrap";



function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    const lastSpaceIndex = text.lastIndexOf(' ', maxLength - 4);
    return text.substring(0, lastSpaceIndex) + '...';
  }
  return text;
}

let defaultBlogObj = []

function MainBlogsCardContainer({
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
            setBlogs((prev)=>[...prev,...prev,...prev,...prev,...prev,...prev,...prev,...prev])
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
    <div className='MainBlogCard-container container standard-padding-space'>
      <div className="blog-upper-content">
        <div className="container">
          
        </div>
      </div>
      {
        loading ?
        <Spinner style={{color:"black"}}></Spinner>
        :
        <div
            className="row mx-0 w-100 px-2 gy-3"
            >
            {blogs.map((blogData,ind)=>{
              return (
                <>
                  <div key={ind} className="col-lg-4 px-2">
                    <CardBox
                      className="h-100"
                      cardImg={blogData.blog_creative}
                      title={blogData.main_heading}
                      readMoreRef={blogData.slug_url}
                      content={truncateText(blogData.paragraph, 90)}
                      redirection={redirectUserToBlog}
                      date={blogData.date}
                    />
                  </div>
                </>
              );
            })}
            
        </div>
      }

    </div>
  )
}

export default MainBlogsCardContainer