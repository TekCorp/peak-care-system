import { createSlice } from "@reduxjs/toolkit";
import content from "./components/Utils/peakcare_homepage_copy_v2_4.json";

const languages = {
  EN: content?.EN,
  BG: content?.BG,
  DE: content?.DE,
};

const savedLang = localStorage.getItem("language") || "EN";

const initialState = {
  currentLanguage: savedLang,
  content: languages[savedLang] || languages["EN"],
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const lang = action.payload;
      if (languages[lang]) {
        state.currentLanguage = lang;
        state.content = languages[lang];
        localStorage.setItem("language", lang);
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.currentLanguage;
export const selectLanguageContent = (state) => state.language.content;

export default languageSlice.reducer;
