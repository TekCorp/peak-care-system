import React, { useState } from "react";
import "./Header.css";

function Header() {
   const [menuOpen, setMenuOpen] = useState(false)

   const toogleMenu = ()=>{
    setMenuOpen((prev)=>(!prev))
   }

  return (
    <div className="headerContainer   d-flex flex-column">
      <div className="py-3 d-flex align-items-center px-4 px-lg-0  ps-lg-5 ">
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
            <p className="anchor-text d-lg-block d-none">Login</p>
            <button className="genral-btn d-lg-block d-none">Sign up</button>
            <img
              src="./images/icons/hamburger-icon.png"
              className="img-fluid d-lg-none d-flex menu-icon"
              alt="hamburger icon"
              onClick={()=>{toogleMenu()}}
            />
          </div>
          <ul className="main-navigation-elements d-lg-flex d-none align-items-center justify-content-end mt-3 pe-2 ">
            <li className="navigation-element">
              <div className="navigation-link">
                <img
                  src="./images/icons/header-home-icon.png"
                  className="img-fluid nav-icons "
                  alt="home icon"
                />
              </div>
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
              <div className="navigation-link">
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
      <div className="dropdown-menu  d-lg-none d-flex">
        <ul className={`dropdown-navigation-elements d-flex flex-column align-items-center justify-content-end mt-3 pe-2 mx-auto  slide ${menuOpen?"slide-in-cus py-4":"slide-out-cus"}`}>
          <li className="navigation-element-dropdown">Home</li>
          <li className="navigation-element-dropdown">About</li>
          <li className="navigation-element-dropdown">Solutions</li>
          <li className="navigation-element-dropdown">DIY Products</li>
          <li className="navigation-element-dropdown">Insights</li>
          <li className="navigation-element-dropdown">Contact Us</li>
          <div className="d-flex align-items-center gap-4">
            <p className="anchor-text color-white">Login</p>
            <button className="genral-btn bg-green">Sign up</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
