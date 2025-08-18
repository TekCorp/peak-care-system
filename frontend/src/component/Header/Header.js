import React, { useState,useRef,useEffect } from "react";
import { Link,NavLink,useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({darkBg=false}) => {
  const [menuState, setMenuState] = useState(false);
  const [changeArrowcolor, setChangeArrowColor] = useState(false);
  const [changeArrowcolorDec, setChangeArrowColorDec] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenDesk, setIsDropdownOpenDesk] = useState(false);
  const [isDropdownOpenDec, setIsDropdownOpenDec] = useState(false);
  const [isDropdownOpenDeskDec, setIsDropdownOpenDeskDec] = useState(false);
  const navigate = useNavigate()
  const clickCountRef = useRef(0);
  const dropdownRef = useRef();
  const dropdownRefDec = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isDropdownOpenDesk) {
        if (!event.target.closest('.app')) {
          setIsDropdownOpenDesk(false);
        }
      }
      if (dropdownRefDec.current && !dropdownRefDec.current.contains(event.target) && isDropdownOpenDeskDec) {
        if (!event.target.closest('.app')) {
          setIsDropdownOpenDeskDec(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpenDesk,isDropdownOpenDeskDec]);


const onClickService = (e) => {
    e.preventDefault();
    
      clickCountRef.current++;
      if (clickCountRef.current === 1) {
        setIsDropdownOpen(true);
      } 
      else if (clickCountRef.current === 2) {
        setMenuState(false)
        setIsDropdownOpen(false)
        navigate("/services");
        clickCountRef.current = 0;
      }
  };
const onClickDec = (e) => {
    e.preventDefault();
    
      clickCountRef.current++;
      if (clickCountRef.current === 1) {
        setIsDropdownOpenDec(true);
      } 
      else if (clickCountRef.current === 2) {
        setMenuState(false)
        setIsDropdownOpenDec(false)
        navigate("/decorating");
        clickCountRef.current = 0;
      }
  };

  const menuClick = () => {
    setMenuState((prev) => !prev);
  };

  return (
    <div className={`header w-100 `}
      style={darkBg ? {backgroundColor:"transparent"} : {}}
      
    >
      <div 
        className="header-wrapper container"
      >
        <nav className="navbar d-md-flex flex-md-row d-block">
          <nav className="navbar-container px-lg-0 px-2 pb-2">
            <div className="nav-elements d-flex justify-content-between align-items-center px-lg-2" >
              <input className="d-none" type="checkbox" id="menu-toggle" />
              <img src={`/images/icons/nav-logo${darkBg ? "-b" : ""}.png`} className="nav-logo" onClick={()=>{navigate("/")}} style={{cursor:"pointer"}} alt='icon'/>
              <nav>
                <ul
                  className="nav-list d-lg-flex gap-lg-4 gap-lg-3 align-items-center d-none main-nav"
                  id="js-menu"
                >
                 
                  <li>
                    <NavLink to={"/about"} className={`nav-links font-lato ${darkBg && "color-dark"}`}>
                      ABOUT
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink to={"/services"} className={`nav-links font-lato ${darkBg && "color-dark"}`}>
                    SERVICES
                    </NavLink>
                  </li> */}

                  <div className="navigation-dropdown" ref={dropdownRef}>
                  <li onMouseEnter={()=>{setIsDropdownOpenDesk(true);setIsDropdownOpenDeskDec(false)}} >

                      <div className="dropdown-trigger d-flex align-items-center" onMouseOver={()=>{setChangeArrowColor(true)}} onMouseOut={()=>{setChangeArrowColor(false)}}>
                          <NavLink to={"/services"} className={`nav-links font-lato ${darkBg && "color-dark"} pe-0`}>
                            SERVICES
                          </NavLink>
                          <img src={`/images/icons/drop-icon-b.png`} className={isDropdownOpenDesk ? "rotate-icon arrow-icon":"rotate-back arrow-icon" } alt='icon'/>
                      </div>
                      <div className={`dropdown-content ${isDropdownOpenDesk ? 'open' : 'none-delay'}`} onMouseEnter={()=>{setIsDropdownOpenDesk(true)}} onMouseLeave={()=>{setIsDropdownOpenDesk(false)}}>
              
                        <Link to={"/services/heating-systems"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDesk(false)}}>
                          <p className="mb-0" style={{textTransform:"uppercase"}}>Heating Systems</p>
                        </Link>
                        <Link to={"/services/refrigation"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDesk(false)}}>
                          <p className="mb-0" style={{textTransform:"uppercase"}}>Refrigation</p>
                        </Link>
                        <Link to={"/services/design-build"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDesk(false)}}>
                          <p className="mb-0" style={{textTransform:"uppercase"}}>Design Build</p>
                        </Link>
                        <Link to={"/services/air-conditioning"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDesk(false)}}>
                          <p className="mb-0" style={{textTransform:"uppercase"}}>Air Conditioning</p>
                        </Link>
                        <Link to={"/services/gas-lines"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDesk(false)}}>
                          <p className="mb-0" style={{textTransform:"uppercase"}}>Gas Lines</p>
                        </Link>
                        <Link to={"/services/sheet-metal"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDesk(false)}}>
                          <p className="mb-0" style={{textTransform:"uppercase"}}>Sheet Metal</p>
                        </Link>
                        <Link to={"/services/fire-places"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDesk(false)}}>
                          <p className="mb-0" style={{textTransform:"uppercase"}}>Fire Places</p>
                        </Link>
                        <Link to={"/services/hydronics"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDesk(false)}}>
                          <p className="mb-0" style={{textTransform:"uppercase"}}>Hydronics</p>
                        </Link>
                        
                      </div>
                    </li>
                    </div>
                  {/* <div className="navigation-dropdown" ref={dropdownRefDec}>
                  <li onMouseEnter={()=>{setIsDropdownOpenDeskDec(true);setIsDropdownOpenDesk(false)}} >

                      <div className="dropdown-trigger d-flex align-items-center" onMouseOver={()=>{setChangeArrowColorDec(true)}} onMouseOut={()=>{setChangeArrowColorDec(false)}}>
                          <Link to={"/decorating"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDeskDec(false)}} style={{color:`${changeArrowcolorDec ? "#d0d0d0":"white"}`}}>DECORATING</Link>
                          <img src={`/images/icons/drop-icon-${darkBg ? "b":"w"}.png`} className={isDropdownOpenDeskDec ? "rotate-icon arrow-icon":"rotate-back arrow-icon" } alt='icon'/>
                      </div>
                      <div className={`dropdown-content ${isDropdownOpenDeskDec ? 'open' : 'none-delay'}`} onMouseEnter={()=>{setIsDropdownOpenDeskDec(true)}} onMouseLeave={()=>{setIsDropdownOpenDeskDec(false)}} style={{left:"0px"}}>
              
                        <Link to={"/commercial"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDeskDec(false)}}>
                          <p className="mb-0">COMMERCIAL</p>
                        </Link>
                        <Link to={"/decorating-home-owner"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDeskDec(false)}}>
                          <p className="mb-0">RESIDENTIAL</p>
                        </Link>
                        <Link to={"/decorating-short-term-rental"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDeskDec(false)}}>
                          <p className="mb-0">SHORT TERM RENTAL</p>
                        </Link>
                      </div>
                    </li>
                    </div> */}

                  
                  <li>
                    <NavLink to={"/blog"} className={`nav-links font-lato ${darkBg && "color-dark"}`}>
                      BLOGS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"} className={`nav-links font-lato ${darkBg && "color-dark"}`}>
                      CONTACT
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <label
                value="menu-toggle"
                onClick={menuClick}
                className="responsive-menu-btn d-lg-none d-inline"
              >
                <img
                  src={`/images/icons/hamburger-menu-b${darkBg ? "-b":""}.png`}
                  className="img-fluid menu-btn"
                  alt="menu"
                />
              </label>

              <div className="nav-buttton ml-5 d-lg-flex d-none gap-3 extras-btns">
                {/* <a href='tel:905-841-9879' style={{textDecoration:"none"}}></a> */}
              
              </div>
            </div>
          </nav>

          {/* Dropdown in responsive mode */}
          <nav className="responsive-popup-menu w-100">
            <div className="py-3 d-lg-none" style={{ display: menuState ? "block" : "none" }}>
            <ul
              className="resp-nav-list d-lg-none w-100 gap-4 hs-dropdown [--trigger:hover] pl-4"
              style={{ display: menuState ? "block" : "block" }}
            >
              <li>
                <Link to={"/"} className={`nav-links font-lato ${darkBg && "color-dark"}`}>
                Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className={`nav-links font-lato ${darkBg && "color-dark"}`}>
                About 
                </Link>
              </li>
            
              {/* <li>
                <Link to={"/services"} className={`nav-links font-lato ${darkBg && "color-dark"}`}>
                Services
                </Link>
              </li> */}
               <li>
                <div className="navigation-dropdown">
                  <div className="dropdown-trigger d-flex align-items-center" style={{color:"black"}} onClick={onClickService} >
                      <a className={`nav-links font-lato ${darkBg && "color-dark"}`} >Services</a>
                      <img src='/images/icons/drop-icon-b.png' className={isDropdownOpen ? "rotate-icon arrow-icon":"rotate-back arrow-icon" } alt='icon'/>
                  </div>
                  <div className={`dropdown-content ${isDropdownOpen ? 'open' : 'd-none'}`} style={{top:"85%",left:"0%"}}>
                    
                    
                      <Link to={"/services/heating-systems"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpen(false); setMenuState(false)}}>
                        <p className="mb-0">Heating Systems</p>
                      </Link>
                      <Link to={"/services/refrigation"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpen(false); setMenuState(false)}}>
                          <p className="mb-0">Refrigation</p>
                        </Link>
                        <Link to={"/services/design-build"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpen(false); setMenuState(false)}}>
                          <p className="mb-0">Design Build</p>
                        </Link>
                        <Link to={"/services/air-conditioning"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpen(false); setMenuState(false)}}>
                          <p className="mb-0">Air Conditioning</p>
                        </Link>
                        <Link to={"/services/gas-lines"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpen(false); setMenuState(false)}}>
                          <p className="mb-0">Gas Lines</p>
                        </Link>
                        <Link to={"/services/sheet-metal"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpen(false); setMenuState(false)}}>
                          <p className="mb-0">Sheet Metal</p>
                        </Link>
                        <Link to={"/services/fire-places"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpen(false); setMenuState(false)}}>
                          <p className="mb-0">Fire Places</p>
                        </Link>
                        <Link to={"/services/hydronics"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpen(false); setMenuState(false)}}>
                          <p className="mb-0">Hydronics</p>
                        </Link>
                    
                  </div>
                </div>
                </li>
               {/* <li>
                <div className="navigation-dropdown">
                  <div className="dropdown-trigger d-flex align-items-center" style={{color:"black"}} onClick={onClickDec} >
                      <a className={`nav-links font-lato ${darkBg && "color-dark"}`} >DECORATING</a>
                      <img src='/images/icons/drop-icon-b.png' className={isDropdownOpenDec ? "rotate-icon arrow-icon":"rotate-back arrow-icon" } alt='icon'/>
                  </div>
                  <div className={`dropdown-content ${isDropdownOpenDec ? 'open' : 'd-none'}`} style={{top:"85%",left:"0%"}}>
                    
                    
                    <Link to={"/commercial"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDec(false); setMenuState(false)}}>
                      <p className="mb-0">COMMERCIAL</p>
                    </Link>
                    <Link to={"/decorating-home-owner"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDec(false); setMenuState(false)}}>
                      <p className="mb-0">RESIDENTIAL</p>
                    </Link>
                    <Link to={"/decorating-short-term-rental"} className={`nav-links font-lato ${darkBg && "color-dark"}`} onClick={()=>{setIsDropdownOpenDec(false); setMenuState(false)}}>
                      <p className="mb-0">SHORT TERM RENTAL</p>
                    </Link>
                    
                  </div>
                </div>
                </li> */}
              
              <li>
                <Link to={"/blog"} className={`nav-links font-lato ${darkBg && "color-dark"}`}>
                Blogs
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className={`nav-links font-lato ${darkBg && "color-dark"}`}>
                Contact
                </Link>
              </li>
            </ul>
            <div className="nav-buttton flex-wrap d-flex gap-4 extras-btns">
              {/* <a href='tel:905-841-9879' style={{textDecoration:"none"}}></a> */}
               
              <button className='genral-btn' onClick={()=>{window.open("tel:289-878-5443")}}>Emergency Service</button>
            </div>
            </div>
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Header; 