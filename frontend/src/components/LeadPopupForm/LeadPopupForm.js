import React, { useEffect, useState } from "react";
import "./LeadPopupForm.css";
import Modal from "../Modal/Modal";
import { useLanguageContent } from "../Utils/MultilingialContent";
import { validateForm } from "../Utils/ValidateForm";

function LeadPopupForm() {
  const [showLeadFormPopup, setShowLeadFormPopup] = useState(false);
  const [preferredChannel, setPreferredChannel] = useState("");
  const [formData, setFormData] = useState({});

  useEffect(() => {
  const formSubmitted = localStorage.getItem("leadFormSubmitted");
  const popupClosed = sessionStorage.getItem("leadPopupClosed");

  if (!formSubmitted && !popupClosed) {
    const delay = window.innerWidth < 996 ? 10000 : 3000;
    const timer = setTimeout(() => {
      setShowLeadFormPopup(true);
    }, delay);

    return () => clearTimeout(timer);
  }
}, []);

const handleClose = () => {
  setShowLeadFormPopup(false);
  sessionStorage.setItem("leadPopupClosed", "true");
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const formArray = [
      {
        name:"firstName",
        required:true,
        label:"First Name"
      },
      {
        name:"lastName",
        required:true,
        label:"Last Name"
      },
      ...(preferredChannel === "Voice Assistant [call recording]" ||
        preferredChannel === "Гласов асистент [запис на разговор]" ||
        preferredChannel === "VoiceAgent [Anrufaufzeichnung]"
        ? [
            {
              name: "phone",
              required: true, 
              label: "Phone",
            },
          ]
        : []),
      {
        name:"email",
        required:true,
        label:"Email"
      },
      {
        name:"consultingType",
        required:true,
        label:"Consulting Type"
      },
      {
        name:"prefferredChannel",
        required:true,
        label:"Prefferred Channel"
      },
      {
        name:"language",
        required:true,
        label:"Language"
      },
      {
        name:"agreePrivacyPolicy",
        required:true,
        label:"Agree Privacy Policy",
        consentField:true
      },
    ]
    const formValidated = validateForm(formArray,formData)
    if(formValidated)
    {
      setShowLeadFormPopup(false);
      localStorage.setItem("leadFormSubmitted", "true");
      sessionStorage.removeItem("leadPopupClosed");
    }
    
  };

  const GetLanguageContent = useLanguageContent();
  return (
    <Modal status={showLeadFormPopup} closeModal={handleClose}>
      <div className="lead-popup-form-container p-4 ps-0 pb-0">
        <div className="row">
          <div className="col-lg-6 py-2 ps-0">
            <div className="w-100 d-flex d-lg-none">
              <img
                src="/images/icons/popup-cross-btn-icon.png"
                className="img-fluid cross-btn ms-auto"
                alt="side"
                onClick={handleClose}
              />
            </div>
            <div className="">
              <h3 className="secondary-body-heading ps-5">
                {GetLanguageContent?.leadForm?.Title}
              </h3>
              <div className="d-flex flex-row align-items-end ps-5 pb-3 pt-2">
                <h2 className="body-heading mb-0">10%</h2>
                <div className="off-container px-3 py-1 ms-2">
                  <h5 className="mb-0 font-DM-sans sale-text">
                    {GetLanguageContent?.leadForm?.offText}
                  </h5>
                </div>
              </div>
              <div className="bg-blue py-2">
                <h3 className="secondary-body-heading ps-5 color-white mb-0">
                  {GetLanguageContent?.leadForm?.blueBgText}
                </h3>
              </div>
              <p className="body-paragraph py-4 ps-5">
                {GetLanguageContent?.leadForm?.Subtitle}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="pb-3 pt-2 ps-5">
                  <input
                    type="text"
                    className="input-field"
                    name="firstName"
                    placeholder={
                      GetLanguageContent?.leadForm?.RequiredFields[0]
                    }
                    value={formData?.firstName || ""}
                    onChange={(e)=>{setFormData((prev)=>{return {...prev,firstName:e.target.value}})}}
                  />
                </div>
                <div className="pb-3 pt-2 ps-5">
                  <input
                    type="text"
                    className="input-field"
                    name="lastName"
                    placeholder={
                      GetLanguageContent?.leadForm?.RequiredFields[1]
                    }
                    value={formData?.lastName || ""}
                    onChange={(e)=>{setFormData((prev)=>{return {...prev,lastName:e.target.value}})}}
                  />
                </div>
                {(preferredChannel == "Voice Assistant [call recording]" ||
                  preferredChannel == "Гласов асистент [запис на разговор]" ||
                  preferredChannel == "VoiceAgent [Anrufaufzeichnung]") && (
                  <div className="pb-3 pt-2 ps-5">
                    <input
                      type="text"
                      className="input-field"
                      name="phone"
                      placeholder={GetLanguageContent?.leadForm?.PhoneHeading}
                      value={formData?.phone || ""}
                      onChange={(e)=>{setFormData((prev)=>{return {...prev,phone:e.target.value}})}}
                    />
                  </div>
                )}
                <div className="pb-3 pt-2 ps-5">
                  <input
                    type="email"
                    className="input-field"
                    placeholder={
                      GetLanguageContent?.leadForm?.RequiredFields[2]
                    }
                    value={formData?.email || ""}
                    onChange={(e)=>{setFormData((prev)=>{return {...prev,email:e.target.value}})}}
                  />
                </div>
                <div className="pb-3 pt-2 ps-5">
                  <select className="input-field" defaultValue="" name="consultingType"
                    value={formData?.consultingType || ""}
                    onChange={(e)=>{setFormData((prev)=>{return {...prev,consultingType:e.target.value}})}}
                  >
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
                <div className="pb-3 pt-2 ps-5">
                  <select
                    className="input-field"
                    defaultValue=""
                    name="prefferredChannel"
                    value={formData?.prefferredChannel || ""}
                    onChange={(e)=>{setFormData((prev)=>{setPreferredChannel(e.target.value); return {...prev,prefferredChannel:e.target.value}})}}
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
                <div className="pb-3 pt-2 ps-5">
                  <select className="input-field" defaultValue="" name="language"
                    value={formData?.language || ""}
                    onChange={(e)=>{setFormData((prev)=>{return {...prev,language:e.target.value}})}}
                  >
                    <option value="" disabled style={{ display: "none" }}>
                      {GetLanguageContent?.leadForm?.LanguageHeading}
                    </option>
                    {GetLanguageContent?.leadForm?.Language.map((ele) => {
                      return <option value={ele}>{ele}</option>;
                    })}
                  </select>
                </div>
                <div className="d-flex gap-2 align-items-center py-2 pt-0 ps-5">
                  <input
                    type="checkbox"
                    className="agree-policy-checkbox"
                    name="agreePrivacyPolicy"
                    value={formData?.agreePrivacyPolicy || false}
                    onChange={(e)=>{setFormData((prev)=>{return {...prev,agreePrivacyPolicy: e.target.checked}})}}
                  />
                  <p className="body-paragraph agree-checkbox-text mb-0" dangerouslySetInnerHTML={{__html:GetLanguageContent?.leadForm?.Consent}}></p>
                </div>
                <div className="d-flex gap-2 align-items-center py-2 pt-2 ps-5">
                  <input
                    type="checkbox"
                    className="agree-policy-checkbox"
                    name="tips"
                    value={formData?.tips || false}
                    onChange={(e)=>{setFormData((prev)=>{return {...prev,tips: e.target.checked}})}}
                  />
                  <p className="body-paragraph agree-checkbox-text mb-0" dangerouslySetInnerHTML={{__html:GetLanguageContent?.leadForm?.Tips}}></p>
                </div>

                <div className="d-flex flex-row align-items-center gap-3 py-3 ps-5">
                  <button className="genral-btn bg-green" type="submit">
                    {GetLanguageContent?.leadForm?.CTA}
                  </button>
                  <p className="nothanks-anchor-text">
                    {GetLanguageContent?.leadForm?.rejectionBtnText}
                  </p>
                </div>
                 <p className="body-paragraph agree-checkbox-text mb-0 ps-5" >
                    {GetLanguageContent?.leadForm?.disscountAvailText}
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-between align-items-end">
            <img
              src="/images/icons/popup-cross-btn-icon.png"
              className="img-fluid cross-btn d-lg-block d-none"
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
