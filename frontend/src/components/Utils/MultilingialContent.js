const content_ENG = {
  breadCrumbSlug: {
    home: "home",
    about: "about",
  },
  aboutHeroContent: {
    heading: "About Peak Care EDPK",
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
