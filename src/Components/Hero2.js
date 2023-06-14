import React from "react";
import heroImg from "../assets/tech-img-3.jpg";
const Hero2 = () => {
  return (
    <div className="max-w-7xl mx-auto my-[2rem]">
      {/* ========= Heading ========= */}
      <div className="px-6 py-2 my-8 ">
        <h1 className="text-3xl text-black text-center font-medium">
          Unlock Your Business's Potential with Our Dynamic Web Solutions! and
          revolutionize your online presence for Driving Business Growth!
        </h1>
      </div>

      {/* ========= Two Grid ========= */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 px-6 py-2 ">
        <div>
          <img src={heroImg} alt="hero-img" className="rounded-md" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">
            Crafting Seamless Digital Experiences:
          </h1>
          <p className="my-4 text-lg">
            Are you looking to develop top-notch Web & Mobile Applications for a
            seamless and enhanced business experience, or expand your client
            base? Look no further than
            <strong>ENVY TECH Solution</strong> - your ultimate destination.
            Witness the transformation of your ideas into tangible success as we
            navigate your journey from cutting-edge Technologies to robust
            Solutions. At Oodles, we are committed to empowering developers and
            businesses alike, bringing forth our expertise and knowledge. Our
            highly skilled professionals are adept at delivering cost-effective
            web and application development services, leveraging
            state-of-the-art technologies such as Blockchain, Artificial
            Intelligence, SaaS, Data Security, ERP, Big Data, and Video
            Streaming solutions. With our integrated tech solutions tailored for
            diverse industries, we create the perfect synergy of functionality
            and innovation. Partner with us and unlock the true potential of
            your business!
          </p>

          {/* <div className="my-8">
            <button className="bg-gray-900 text-white px-4 py-1 rounded-md text-[1.2rem]">
              Connect With Us
            </button>
            <button className="bg-gray-700 text-white mx-8 px-4 py-1 rounded-md text-[1.2rem]">
              Learn More &darr;
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero2;
