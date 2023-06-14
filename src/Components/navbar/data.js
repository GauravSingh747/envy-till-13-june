import React from "react";
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/services",
    text: "Services",
  },
  {
    id: 4,
    url: "/solutions",
    text: "Solutions",
  },
  {
    id: 5,
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    id: 6,
    url: "/blog",
    text: "Blog",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/people/Turnkeyreality/100090901887050/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/turnkeyreality/?igshid=NTc4MTIwNjQ2YQ%3D%3D%60",
    icon: <FaInstagramSquare />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/company/turnkeyreality/mycompany/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.youtube.com/@turnkeyreality12",
    icon: <IoLogoYoutube />,
  },
];
