import React from "react";
import "./ContactUsForm.css";

function ContactUsForm() {
  return (
    <div className="ContactUsForm-container standard-padding-space my-lg-5 pb-lg-0  ">
      <div className="container ">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="contact-details">
              <h3 className="secondary-body-heading color-white">
                Contact Us Today
              </h3>
              <p className="body-paragraph color-white">
                Send us a message or call us for a free in-home quote.
              </p>

              <div className="details-list d-flex flex-column gap-3">
                <div className="list-item d-flex gap-3 col-12 col-sm-6 col-md-4 w-100 align-items-center">
                  <img
                    src={"/images/icons/contact-form-phone-icon.png"}
                    alt="icon"
                    className="img-fluid contact-list-icon"
                  />
                  <div className="d-flex flex-column ">
                    <h5 className="secondary-body-heading card-title color-white">
                      PHONE NUMBER
                    </h5>
                    <p className="body-paragraph color-white mb-0">
                      +359 898 436 561
                    </p>
                  </div>
                </div>
                <div className="list-item d-flex gap-3 col-12 col-sm-6 col-md-4 w-100 align-items-center">
                  <img
                    src={"/images/icons/contact-form-loc-icon.png"}
                    alt="icon"
                    className="img-fluid contact-list-icon"
                  />
                  <div className="d-flex flex-column">
                    <h5 className="secondary-body-heading card-title color-white">
                      OUR LOCATION
                    </h5>
                    <p className="body-paragraph color-white mb-0">
                      Stragite Str. 8, Bl. D, Ap. 39, 2770 Bansko, Bulgaria
                    </p>
                  </div>
                </div>
                <div className="list-item d-flex gap-3 col-12 col-sm-6 col-md-4 w-100 align-items-center">
                  <img
                    src={"/images/icons/contact-form-email-icon.png"}
                    alt="icon"
                    className="img-fluid contact-list-icon"
                  />
                  <div className="d-flex flex-column">
                    <h5 className="secondary-body-heading card-title color-white">
                      EMAIL ADDRESS
                    </h5>
                    <p className="body-paragraph color-white mb-0">
                      peakcare.bg@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="contact-form p-4 py-5">
              <div className="text-content mb-4">
                <h4 className="sub-heading color-green">GET IN TOUCH</h4>
                <h3 className="secondary-body-heading">SEND US A MESSAGE</h3>
              </div>
              <div className="form-container d-flex flex-column gap-3">
                <input
                  className="inp-field w-100"
                  type="text"
                  placeholder="Name"
                />
                <div className="d-flex flex-lg-row flex-column gy-3 gap-3">
                  <input
                    className="inp-field w-100"
                    type="text"
                    placeholder="Phone"
                  />
                  <input
                    className="inp-field w-100"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <input
                  className="inp-field w-100"
                  type="text"
                  placeholder="Select your city"
                />
                <textarea
                  className="inp-field w-100"
                  type="text"
                  placeholder="Message"
                  rows={5}
                ></textarea>

                <button className="genral-btn bg-green ">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
