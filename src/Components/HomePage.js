import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Hero2 from "./Hero2";
import AllServices from "./AllServices";
import Techs from "./Techs";
import Footer from "./footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
      <AllServices />
      <Techs />
      <Footer />
    </div>
  );
};

export default HomePage;
