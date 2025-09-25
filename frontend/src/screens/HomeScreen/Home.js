import React from "react";
import ComingSoon from "../ComingSoonScreen/ComingSoon";

import AdditionalBenefitsHome from "../../components/AdditionalBenefitsHome/AdditionalBenefitsHome";
import Sponsors from "../../components/Sponsors/Sponsors";
import EnvironmentalSolutionsHome from "../../components/EnvironmentalSolutionsHome/EnvironmentalSolutionsHome";
import FaqSection from "../../components/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomeHeroSlider from "../../components/HomeHeroSlider/HomeHeroSlider";
import ImageByTextContent from "../../components/ImageByTextContent/ImageByTextContent";
import WhyUsList from "../../components/WhyUsList/WhyUsList";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import RealProjectSlider from "../../components/RealProjectSlider/RealProjectSlider";
import OurProcess from "../../components/OurProcess/OurProcess";

function Home() {
  return (
    <>
      <Header />
      <HomeHeroSlider />

      <ImageByTextContent
        mainHeading="Problem vs. solution"
        content="Every home faces hidden challenges—whether it’s moisture creeping through walls, unwanted noise disrupting your peace, or insulation that just doesn’t hold up. At Peakcare, we don’t just patch problems; we provide smart, long-lasting solutions that restore comfort, protect your health, and save energy"
        sideImage="/images/creatives/home-text-1.png"
      />

      <WhyUsList />

      <EnvironmentalSolutionsHome />

      <OurProcess />

      <RealProjectSlider />

      <AdditionalBenefitsHome />
      <Sponsors />
      <Testimonials />
      <FaqSection />

      <ContactUsForm />

      <Footer />
    </>
  );
}

export default Home;
