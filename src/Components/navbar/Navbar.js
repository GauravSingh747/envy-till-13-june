import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { links, social } from "./data";
import logo from "../../assets/logo-1.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [isCross, setIsCross] = useState(false);

  //====== toggle =======
  // const toggleLinks = () => {
  //   setShowLinks(!showLinks);
  // };
  const handleToggle = () => {
    setShowLinks(!showLinks);
    setIsCross(!isCross);
  };

  //======  =======
  function handleClick() {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }

  //======  =======
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          {/* <button className="nav-toggle" onClick={toggleLinks}>  
            <FaBars />
          </button> */}
          {isCross ? (
            <button className="nav-toggle-cross" onClick={handleToggle}>
              <RxCross2 />
            </button>
          ) : (
            <button className="nav-toggle" onClick={handleToggle}>
              <FaBars />
            </button>
          )}
        </div>
        {/* ====================================== */}
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li onClick={handleClick} key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ====================================== */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a target="_blank" rel="noreferrer" href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
