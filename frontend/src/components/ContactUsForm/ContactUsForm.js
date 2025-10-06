import React, { useState } from "react";
import "./ContactUsForm.css";
import { useLanguageContent } from "../Utils/MultilingialContent";

function ContactUsForm({ contactUsFormFields = false }) {
  const [preferredChannel, setPreferredChannel] = useState("");
  const GetLanguageContent = useLanguageContent();
  return (
    <div className="ContactUsForm-container standard-padding-space my-lg-5 pb-lg-0  ">
      <div className="container ">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="contact-details">
              <h3 className="secondary-body-heading color-white font-oswald">
                {GetLanguageContent?.home?.contact?.title}
              </h3>
              <p className="body-paragraph color-white mt-3 mb-4">
                {GetLanguageContent?.home?.contact?.subline}
              </p>

              <div className="details-list d-flex flex-column gap-4">
                <div className="list-item d-flex gap-3 col-12 col-sm-6 col-md-4 w-100 align-items-center">
                  <img
                    src={"/images/icons/contact-form-phone-icon.png"}
                    alt="icon"
                    className="img-fluid contact-list-icon"
                  />
                  <div className="d-flex flex-column ">
                    <h5 className="secondary-body-heading card-title color-white font-oswald">
                      {GetLanguageContent?.home?.contact?.channels[0]}
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
                    <h5 className="secondary-body-heading card-title color-white font-oswald">
                      {GetLanguageContent?.home?.contact?.channels[1]}
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
                    <h5 className="secondary-body-heading card-title color-white font-oswald">
                      {GetLanguageContent?.home?.contact?.channels[2]}
                    </h5>
                    <p className="body-paragraph color-white mb-0">
                      peakcare.bg@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {contactUsFormFields ? (
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="contact-form p-4 py-5 pt-4">
                <div className="text-content mb-4">
                  <h4 className="sub-heading color-green font-oswald">
                    {GetLanguageContent?.home?.contact?.form?.subHeading}
                  </h4>
                  <h3 className="secondary-body-heading font-oswald pb-2">
                    {GetLanguageContent?.contact?.form?.headline}
                  </h3>
                  <p className="body-paragraph pb-2">
                    {GetLanguageContent?.contact?.form?.copy}
                  </p>
                </div>

                <div className="form-container d-flex flex-column gap-3">
                 
                  <div className="d-flex flex-lg-row flex-column gy-3 gap-3">
                    <input
                      className="inp-field w-100"
                      type="text"
                      placeholder={
                        GetLanguageContent?.contact?.form?.fields[0]?.label
                      }
                      required
                    />
                    <input
                      className="inp-field w-100"
                      type="text"
                      placeholder={
                       GetLanguageContent?.contact?.form?.fields[1]?.label
                      }
                      required
                    />
                  </div>
                  <input
                    className="inp-field w-100"
                    type="email"
                    placeholder={
                      GetLanguageContent?.contact?.form?.fields[2]?.label
                    }
                    required
                  />
                  {(preferredChannel == "voiceagent" ||
                  preferredChannel == "Гласов асистент [запис на разговор]" ||
                  preferredChannel == "VoiceAgent [Anrufaufzeichnung]") && (
                    <input
                    className="inp-field w-100"
                    type="text"
                    placeholder={
                      GetLanguageContent?.contact?.form?.fields[3]?.label
                    }
                    required
                    />
                  )}
                  <input
                    className="inp-field w-100"
                    type="text"
                    placeholder={
                      GetLanguageContent?.contact?.form?.fields[4]?.label
                    }
                    required
                  />

                  <select className="inp-field w-100" defaultValue="">
                    <option value="" disabled hidden>
                      {GetLanguageContent?.contact?.form?.selects[0]?.label}
                    </option>
                    {GetLanguageContent?.contact?.form?.selects[0]?.options?.map(
                      (option) => (
                        <option key={option?.value} value={option?.value}>
                          {option?.label}
                        </option>
                      )
                    )}
                  </select>
                  <select className="inp-field w-100" defaultValue=""  value={preferredChannel}
                    onChange={(e) => setPreferredChannel(e.target.value)}>
                    <option value="" disabled hidden>
                      {GetLanguageContent?.contact?.form?.selects[1]?.label}
                    </option>
                    {GetLanguageContent?.contact?.form?.selects[1]?.options?.map(
                      (option) => (
                         <option key={option?.value} value={option?.value}>
                          {option?.label}
                        </option>
                      )
                    )}
                  </select>
                  <select className="inp-field w-100" defaultValue="">
                    <option value="" disabled hidden>
                      {GetLanguageContent?.contact?.form?.selects[2]?.label}
                    </option>
                    {GetLanguageContent?.contact?.form?.selects[2]?.options?.map(
                      (option) => (
                        <option key={option?.value} value={option?.value}>
                          {option?.label}
                        </option>
                      )
                    )}
                  </select>

                  <textarea
                    className="inp-field w-100"
                    type="text"
                    placeholder={
                      GetLanguageContent?.contact?.form?.fields[5]?.label
                    }
                    rows={5}
                  ></textarea>

                  <p className="body-paragraph mb-0 pt-2 note-text">
                    {" "}
                    <b>
                      {GetLanguageContent?.home?.contact?.form?.noteTitle}:
                    </b>{" "}
                    {GetLanguageContent?.home?.contact?.form?.note}
                  </p>

                  <div className="d-flex gap-2 align-items-center py-2 pt-0">
                    <input type="checkbox" className="agree-policy-checkbox" />
                    <p className="body-paragraph agree-checkbox-text mb-0">
                      {GetLanguageContent?.contact?.form?.fields[6]?.label}
                    </p>
                  </div>

                  <button className="genral-btn bg-green font-oswald">
                    {GetLanguageContent?.home?.contact?.form?.submitbtn}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="contact-form p-4 py-5 pt-4">
                <div className="text-content mb-4">
                  <h4 className="sub-heading color-green font-oswald">
                    {GetLanguageContent?.home?.contact?.form?.subHeading}
                  </h4>
                  <h3 className="secondary-body-heading font-oswald pb-2">
                    {GetLanguageContent?.home?.contact?.form?.headline}
                  </h3>
                  <p className="body-paragraph pb-2">
                    {GetLanguageContent?.home?.contact?.form?.copy}
                  </p>
                </div>

                <div className="form-container d-flex flex-column gap-3">
                  <input
                    className="inp-field w-100"
                    type="text"
                    placeholder={
                      GetLanguageContent?.home?.contact?.form?.fields[0]
                    }
                  />
                  <div className="d-flex flex-lg-row flex-column gy-3 gap-3">
                    <input
                      className="inp-field w-100"
                      type="email"
                      placeholder={
                        GetLanguageContent?.home?.contact?.form?.fields[1]
                      }
                    />
                    <input
                      className="inp-field w-100"
                      type="text"
                      placeholder={
                        GetLanguageContent?.home?.contact?.form?.fields[2]
                      }
                    />
                  </div>
                  <input
                    className="inp-field w-100"
                    type="text"
                    placeholder={
                      GetLanguageContent?.home?.contact?.form?.fields[3]
                    }
                  />

                  <select className="inp-field w-100" defaultValue="">
                    <option value="" disabled hidden>
                      {GetLanguageContent?.home?.contact?.form?.select_label}
                    </option>
                    {GetLanguageContent?.home?.contact?.form?.select_options?.map(
                      (option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      )
                    )}
                  </select>

                  <textarea
                    className="inp-field w-100"
                    type="text"
                    placeholder={
                      GetLanguageContent?.home?.contact?.form?.fields[4]
                    }
                    rows={5}
                  ></textarea>

                  <p className="body-paragraph mb-0 pt-2 note-text">
                    {" "}
                    <b>
                      {GetLanguageContent?.home?.contact?.form?.noteTitle}:
                    </b>{" "}
                    {GetLanguageContent?.home?.contact?.form?.note}
                  </p>

                  <div className="d-flex gap-2 align-items-center py-2 pt-0">
                    <input type="checkbox" className="agree-policy-checkbox" />
                    <p className="body-paragraph agree-checkbox-text mb-0">
                      {GetLanguageContent?.home?.contact?.form?.consent_label}
                    </p>
                  </div>

                  <button className="genral-btn bg-green font-oswald">
                    {GetLanguageContent?.home?.contact?.form?.submitbtn}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
