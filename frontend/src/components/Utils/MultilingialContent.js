import { useSelector } from "react-redux";
import {selectLanguageContent} from "../../languageReducer"

const old_content_ENG = {
  homeHeroContent: {
    fadeHeading: "MOULD OUT.",
    mainHeading: "HEALTHY HOME.",
    subHeading: "PEAKCARE GETS IT DONE.",
    paragraph:
      "Assessment, DIY kit with guidance, or full-service remediation — root-cause",
    buttonText: "Free Assessment",
  },
  breadCrumbSlug: {
    home: "home",
    about: "about",
  },
  aboutHeroContent: {
    heading: "About Peak Care EDPK",
  },
  contactHeroContent: {
    heading: "CONTACT US",
  },
};

export const useLanguageContent = () => {
  const content = useSelector(selectLanguageContent);
  return content;
};

