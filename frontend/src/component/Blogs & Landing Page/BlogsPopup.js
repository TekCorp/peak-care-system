import React, { useEffect, useState } from "react";
import Popup from "../PortfolioSec_/Popup";
import $ from "jquery";
import axios from "axios";
import { Settings } from "../../inc/Settings";
import { Form, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const BlogsPopup = ({ blogsDetails, editMode, reloadBlogs, id }) => {

  // 
  const [anchorValue,setAnchorValue]= useState("")
  const [anchorHref,setAnchorHref]= useState("")
  const [cusImg , setCusImg] = useState("")
  const [metaTit,setMetaTit] = useState("")
  const [metaDesc,setMetaDesc] = useState("")

  const [uploading, setUploading] = useState(false);
  const [blogsData, setBlogsData] = useState({
    title: "",
    slug_url: "",
    brief_paragraph: "",
    blog_image: "",
    published_date: "",
    category: 1,
    blogs_content: [
      {
        heading: "",
        paragraph: "",
      },
      {
        heading: "",
        paragraph: "",
      },
      {
        heading: "",
        paragraph: "",
      },
      {
        heading: "",
        paragraph: "",
      },
      {
        heading: "",
        paragraph: "",
      },
      {
        heading: "",
        paragraph: "",
      },
      {
        heading: "",
        paragraph: "",
      },
      {
        heading: "",
        paragraph: "",
      },
      {
        heading: "",
        paragraph: "",
      },
      {
        heading: "",
        paragraph: "",
      },
    ],
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  useEffect(() => {
    getBlogsById();
    getAllCategories();
  }, []);

  let getBlogByIdCalled = false;
  let categoryAPICalled = false;

  const getBlogsById = () => {
    if (getBlogByIdCalled) return;
    getBlogByIdCalled = true;

    if (!id && !editMode) {
      setLoading(false);
      return;
    }

    setLoading(true);
    axios
      .get(`/single-blog/${id}`, {})
      .then((res) => {
        if (res.data.status === "success") {
          setLoading(false);
          setBlogsData(res.data.data);
          setMetaTit(res.data.data.metaTitle)
          setMetaDesc(res.data.data.metaDescription)
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const getAllCategories = () => {
    if (categoryAPICalled) return;
    categoryAPICalled = true;

    axios
      .get("/api/categories", {})
      .then((res) => {
        if (res.data.status === "success") {
          setCategories(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // onChange handlers,

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogsData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDropdownChange = (event) => {
    const { name, value } = event.target;
    setBlogsData((prevFormData) => ({
      ...prevFormData,
      [name]: parseInt(value),
    }));
  };

  const BannerImageHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = { headers: {authorization : `Bearer ${userInfo.token}`, "Content-Type": "multipart/form-data" } };
      // const { data } = await axios.post("/api/backup-files/upload_files", formData, config);
      const { data } = await axios.post("/api/upload", formData, config);
      setBlogsData((prevState) => {
        return {
          ...prevState,
          blog_image: data,
        };
      });
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const handleContentChange = (event, index) => {
    const { name, value } = event.target;
    setBlogsData((prevBlogsData) => {
      const updatedContent = [...prevBlogsData.blogs_content];
      updatedContent[index] = {
        ...updatedContent[index],
        [name]: value,
      };
      return {
        ...prevBlogsData,
        blogs_content: updatedContent,
      };
    });
  };

  const PopupCloseHandler = () => {
    blogsDetails((prevState) => {
      return {
        ...prevState,
        openPopup: false,
        id: null,
      };
    });
    $("html").removeClass("rs_popup_open");
  };

  // ------

  const PutAPICall = () => {
    axios
      .put(`/blogs/${id}`, {
        ...blogsData,
        metaTitle:metaTit,
        metaDescription:metaDesc,
        blogs_content: blogsData.blogs_content.filter(
          (obj) => obj.heading !== "" && obj.paragraph !== ""
        ),
      })
      .then((res) => {
        if (res.data.status === "success") {
          Settings.alert(res.data.message);
          PopupCloseHandler();
          reloadBlogs();
        }
      })
      .catch((err) => {
        Settings.alert(err.response.data.message, "failure");
      });
  };

  const PostAPICall = () => {
    axios
      .post(`/blogs`, {
        ...blogsData,
        metaTitle:metaTit,
        metaDescription:metaDesc,
        blogs_content: blogsData.blogs_content.filter(
          (obj) => obj.heading !== "" && obj.paragraph !== ""
        ),
      })
      .then((res) => {
        if (res.data.status === "success") {
          Settings.alert(res.data.message);
          PopupCloseHandler();
          reloadBlogs();
        }
      })
      .catch((err) => {
        Settings.alert(err.response.data.error, "failure");
      });
  };

  const SubmitHandler = () => {
    if (editMode && id) PutAPICall();
    if (!editMode && !id) PostAPICall();
  };




  function copyInputValue(inputId) {
    const inputElement = document.getElementById(inputId);

    // Check if the input element exists
    if (inputElement) {
        // Select the text in the input element
        inputElement.select();

        document.execCommand('copy');

        inputElement.setSelectionRange(0, 0);

        console.log(`Value "${inputElement.value}" copied to clipboard.`);
    } else {
        console.error(`Input element with ID "${inputId}" not found.`);
    }
}
const addParagraph = ()=>{
  let currData = blogsData.blogs_content;
  currData.push({
    heading: "",
    paragraph: "",
  })
  setBlogsData((prev)=>{
    return (
      {
        ...prev,
        blogs_content:currData
      }
    )
  })
}

  return (
    <Popup
      className="popup-blog-details"
      autoOpen={true}
      width="auto"
      onClose={PopupCloseHandler}
    >
      <div className="popup_blog_view">
        <div className="blogs_closing">
          <h2 className="h2_main">Blogs Upload</h2>
          <button onClick={PopupCloseHandler}>
            <span>
              <img src="/images/icons/cancel.svg" alt='icon'/>
            </span>
          </button>
        </div>

        <div className="blog_fields">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="uploader_banner">
                <p>Upload Banner Image</p>

                <Form.Control
                  type="text"
                  placeholder="Enter Image URL"
                  value={blogsData.blog_image}
                  onChange={(e) =>
                    setBlogsData((prevState) => {
                      return {
                        ...prevState,
                        blog_image: e.target.value,
                      };
                    })
                  }
                ></Form.Control>
                <Form.Control
                  type="file"
                  id="image-file"
                  label="Choose File"
                  custom
                  onChange={BannerImageHandler}
                ></Form.Control>
                {uploading && <Spinner />}

              </div>

              {/* <input
              value={`<a href="${anchorHref}" >${anchorValue}</a>`}
              onChange={()=>{}}
              className="mt-4"
              id="anchorInp"
              />
              <button onClick={()=>{copyInputValue("anchorInp")}} style={{marginLeft:"2px"}}>copy</button>
              <input
                type="text"
                value={anchorHref}
                onChange={(e)=>{setAnchorHref(e.target.value)}}
                placeholder="anchore href"
              />
              <input
                type="text"
                value={anchorValue}
                onChange={(e)=>{setAnchorValue(e.target.value)}}
                placeholder="anchore text"
              />

              <input
              value={`<img class="img-fluid" src="${cusImg}" alt='icon'/>`}
              onChange={()=>{}}
              className="mt-4"
              id="imageInp"
              />
              <button onClick={()=>{copyInputValue("imageInp")}} style={{marginLeft:"2px"}}>copy</button>
              
              <input
                type="text"
                value={cusImg}
                onChange={(e)=>{setCusImg(e.target.value)}}
                placeholder="image link"
              /> */}

              <input
              value={metaTit}
              onChange={(e)=>{setMetaTit(e.target.value)}}
              className="mt-4"
              id="meta title"
              placeholder="meta title"
              />
              
              
              <input
                type="text"
                value={metaDesc}
                onChange={(e)=>{setMetaDesc(e.target.value)}}
                placeholder="meta description"
              />
            </div>
            <div className="col-lg-8 col-12">
              {loading ? (
                <Spinner
                  style={{ color: "#A1845D", width: "120px", height: "120px" }}
                />
              ) : (
                <div className="input_fields_blogs">
                  <div className="d-flex flex-column">
                    <input
                      placeholder="Title"
                      name="title"
                      value={blogsData.title}
                      onChange={handleInputChange}
                    />
                    <input
                      placeholder="Slug URL"
                      name="slug_url"
                      value={blogsData.slug_url}
                      onChange={handleInputChange}
                    />
                    <textarea
                      placeholder="Brief Paragraph"
                      name="brief_paragraph"
                      value={blogsData.brief_paragraph}
                      onChange={handleInputChange}
                    />
                    <Form.Group className="mb-3" controlId="category">
                      <Form.Select
                        type="text"
                        name="category"
                        value={blogsData.category}
                        onChange={handleDropdownChange}
                      >
                        {categories
                          .filter((item) => item.category !== "All")
                          .map((item) => {
                            return (
                              <option value={item.category_id}>
                                {item.category}
                              </option>
                            );
                          })}
                      </Form.Select>
                    </Form.Group>
                    <input
                      placeholder="Published Date"
                      name="published_date"
                      value={blogsData.published_date}
                      onChange={handleInputChange}
                    />
                  </div>

                  {blogsData.blogs_content.map((content, index) => (
                    <div className="d-flex flex-column" key={index}>
                      <input
                        className="placeholder-with-asterisk"
                        placeholder={`Heading ${index + 1}`}
                        name={`heading`}
                        value={content.heading}
                        onChange={(e) => handleContentChange(e, index)}
                      />
                      <textarea
                        placeholder={`Paragraph ${index + 1}`}
                        name={`paragraph`}
                        value={content.paragraph}
                        onChange={(e) => handleContentChange(e, index)}
                      />
                    </div>
                  ))}
                  <button 
                    className=""
                    style={{width:"100%",padding:"10px",border:"1px solid black"}}
                    onClick={addParagraph}
                    >
                     +  Add Paragraph
                    </button>
                </div>
              )}
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="action_btns">
                <button onClick={SubmitHandler} className="submit">
                  {editMode ? "Save" : "Upload"}
                </button>
                <button onClick={PopupCloseHandler} className="discard">
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default BlogsPopup;
