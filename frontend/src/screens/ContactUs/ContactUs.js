import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import Header from "../../components/Header/Header";
import FaqSection from "../../components/FaqSection/FaqSection";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import Footer from "../../components/Footer/Footer";
import Sponsors from "../../components/Sponsors/Sponsors";
import { useLanguageContent } from "../../components/Utils/MultilingialContent";

function ContactUs() {
  const GetLanguageContent = useLanguageContent()
  return (
    <div>
      <Header />
      <CommonHeroBanner
        backgroundImage="/images/creatives/contact-hero-bg.png"
        heading={GetLanguageContent?.contact?.hero?.title}
      />

      <div style={{ height: "50px" }}></div>

      <ContactUsForm contactUsFormFields={true}/>

      <FaqSection faqContent={GetLanguageContent?.home?.faq}/>

      <Sponsors 
        normalPadding={true}
      />
      <Footer />
    </div>
  );
}

export default ContactUs;
