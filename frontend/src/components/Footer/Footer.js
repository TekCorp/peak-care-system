import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { scrollToTopOnClickFN } from "../Utils/ScrollToTop";
import { useLanguageContent } from "../Utils/MultilingialContent";

function Footer() {
  const GetLanguageContent = useLanguageContent()
  return (
    <>
      <div className="Footer-container py-5">
        <div className="container my-5">
          <div className="row gy-lg-0 gy-4">
            <div className="col-lg-3 col-md-6 text-lg-start text-center">
              <img
                src="/images/icons/peak-care-footer-logo.png"
                alt="logo"
                className="img-fluid footer-logo mb-2"
              />
              <h4 className="mb-3 color-white sub-heading">{GetLanguageContent?.home?.nav_footer?.quickContact}</h4>
              <h4 className="mb-3 color-light-blue sub-heading">
                <img
                  src="/images/icons/footer-phone-icon.png"
                  alt="phone icon"
                  className="img-fluid"
                />{" "}
                +359 898 436 561
              </h4>
              <p className="body-paragraph mt-4 color-font-grey">
                Stragite Str. 8, Bl. D, Ap. 39, 2770 <br></br>Bansko, Bulgaria
              </p>
            </div>

            <div className="col-lg-2 col-md-6 text-lg-start text-center">
              <h4 className="sub-heading mb-4 color-white">
                {GetLanguageContent?.home?.nav_footer?.firstLinkTitle}
              </h4>

              <div className="d-flex flex-column gap-3 menu-list">
                {GetLanguageContent?.home?.nav_footer?.nav?.map((links) => {
                  return (
                    <li className="color-white">
                      <NavLink
                        to={links?.ref}
                        className="anchor "
                        exact
                        activeClassName="active"
                      >
                        {links?.text}
                      </NavLink>
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-2 col-md-6 text-lg-start text-center pt-4 pt-lg-0">
              <h4 className="sub-heading mb-4 color-white">
                {GetLanguageContent?.home?.nav_footer?.secondLinkTitle}
              </h4>

              <div className="d-flex flex-column gap-3 menu-list">
                {GetLanguageContent?.home?.nav_footer?.service?.map(
                  (links) => {
                    return (
                      <li className="color-white">
                        <NavLink
                          to={links?.ref}
                          className="anchor "
                          exact
                          activeClassName="active"
                        >
                          {links?.text}
                        </NavLink>
                      </li>
                    );
                  }
                )}
              </div>
            </div>
            <div className="col-lg-2 col-md-6 text-lg-start text-center pt-4 pt-lg-0">
              <h4 className="sub-heading mb-4 color-white">
                {GetLanguageContent?.home?.nav_footer?.thirdLinkTitle}
              </h4>

              <div className="d-flex flex-column gap-3 menu-list">
                {GetLanguageContent?.home?.nav_footer?.footer?.map(
                  (links) => {
                    return (
                      <li className="color-white">
                        <NavLink
                          to={links?.ref}
                          className="anchor "
                          exact
                          activeClassName="active"
                        >
                          {links?.text}
                        </NavLink>
                      </li>
                    );
                  }
                )}
              </div>
            </div>

            <div className="col-lg-3 text-lg-end text-center pt-lg-0 pt-3">
              <div className="d-flex align-items-center justify-content-center gap-2 social-icons mb-3">
                <img src="/images/icons/footer-fb-icon.png" alt="facebook" />
                <img src="/images/icons/footer-insta-icon.png" alt="facebook" />
                <img src="/images/icons/footer-x-icon.png" alt="facebook" />
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center">
                <button className="genral-btn mb-4 bg-green ">
                  {GetLanguageContent?.home?.nav_footer?.btnText}
                </button>
              </div>
            </div>
          </div>

          <div className="w-100 pt-lg-0 pt-3">
            <h4 className="mb-3 color-white sub-heading text-lg-start text-center">
              <img
                src="/images/icons/footer-loc-icon.png"
                alt="location icon"
                className="img-fluid"
              />{" "}
              {GetLanguageContent?.home?.nav_footer?.directionText}
            </h4>
          </div>
        </div>
      </div>
      <div className="container Footer-bottom py--lg-3 py-2">
        <div className="col-12">
          <div className="d-flex flex-lg-row flex-column-reverse gap-2 align-items-center justify-content-between py-3">
            <p className="mb-0 body-paragraph color-font-grey mt-lg-0 mt-3">
              © 2025 . all rights reserved.
            </p>
            <div className="d-flex align-items-center gap-3">
              <img
                src="/images/icons/footer-payment-icons.png"
                alt="payment icon"
                className="img-fluid"
              />
              <img
                src="/images/icons/footer-scroll-icon.png"
                alt="arrow icon"
                className="img-fluid arrow-up-btn"
                onClick={() => {
                  scrollToTopOnClickFN();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
