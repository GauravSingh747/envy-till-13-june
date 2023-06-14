import React from "react";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#707f8e] p-4 ">
        <div className=" max-w-7xl mx-auto my-16 px-2 ">
          {/* ======= 1. Heading ====== */}
          <div className="text-center my-8 ">
            <p className="text-2xl font-Playfair font-bold ">
              ENVY Tech Solution
            </p>
            <h1 className="text-6xl my-4 font-Playfair ">Who We Are</h1>
          </div>
          {/* ======= 2. Details ====== */}

          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-8  ">
            <div className=" p-4  bg-[#5898c6] rounded-md ">
              <h1 className="text-2xl font-semibold font-serif">WHO WE ARE</h1>
              <p className="my-5 text-lg tracking-wide">
                At ENVY TECH Solution, we are passionate about driving change
                through technology and innovation. We are dedicated to assisting
                businesses and individuals in embracing digital transformation,
                ultimately improving lives and enhancing businesses through our
                progressive and innovative technology solutions. Our Approach:
                Listening, Understanding, and Delivering Excellence We believe
                that every success story begins with active listening. We take
                the time to truly understand the unique challenges,
                requirements, and objectives of our clients. By diving deep into
                your business, market sector, and competitive landscape, we
                gather valuable information. Combining this knowledge with our
                technical expertise, extensive research, and industry insights,
                we craft tailored solutions that deliver outstanding results.
              </p>
              <p className="my-5 text-lg">
                Innovation and Future-Readiness In a fast-paced digital
                landscape, staying ahead requires continuous innovation and
                adaptability. We stay at the forefront of technological
                advancements, enabling us to provide cutting-edge solutions that
                future-proof your business. With our finger on the pulse of
                emerging trends, we empower you to embrace change, unlock new
                opportunities, and stay competitive.
              </p>
              <p className="my-5 text-lg">
                Join us on this transformative journey as we harness technology,
                embrace change, and drive your success to new heights. Together,
                let's shape a better future through innovation and digital
                transformation.
              </p>
            </div>
            <div className="p-2 text-lg tracking-wide rounded-md bg-[#7dc5f8]">
              <h1 className="text-2xl font-semibold font-serif ">
                Responsiblity
              </h1>
              <ul className="my-5 list-disc px-6 ">
                <li>
                  Innovation and Adaptability: We embrace the responsibility of
                  staying at the forefront of technology trends. It is our duty
                  to harness the power of innovation, adapt to emerging
                  technologies, and provide forward-thinking solutions that keep
                  our clients ahead of the competition.
                </li>
                <li>
                  Building Lasting Partnerships: We understand the
                  responsibility of building long-lasting partnerships with our
                  clients. By comprehending their goals, challenges, and
                  aspirations, we work collaboratively to deliver exceptional
                  results. Our success is measured by the success of our
                  clients, and we take this responsibility seriously.
                </li>
                <li className="mt-8 ">
                  We bear the responsibility of crafting seamless user
                  experiences. By prioritizing intuitive and user-friendly
                  interfaces, we ensure effortless navigation, enhanced
                  engagement, and leave a lasting impression on users.
                </li>
                <li>
                  Empower Businesses: We take it upon ourselves to empower
                  businesses by providing cutting-edge web and app solutions.
                  Through our expertise, we enable them to unlock their full
                  potential and achieve remarkable growth in the digital realm.
                </li>

                <li className="mt-8">
                  Exceptional Quality and Reliability: We shoulder the
                  responsibility of delivering solutions of the highest quality.
                  Our commitment to excellence is unwavering as we ensure
                  reliability and stability in every project we undertake.
                  Attention to detail, craftsmanship, and meeting deadlines are
                  paramount in fulfilling this responsibility.
                </li>
              </ul>
            </div>
          </div>
          {/* ====================================================== */}

          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-8 text-lg tracking-wide">
            <div className="bg-[#7dc5f8] p-2 rounded-md ">
              <h1 className="text-2xl font-semibold font-serif ">
                Driving Digital Transformation
              </h1>
              <p className="my-5">
                Transforming Digital Landscapes: We are dedicated to
                transforming digital landscapes by creating dynamic web and app
                solutions that captivate audiences and elevate brands. We
                leverage the latest technologies to bring visions to life and
                deliver seamless user experiences.
              </p>
              <p className="my-5">
                Empowering Businesses: We aim to empower businesses of all sizes
                by providing customized web and app solutions tailored to their
                unique needs. Through our expertise, we help businesses unlock
                their full potential and achieve remarkable growth in the
                digital realm.
              </p>
            </div>
            <div className="p-2 rounded-md bg-[#5898c6]">
              <h1 className="text-2xl font-semibold font-serif ">
                Seamless User Experiences
              </h1>
              <p className="my-5">
                Our mission is to provide our customer with the highest quality
                of the product and services. While delivering exceptional
                customer service . we are committed to excellence in everything
                we do and strive to exceed our customers’ expectations Everyday
                .
              </p>
              <p className="my-5">
                We Beleive in buidling strong relationships with our customers,
                and employees based on mutual trust, respect, and open
                communication. We are dedicated to creating a positive and
                inclusive workplace where all employees can work thrive and
                contribute to our success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
