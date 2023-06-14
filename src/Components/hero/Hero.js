import React from "react";
import heroImg from "../../assets/tech-4.jpg";
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto my-[2rem]  ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 px-6 py-2 ">
        <div>
          <h1 className="lg:text-5xl text-3xl font-semibold">
            Creating Digital Solutions that Inspire: Web and App Development
          </h1>
          <p className=" lg:my-4 my-1 lg:text-2xl md:text-xl text-lg">
            Offering expert website and app development services to unlock
            digital potential, transform visions into reality, and empower
            businesses with innovative solutions. Elevate your online presence,
            drive digital success, and unleash the power of technology with our
            professional services.
          </p>

          <div className="my-8">
            <button className="bg-gray-700 text-white px-4 py-1 rounded-md lg:text-[1.2rem] text-[1rem] ">
              Get in touch
            </button>
            <button className="bg-gray-700 text-white mx-8 px-4 py-1 rounded-md lg:text-[1.2rem] text-[1rem] ">
              Learn More &darr;
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="hero-img" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
