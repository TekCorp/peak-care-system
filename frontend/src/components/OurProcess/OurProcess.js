import React from "react";
import "./OurProcess.css";
import { useLanguageContent } from "../Utils/MultilingialContent";

function OurProcess() {
  const GetLanguageContent = useLanguageContent()
  return (
    <div className="OurProcess-container standard-padding-space">
      <div className="container">
        <div className="main-heading-container mb-lg-2 mb-4">
          <h4 className="bg-font-heading d-lg-block d-none">{GetLanguageContent?.home?.process?.fadeHeading}</h4>
          <div className="ovelaying-heading">
            <h6 className="sub-heading mb-lg-0 mb-3">{GetLanguageContent?.home?.process?.title}</h6>
            <h3 className="secondary-body-heading main-heading">
              {GetLanguageContent?.home?.process?.heading}
            </h3>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 px-3 justify-content-center">
        <img
          src="/images/creatives/our-process.png"
          className="img-fluid process-img"
          alt="process cards"
        />
      </div>
    </div>
  );
}

export default OurProcess;
