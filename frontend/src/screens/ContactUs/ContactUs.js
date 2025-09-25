import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import { getLanguageContent } from "../../components/Utils/MultilingialContent";
import Header from "../../components/Header/Header";
import FaqSection from "../../components/FaqSection/FaqSection";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import Footer from "../../components/Footer/Footer";
import Sponsors from "../../components/Sponsors/Sponsors";

function ContactUs() {
  return (
    <div>
      <Header />
      <CommonHeroBanner
        backgroundImage="/images/creatives/contact-hero-bg.png"
        heading={getLanguageContent()?.contactHeroContent?.heading}
      />

      <div style={{ height: "50px" }}></div>

      <ContactUsForm />

      <FaqSection />

      <Sponsors />
      <Footer />
    </div>
  );
}

export default ContactUs;
