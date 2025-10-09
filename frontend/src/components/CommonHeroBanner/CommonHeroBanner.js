import React from "react";
import "./CommonHeroBanner.css";
import { Link, useLocation } from "react-router-dom";
import {useLanguageContent} from "../Utils/MultilingialContent"

function CommonHeroBanner({ heading = "", backgroundImage = "" }) {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x);
  const GetLanguageContent = useLanguageContent()

  const breadCrumbSlug ={
    home: GetLanguageContent?.breadCrumbSlug[0],
    about: GetLanguageContent?.breadCrumbSlug[1],
    contact : GetLanguageContent?.breadCrumbSlug[2]
  }

  return (
    <>
      <div
        className="CommonHeroBanner-container d-flex align-items-center jsutify-content-center text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <h3 className="fade-hero-heading">{heading}</h3>
        </div>
      </div>
      <div className="breadcrumb-section py-2">
        <div className="text-center d-flex justify-content-center align-items-center gap-2">
          <Link to="/" className="mb-0">
            {GetLanguageContent?.breadCrumbSlug[0]}
          </Link>
          {pathnames.map((value, index) => {
            const to = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;
            return (
              <p className="mb-0 d-flex justify-content-center align-items-center gap-2">
                <span>/</span>
                {isLast ? (
                  <p className="mb-0">
                    {breadCrumbSlug[value] || value}
                  </p>
                ) : (
                  <Link to={to}>
                    {breadCrumbSlug[value] || value}
                  </Link>
                )}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CommonHeroBanner;
