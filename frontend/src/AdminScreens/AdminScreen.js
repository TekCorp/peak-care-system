import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/actions/userActions";
import { Helmet } from "react-helmet";

const AdminScreen = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history("/login");
    }
  }, [dispatch, history, userInfo]);

  const logoutHandler = () => {
    dispatch(logout());
    window.location.reload(false);
  };

  return (
    <Fragment>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
    <div
      style={{ width: "100%", height: "100vh", paddingTop: "120px" }}
      className="d-flex justify-content-center align-items-start"
    >
      <div className="container">
        <div className="row pb-3">
          <div className="col">
            <h1 className="h1_main">Profile</h1>
          </div>
          <div className="col d-flex justify-content-end">
            <button
              style={{ width: "70%", maxWidth: "200px" }}
              onClick={logoutHandler}
              className="button_main"
            >
              Logout
            </button>
          </div>
        </div>
        <h1 className="heading_capital">
          <span>Admin Portal</span>
        </h1>
        <h2 className="h2_main pt-3 pb-3">Please Select an option:</h2>
        {/* <Link  to="/admin/casestudy">
         Case Study 
        </Link> */}
        <br />
        <Link  to="/admin/blogs">
          Blogs
        </Link>
        <br />
        <Link className="h3_main" to="/admin/location-pages">
          Location Pages
        </Link>
        
      </div>
    </div>
    </Fragment>
  );
};
export default AdminScreen;
