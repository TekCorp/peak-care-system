const content_ENG = {
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

const languages = {
  ENG: content_ENG,
};

let currentLanguage = "ENG";

export const setLanguage = (lang) => {
  if (languages[lang]) {
    currentLanguage = lang;
  }
};

export const getLanguageContent = () => languages[currentLanguage];
