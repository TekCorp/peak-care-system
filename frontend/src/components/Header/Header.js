import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguage } from "../../languageReducer";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const toogleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const currentLang = useSelector(selectLanguage); 


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
            <div className="d-md-flex d-none align-items-center gap-1 ">
                <img
                  src={`/images/icons/${currentLang.toLowerCase()}-flag-icon.png`}
                  alt="flag"
                  className="img-fluid lang-flag"
                />
                <select value={currentLang} onChange={handleLanguageChange} className="language-switcher">
                  <option value="EN">English</option>
                  <option value="BG">Bulgarian</option>
                  <option value="DE">Deutsch</option>
                </select>
              </div>
            <p className="anchor-text d-lg-block d-none">Login</p>
            <button className="genral-btn d-lg-block d-none">Sign up</button>
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
              <div className="navigation-link ">HOME</div>
            </li>
            <li className="navigation-element">
              <div className="navigation-link">About</div>
            </li>
            <li className="navigation-element">
              <div className="navigation-link">Solutions</div>
            </li>
            <li className="navigation-element">
              <div className="navigation-link">DIY Products</div>
            </li>
            <li className="navigation-element">
              <div className="navigation-link">Insights</div>
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
                Contact Us
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
            Home
          </li>
          <li className="navigation-element-dropdown">About</li>
          <li className="navigation-element-dropdown">Solutions</li>
          <li className="navigation-element-dropdown">DIY Products</li>
          <li className="navigation-element-dropdown">Insights</li>
          <li
            className="navigation-element-dropdown"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </li>
            <div className="d-flex d-md-none align-items-center gap-1 py-4">
                <img
                  src={`/images/icons/${currentLang.toLowerCase()}-flag-icon.png`}
                  alt="flag"
                  className="img-fluid lang-flag"
                />
                <select value={currentLang} onChange={handleLanguageChange} className="language-switcher mobile-view-language-switcher">
                  <option value="EN">English</option>
                  <option value="BG">Bulgarian</option>
                  <option value="DE">Deutsch</option>
                </select>
              </div>
          <div className="d-flex align-items-center gap-4">
            <p className="anchor-text color-white">Login</p>
            <button className="genral-btn bg-green">Sign up</button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Header;
