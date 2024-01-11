import React from "react";
import "./About.css";
import about from "../assets/aboutexpo.png";

const AboutSection = () => {
  return (
    <>
      {/* <div className="bg-auto sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover ... bg-[url(https://media.istockphoto.com/id/1321467830/vector/red-abstract-background-abstract-luxury-red-background-valentine-layout-design-studio-room.jpg?s=612x612&w=0&k=20&c=HMi9eratTzZlDAvk-vLjpsa3TKSxjwTyWfeWLxGKoRQ=)]">
        <h1 className="text-center text-6xl font-bold pt-5 text-white">
          ABOUT STARTUP EXPO
        </h1>
        <p className="text-center text-3xl font-bold text-red-100 my-5">
          Get Ready For Product Testing and Mass Networking
        </p>
        <div id="img_and_para" className="justify-start">
          <img id="image" src={about} alt="" className="ml-20 mt-10" />

          <p className="text-2xl mx-20 my-20 font-medium text-white">
            StartupExpo is an exhibition event for startups that draws
            participants, speakers, investors, and organisations from all around
            India. Startups will have a fantastic platform to share their
            cutting-edge innovations with the rest of the world at the event,
            which will also introduce them to a fantastic community that will
            support their progress. Startups that are interested should complete
            this form:
          </p>
        </div>

        <button className="bg-black rounded text-center h-12 w-40 self-center text-white font-bold mb-10">
          Register now
        </button>
      </div> */}
      <div
        className="bg-auto about text-white sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover"
        id="about"
      >
        <div className="py-16 px-4 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgb(0,0,0,0.8)] bg-opacity-[0.5]">
          <div className="">
            <div className=" mx-auto grid md:grid-cols-2 gap-8">
              <img
                className="items-center justify-center"
                src={about}
                alt="Home"
                width={600}
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#ff5757] text-3xl font-bold">
                  ABOUT STARTUP EXPO
                </p>
                <h1 className="md:text-4xl text-3xl font-bold py-4">
                  Get Ready For Product Testing and Mass Networking
                </h1>
                <p className="text-xl">
                  StartupExpo is an exhibition event for startups that draws
                  participants, speakers, investors, and organisations from all
                  around India. Startups will have a fantastic platform to share
                  their cutting-edge innovations with the rest of the world at
                  the event, which will also introduce them to a fantastic
                  community that will support their progress. Startups that are
                  interested should complete this form:
                </p>
                <button className="text-[#ffffff] w-[200px] font-medium my-8 mx-auto md:mx-0 py-3 bg-[#000300] hover:scale-105 hover:text-white duration-200">
                  <a href="#reg">Register Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
