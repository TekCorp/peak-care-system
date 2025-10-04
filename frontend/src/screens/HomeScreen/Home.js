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
import { useLanguageContent } from "../../components/Utils/MultilingialContent";

function Home() {
  const GetLanguageContent = useLanguageContent()
  return (
    <>
      <Header />
      
      <HomeHeroSlider />

      <ImageByTextContent
        mainHeading={GetLanguageContent?.home?.issues_approach?.title}
        content={GetLanguageContent?.home?.issues_approach?.content}
        sideImage="/images/creatives/home-text-1.png"
        crossListTitle={GetLanguageContent?.home?.issues_approach?.crossListTitle}
        crossListContent={GetLanguageContent?.home?.issues_approach?.issues}
        checkListTitle={GetLanguageContent?.home?.issues_approach?.checkListTitle}
        checkListContent={GetLanguageContent?.home?.issues_approach?.approach}
        comparisonBoxList={true}
      />

      <WhyUsList />

      <EnvironmentalSolutionsHome />

      <div className="py-md-5 py-0"></div>

      <OurProcess />

      <RealProjectSlider />

      <AdditionalBenefitsHome />

      <Sponsors />

      <Testimonials />

      <FaqSection 
        faqContent={GetLanguageContent?.home?.faq}
      />

      <ContactUsForm />

      <Footer />
    </>
  );
}

export default Home;
