import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguage } from "../../languageReducer";
import { useLanguageContent } from "../Utils/MultilingialContent";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const languages = [
    { code: "EN", label: "English", flag: "/images/icons/en-flag-icon.png" },
    { code: "BG", label: "Bulgarian", flag: "/images/icons/bg-flag-icon.png" },
    { code: "DE", label: "German", flag: "/images/icons/de-flag-icon.png" },
  ];

  const currentLang = useSelector(selectLanguage);

  const current = languages.find((l) => l.code === currentLang);
  const dispatch = useDispatch();
  const GetLanguageContent = useLanguageContent()

  const toogleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e));
  };

  const handleLanguageMobileChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  useEffect(() => {
  languages.forEach(lang => {
    const img = new Image();
    img.src = lang.flag;
  });
}, []);

  return (
    <>
      <div className="headerContainer  d-flex flex-column">
        <div className="py-3 d-flex align-items-center px-4 px-lg-0  ps-lg-5 pb-0">
          <div>
            <img
              src="./images/icons/main-header-logo.png"
              alt="logo"
              className="img-fluid main-logo"
            />
          </div>
          <div className="d-flex flex-column w-100">
            <div className="w-100 secondary-navigation-elements d-flex align-items-center justify-content-end gap-3 pe-3">
              <img
                src="./images/icons/cart-icon.png"
                className="img-fluid"
                alt="cart icon"
              />
              <div className="main-language-dropdown-container d-none d-md-block">
                <button
                  onClick={() => setOpen(!open)}
                  className="d-flex align-items-center g-2 px-3 py-2 border rounded-md bg-white hover:bg-gray-100"
                >
                  <img
                    src={current.flag}
                    alt="flag"
                    className="w-5 h-5 lang-flag"
                  />
                  <span className="ps-2">{current.label}</span>
                  <img
                    src="/images/icons/dropdown-arrow-icon.png"
                    alt="arrow icon"
                    className=" ps-3 img-fluid"
                  />
                </button>

                {open && (
                  <div className="language-dropdown absolute top-full left-0 mt-2 w-full bg-white border rounded-md shadow-lg z-10">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          setOpen(false);
                        }}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <img
                          src={lang.flag}
                          alt={lang.label}
                           loading="eager"
                          className="w-5 h-5 lang-flag"
                        />
                        <span className={`ps-3 ${currentLang == lang?.code ? "active-language-text" : ""}`}>{lang.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
             
              <p className="anchor-text d-lg-block d-none">{GetLanguageContent?.navigationTitle?.login}</p>
              <button className="genral-btn d-lg-block d-none">{GetLanguageContent?.navigationTitle?.signup}</button>
              <img
                src="./images/icons/hamburger-icon.png"
                className="img-fluid d-lg-none d-flex menu-icon"
                alt="hamburger icon"
                onClick={() => {
                  toogleMenu();
                }}
              />
            </div>
            <ul className="main-navigation-elements d-lg-flex d-none align-items-center justify-content-end mt-3 pe-2 mb-0 ">
              <li
                className="navigation-element"
                onClick={() => {
                  navigate("/");
                }}
              >
                <div className="navigation-link ">{GetLanguageContent?.navigationTitle?.home}</div>
              </li>
              <li className="navigation-element">
                <div className="navigation-link">{GetLanguageContent?.navigationTitle?.about}</div>
              </li>
              <li className="navigation-element">
                <div className="navigation-link">{GetLanguageContent?.navigationTitle?.solution}</div>
              </li>
              <li className="navigation-element">
                <div className="navigation-link">{GetLanguageContent?.navigationTitle?.diy}</div>
              </li>
              <li className="navigation-element">
                <div className="navigation-link">{GetLanguageContent?.navigationTitle?.insight}</div>
              </li>
              <li className="navigation-element bg-green">
                <div
                  className="navigation-link"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  <img
                    src="./images/icons/header-mail-icon.png"
                    className="img-fluid nav-icons"
                    alt="mail icon"
                  />{" "}
                  {GetLanguageContent?.navigationTitle?.contact}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dropdown-menu d-lg-none d-flex">
        <ul
          className={`dropdown-navigation-elements d-flex flex-column align-items-center justify-content-end my-0 pe-2 mx-auto  slide ${
            menuOpen ? "slide-in-cus py-4" : "slide-out-cus"
          }`}
        >
          <li
            className="navigation-element-dropdown"
            onClick={() => {
              navigate("/");
            }}
          >
            {GetLanguageContent?.navigationTitle?.home}
          </li>
          <li className="navigation-element-dropdown">{GetLanguageContent?.navigationTitle?.about}</li>
          <li className="navigation-element-dropdown">{GetLanguageContent?.navigationTitle?.solution}</li>
          <li className="navigation-element-dropdown">{GetLanguageContent?.navigationTitle?.diy}</li>
          <li className="navigation-element-dropdown">{GetLanguageContent?.navigationTitle?.insight}</li>
          <li
            className="navigation-element-dropdown"
            onClick={() => {
              navigate("/contact");
            }}
          >
            {GetLanguageContent?.navigationTitle?.contact}
          </li>
          <div className="d-flex d-md-none align-items-center gap-1 py-4">
            <img
              src={`/images/icons/${currentLang.toLowerCase()}-flag-icon.png`}
              alt="flag"
              className="img-fluid lang-flag"
            />
            <select
              value={currentLang}
              onChange={handleLanguageMobileChange}
              className="language-switcher mobile-view-language-switcher"
            >
              <option value="EN">English</option>
              <option value="BG">Bulgarian</option>
              <option value="DE">German</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-4">
            <p className="anchor-text color-white">{GetLanguageContent?.navigationTitle?.login}</p>
            <button className="genral-btn bg-green">{GetLanguageContent?.navigationTitle?.signup}</button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Header;
