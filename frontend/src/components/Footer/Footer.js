import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="Footer-container py-5">
        <div className="container my-5">
          <div className="row gy-lg-0 gy-4">
            <div className="col-lg-4  text-lg-start text-center">
              <img
                src="/images/icons/peak-care-footer-logo.png"
                alt="logo"
                className="img-fluid footer-logo mb-2"
              />
              <h4 className="mb-3 color-white sub-heading">Quick Contact:</h4>
              <h4 className="mb-3 color-light-blue sub-heading">
                <img
                  src="/images/icons/footer-phone-icon.png"
                  alt="phone icon"
                  className="img-fluid"
                />{" "}
                0123456789
              </h4>
              <p className="body-paragraph mt-4 color-white">
                2307 Beverley Rd Brooklyn, New York 11226 United States.
              </p>
              <h4 className="mb-3 color-white sub-heading">
                <img
                  src="/images/icons/footer-loc-icon.png"
                  alt="location icon"
                  className="img-fluid"
                />{" "}
                Get Directions
              </h4>
            </div>

            <div className="col-lg-2 text-lg-start text-center">
              <h4 className="sub-heading mb-4 color-white">Company:</h4>

              <div className="d-flex flex-column gap-3 menu-list">
                <li className="color-white">
                  <NavLink
                    to={"/"}
                    className="anchor"
                    exact
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="color-white">
                  <NavLink
                    to={"/"}
                    className="anchor"
                    exact
                    activeClassName="active"
                  >
                    Leadership Team
                  </NavLink>
                </li>
                <li className="color-white">
                  <NavLink
                    to={"/"}
                    className="anchor"
                    exact
                    activeClassName="active"
                  >
                    News & Media
                  </NavLink>
                </li>
                <li className="color-white">
                  <NavLink
                    to={"/"}
                    className="anchor"
                    exact
                    activeClassName="active"
                  >
                    How it Works
                  </NavLink>
                </li>
                <li className="color-white">
                  <NavLink
                    to={"/contact"}
                    className="anchor"
                    exact
                    activeClassName="active"
                  >
                    Contacts
                  </NavLink>
                </li>
              </div>
            </div>
            <div className="col-lg-2 text-lg-start text-center">
              <h4 className="sub-heading mb-4 color-white">Services:</h4>

              <div className="d-flex flex-column gap-3 menu-list">
                <li className="color-white">
                  <NavLink
                    to={"/"}
                    className="anchor"
                    exact
                    activeClassName="active"
                  >
                    Mould Remediation
                  </NavLink>
                </li>
                <li className="color-white">
                  <NavLink
                    to={"/"}
                    className="anchor"
                    exact
                    activeClassName="active"
                  >
                    Waterproofing Services
                  </NavLink>
                </li>
                <li className="color-white">
                  <NavLink
                    to={"/"}
                    className="anchor"
                    exact
                    activeClassName="active"
                  >
                    Soundproofing Solutions
                  </NavLink>
                </li>
                <li className="color-white">
                  <NavLink
                    to={"/"}
                    className="anchor"
                    exact
                    activeClassName="active"
                  >
                    DIY Product Sales (Coming Soon)
                  </NavLink>
                </li>
              </div>
            </div>

            <div className="col-lg-1 col-0"></div>

            <div className="col-lg-3 text-lg-end text-center">
              <div className="d-flex align-items-center justify-content-lg-end justify-content-center gap-2 social-icons mb-3">
                <img src="/images/icons/footer-fb-icon.png" alt="facebook" />
                <img src="/images/icons/footer-insta-icon.png" alt="facebook" />
                <img src="/images/icons/footer-x-icon.png" alt="facebook" />
              </div>
              <button className="genral-btn mb-4 bg-green">
                Request An Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="col-12">
          <div className="d-flex flex-lg-row flex-column-reverse gap-2 align-items-center justify-content-between py-3">
            <p className="mb-0 body-paragraph">© 2025 . all rights reserved.</p>
            <img
              src="/images/icons/footer-payment-icons.png"
              alt="payment icon"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
