import React, { useEffect, useState } from "react";
import "./LeadPopupForm.css";
import Modal from "../Modal/Modal";
import { useLanguageContent } from "../Utils/MultilingialContent";

function LeadPopupForm() {
  const [showLeadFormPopup, setShowLeadFormPopup] = useState(false);
  const [preferredChannel, setPreferredChannel] = useState("");

  useEffect(() => {
    const popupShown = localStorage.getItem("leadPopupShown");

    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowLeadFormPopup(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowLeadFormPopup(false);
    localStorage.setItem("leadPopupShown", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const GetLanguageContent = useLanguageContent();
  return (
    <Modal status={showLeadFormPopup} closeModal={handleClose}>
      <div className="lead-popup-form-container p-4 pb-0">
        <div className="row">
          <div className="col-lg-6 py-2">
            <div className="">
              <h3 className="secondary-body-heading ps-4">
                {GetLanguageContent?.leadForm?.Title}
              </h3>
              <div className="d-flex flex-row align-items-end ps-4 pb-3 pt-2">
                <h2 className="body-heading mb-0">10%</h2>
                <div className="off-container px-3 py-1">
                  <h5 className="mb-0 font-DM-sans">
                    {GetLanguageContent?.leadForm?.offText}
                  </h5>
                </div>
              </div>
              <div className="bg-blue py-2">
                <h3 className="secondary-body-heading ps-4 color-white mb-0">
                  {GetLanguageContent?.leadForm?.blueBgText}
                </h3>
              </div>
              <p className="body-paragraph py-4 ps-4">
                {GetLanguageContent?.leadForm?.Subtitle}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="pb-3 pt-2 ps-4">
                  <input
                    type="text"
                    className="input-field"
                    required
                    placeholder={
                      GetLanguageContent?.leadForm?.RequiredFields[0]
                    }
                  />
                </div>
                <div className="pb-3 pt-2 ps-4">
                  <input
                    type="text"
                    className="input-field"
                    required
                    placeholder={
                      GetLanguageContent?.leadForm?.RequiredFields[1]
                    }
                  />
                </div>
                {(preferredChannel == "Voice Assistant [call recording]" ||
                  preferredChannel == "Гласов асистент [запис на разговор]" ||
                  preferredChannel == "VoiceAgent [Anrufaufzeichnung]") && (
                  <div className="pb-3 pt-2 ps-4">
                    <input
                      type="text"
                      className="input-field"
                      required
                      placeholder={GetLanguageContent?.leadForm?.PhoneHeading}
                    />
                  </div>
                )}
                <div className="pb-3 pt-2 ps-4">
                  <input
                    type="email"
                    className="input-field"
                    required
                    placeholder={
                      GetLanguageContent?.leadForm?.RequiredFields[2]
                    }
                  />
                </div>
                <div className="pb-3 pt-2 ps-4">
                  <select className="input-field" required defaultValue="">
                    <option value="" disabled style={{ display: "none" }}>
                      {GetLanguageContent?.leadForm?.ConsultationTypeHeading}
                    </option>
                    {GetLanguageContent?.leadForm?.ConsultationType.map(
                      (ele) => {
                        return <option value={ele}>{ele}</option>;
                      }
                    )}
                  </select>
                </div>
                <div className="pb-3 pt-2 ps-4">
                  <select
                    className="input-field"
                    required
                    defaultValue=""
                    value={preferredChannel}
                    onChange={(e) => setPreferredChannel(e.target.value)}
                  >
                    <option value="" disabled style={{ display: "none" }}>
                      {GetLanguageContent?.leadForm?.PreferredChannelHeading}
                    </option>
                    {GetLanguageContent?.leadForm?.PreferredChannel.map(
                      (ele) => {
                        return <option value={ele}>{ele}</option>;
                      }
                    )}
                  </select>
                </div>
                <div className="pb-3 pt-2 ps-4">
                  <select className="input-field" required defaultValue="">
                    <option value="" disabled style={{ display: "none" }}>
                      {GetLanguageContent?.leadForm?.LanguageHeading}
                    </option>
                    {GetLanguageContent?.leadForm?.Language.map((ele) => {
                      return <option value={ele}>{ele}</option>;
                    })}
                  </select>
                </div>
                <div className="d-flex gap-2 align-items-center py-2 pt-0 ps-4">
                  <input
                    type="checkbox"
                    className="agree-policy-checkbox"
                    required
                  />
                  <p className="body-paragraph agree-checkbox-text mb-0">
                    {GetLanguageContent?.leadForm?.Consent}
                  </p>
                </div>

                <div className="d-flex flex-row align-items-center gap-3 py-3 ps-4">
                  <button className="genral-btn bg-green" type="submit">
                    {GetLanguageContent?.leadForm?.CTA}
                  </button>
                  <p className="anchor-text">
                    {GetLanguageContent?.leadForm?.rejectionBtnText}
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-between align-items-end">
            <img
              src="/images/icons/popup-cross-btn-icon.png"
              className="img-fluid cross-btn"
              alt="side"
              onClick={handleClose}
            />
            <img
              src="/images/creatives/lead-form-side-image.png"
              className="img-fluid"
              alt="side"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LeadPopupForm;
