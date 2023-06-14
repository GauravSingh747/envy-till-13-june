import React from "react";
import logo from "../../assets/logo-1.png";
import { social } from "../../Components/navbar/data";
const Footer = () => {
  return (
    <div className="bg-[#102a42]">
      <div className="max-w-7xl mx-auto py-6 text-white ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  px-6">
          {/* Grid-1 */}
          <div className="p-4">
            <div>
              <h1 className="mb-4 text-2xl font-semibold ">Our Services</h1>
              <ul>
                <li className="my-2">
                  <a href="#">Web Development</a>
                </li>
                <li className="my-2">
                  <a href="#">UI/UX Design</a>
                </li>
                <li className="my-2">
                  <a href="#">Mobile Application</a>
                </li>
                <li className="my-2">
                  <a href="#">Ecommerce Development</a>
                </li>
                <li className="my-2">
                  <a href="#">Digital Marketing</a>
                </li>
                <li className="my-2">
                  <a href="#">Search Engine Optimization</a>
                </li>
              </ul>
              {/* <a href="#">Web Development</a>
            <a href="#">UI/UX Design</a>
            <a href="#">Mobile Application</a>
            <a href="#">Ecommerce Development</a>
            <a href="#">Digital Marketing</a>
            <a href="#">Search Engine Optimization</a> */}
            </div>
          </div>
          {/* Grid-2 */}
          {/* Grid-2 */}
          <div>
            <div className="p-4">
              <div>
                <h1 className="mb-4 text-2xl font-semibold ">Company</h1>
                <ul>
                  <li className="my-2">
                    <a
                      href="#"
                      className="hover:border-[1px] hover:p-[3px] hover:border-[#6ebef3] rounded-lg transition-all  duration-800 ease-in-out"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="my-2">
                    <a
                      href="#"
                      className="hover:border-[1px] hover:p-[3px] hover:border-[#6ebef3] rounded-lg transition-all duration-800 ease-in-out"
                    >
                      Our Team
                    </a>
                  </li>
                  <li className="my-2">
                    <a
                      href="#"
                      className="hover:border-[1px] hover:p-[3px] hover:border-[#6ebef3] rounded-lg transition-all duration-800 ease-in-out"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="my-2">
                    <a
                      href="#"
                      className="hover:border-[1px] hover:p-[3px] hover:border-[#6ebef3] rounded-lg transition-all duration-800 ease-in-out"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="my-2">
                    <a
                      href="#"
                      className="hover:border-[1px] hover:p-[3px] hover:border-[#6ebef3] rounded-lg transition-all duration-800 ease-in-out"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                  <li className="my-2">
                    <a
                      href="#"
                      className="hover:border-[1px] hover:p-[3px] hover:border-[#6ebef3] rounded-lg transition-all duration-800 ease-in-out"
                    >
                      Contact-US
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Grid-3 */}
          {/* Grid-3 */}
          <div>
            <div className="p-4">
              <div>
                <h1 className="mb-4 text-2xl font-semibold ">Technologies</h1>
                <ul>
                  <li className="my-2">
                    <a href="#">JavaScript</a>
                  </li>
                  <li className="my-2">
                    <a href="#">Node.js</a>
                  </li>
                  <li className="my-2">
                    <a href="#">Express.js</a>
                  </li>
                  <li className="my-2">
                    <a href="#">MongoDB</a>
                  </li>
                  <li className="my-2">
                    <a href="#">React</a>
                  </li>
                  <li className="my-2">
                    <a href="#">Next.js</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*======== Grid-4  ========*/}
          {/*======== Grid-4  ========*/}
          <div>
            <div className="p-4">
              <img src={logo} alt="" />
              <p className="mt-4">
                © Copyright 2023 ENVY TECH Pvt Ltd. All rights reserved.
              </p>
            </div>
            <div className="px-4">
              <ul className="social-icons">
                {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                    <li className=" text-[1.5rem] " key={id}>
                      <a target="_blank" rel="noreferrer" href={url}>
                        {icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
