import React from "react";
import styles from "./IdvBlogSec.module.css";
import "./Card.css"
import { useNavigate } from "react-router-dom";

const IdvBlogSec = ({ text, blogsData,recentBlogs,img }) => {

  const navigate = useNavigate()

  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (id) => {
    if (!id) return;
    let slug = convertToSlug(id);
    navigate(`/blog/${slug}`);
  };

  

  return (
    <div className={`${styles.main} main idvBlogMain`}>
      
      
      <div className="container">
        <div className="row gy-4 px-4">
        
        <img src={img} alt="blog thumbnail" style={{transform:"translateY(-60px)",width:"100%",position:"relative",zIndex:"0"}} className="mx-auto" />
            <div className="col-lg-12 mt-0">
              <div className={`para_main pt-0 pb-2 ${styles.para_main}`} style={{color:"black"}} dangerouslySetInnerHTML={{ __html: text }}></div>
              
                {blogsData.map((item) => (
                  <>
                    <h2 className="h2_main pb-2 body-heading" style={{color:"black",textTransform:"capatalize"}}>{item.heading}</h2>
                    <div className={`para_main pb-5 body-paragraph ${styles.para_main}`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
                  </>
                ))}
              
            </div>
        </div>
        
       
         
        </div>
      </div>
  );
};

export default IdvBlogSec;
