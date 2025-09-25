import React from "react";
import "./ImageByTextContent.css";

const problemBoxList = [
  "Wall is damp, smells musty",
  "Cold air leaks into rooms",
  "Water seeping in after rain",
  "Can’t sleep due to outside noise",
  "Cracks appear in the wall paint",
];

const correctBoxList = [
  "Mould removed using non-toxic treatment",
  "Installed insulation saves on energy bills",
  "Internal waterproofing without digging",
  "Customized soundproofing, room-by-room",
  "Moisture-proofing with protective barrier",
];

function ImageByTextContent({
  mainHeading = "",
  content = "",
  sideImage = "",
  shiftRowDirection = false,
}) {
  return (
    <div className="ImageByTextContent-container standard-padding-space">
      <div className="container">
        <div
          className={`row align-items-center ${
            shiftRowDirection ? "flex-row-reverse" : ""
          }  gy-4`}
        >
          <div className="col-lg-6">
            <img src={sideImage} alt="content side" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h3 className="secondary-body-heading">{mainHeading}</h3>
            <p className="body-paragraph">{content}</p>
            <div className="list-box p-3 pt-4 my-4">
              <h5 className="secondary-body-heading card-title">
                The Problem:
              </h5>
              <div className="content-list">
                {problemBoxList.map((point) => {
                  return (
                    <div className="d-flex align-items-center gap-2 list-item my-2">
                      <img
                        src="/images/icons/cross-content-icon.png"
                        alt="cross icon"
                        className="img-fluid"
                      />
                      <p className="body-paragraph mb-0">{point}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="list-box p-3 pt-4">
              <h5 className="secondary-body-heading card-title">
                The Peakcare Solution::
              </h5>
              <div className="content-list">
                {correctBoxList.map((point) => {
                  return (
                    <div className="d-flex align-items-center gap-2 list-item my-2">
                      <img
                        src="/images/icons/check-content-icon.png"
                        alt="cross icon"
                        className="img-fluid"
                      />
                      <p className="body-paragraph mb-0">{point}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageByTextContent;
