import React from "react";
import techImg from "../assets/tech-img-1.png";
const Techs = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto my-[2rem]">
      {/*============= */}
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div class="col-span-2">
          <h1 className="text-3xl font-semibold">Tech We Have</h1>
          <p className="my-2 xl:text-[1.4rem] text-[1.2rem] leading-normal ">
            With more than ten years of industry experience, we specialize in
            deploying cutting-edge technologies to empower our clients with
            robust and top-notch solutions fueled by artificial intelligence.
            Our wide range of offerings includes ERP solutions, blockchain
            development services, SaaS applications, big data solutions, and
            online video solutions. Leveraging our deep industry knowledge and
            expertise, we assist clients in seamlessly integrating emerging
            technology solutions into their businesses, ensuring they stay ahead
            of the ever-evolving curve.
          </p>
          <button className="bg-[#427294] my-3 hover:bg-[#162631] text-white px-2 py-1 rounded-md text-[1rem] xl:text-[1.2rem]">
            See All Technologies &darr;
          </button>
        </div>
        <div class="col-span-1 ">
          <div className="flex justify-center">
            <img src={techImg} alt="tech-img" className="rounded-md  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techs;
