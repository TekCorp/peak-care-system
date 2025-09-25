import React from "react";
import "./WhyUsList.css";

const gridListData = [
  {
    icons: "/images/icons/whyus-icon-1.png",
    title: "Permanent Solutions – Guaranteed",
    content:
      "We don’t just treat symptoms — we eliminate root causes. Enjoy peace of mind with up to 10 years of warranty on mould remediation and waterproofing.",
  },
  {
    icons: "/images/icons/whyus-icon-2.png",
    title: "Fast Turnaround",
    content:
      "Typical duration: 1–3 working days per room, depending on the area, root cause, and required drying. We respect your time and your space",
  },
  {
    icons: "/images/icons/whyus-icon-3.png",
    title: "Eco-Friendly Treatments",
    content:
      "We use approved, low-emission products and follow Safety Data Sheets (SDS) SDS are available for download on request",
  },
  {
    icons: "/images/icons/whyus-icon-4.png",
    title: "Transparent Pricing",
    content:
      "Know what you’re paying for — no hidden fees, no surprises. Get a free on-site analysis and a fixed-price offer.",
  },
  {
    icons: "/images/icons/whyus-icon-5.png",
    title: "Multilingual Support",
    content:
      "We serve you in English, Bulgarian, and German — for clear, confident communication. We serve you in English, Bulgarian, and German — for clear, confident communication.",
  },
  {
    icons: "/images/icons/whyus-icon-6.png",
    title: "Expertise You Can Trust",
    content:
      "Inspired by proven European methods (like VARIOSEAL and SchimmelPapst), our certified team ensures industry-standard quality every step of the way. ",
  },
];

function WhyUsList() {
  return (
    <div className="WhyUsList-container standard-padding-space">
      <div className="container">
        <div className="text-content">
          <div className="main-heading-container mb-lg-2 mb-4">
            <h4 className="bg-font-heading d-lg-block d-none">WHY US</h4>
            <h3 className="secondary-body-heading ovelaying-heading">
              Why Choose Peakcare?
            </h3>
          </div>
          <p className="body-paragraph text-center">
            We achieve lasting outcomes by fixing root causes and adding
            prevention. Every job includes moisture readings and a clear
            care/ventilation plan. If within 6 months a relevant moisture
            relapse or new mould appears in the treated area, we provide a free
            follow-up inspection with concrete
          </p>
        </div>

        <div className="list-grid row gy-2 gx-3 mt-5">
          {gridListData.map((list) => {
            return (
              <div className="list-item d-flex gap-3 col-12 col-sm-6 col-md-4">
                <img
                  src={list?.icons}
                  alt="icon"
                  className="img-fluid grid-list-icon"
                />
                <div className="d-flex flex-column ">
                  <h5 className="secondary-body-heading card-title">
                    {list?.title}
                  </h5>
                  <p className="body-paragraph">{list?.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyUsList;
