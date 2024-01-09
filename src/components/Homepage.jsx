import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Logo from "../assets/Expo.png";
import Ecell from "../assets/ecell-white-img.webp";
import "./global.css";

function Homepage() {
  return (
    <>
      <div className="">
        <Navbar fluid className="bg-red-700  w-full z-10">
          <NavbarBrand>
            <a href="https://www.ecellvnit.org/">
              <img src={Ecell} alt="logo" className="mr-3 h-[50px] md:h-9" />
            </a>
            {/* <img src={Logo} alt="logo" className="mr-3 h-6 sm:h-9" /> */}
          </NavbarBrand>

          <div className="flex md:order-2">
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="#" className="text-white text-2xl">
              Home
            </NavbarLink>
            <NavbarLink href="#about" className="text-white text-2xl">
              About Expo
            </NavbarLink>
            <NavbarLink href="#timeline" className="text-white text-2xl">
              Timeline
            </NavbarLink>
            <NavbarLink href="#" className="text-white text-2xl">
              Brochure
            </NavbarLink>
            <NavbarLink href="#contact" className="text-white text-2xl">
              Contact Us
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
        {/* <div className=" h-screen">
          <div className="flex gap-10 absolute top-3/4 w-full justify-center">
            <Button className="w-2/12 px-8 py-4 bg-gradient-to-r from-red-500 to-red-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ">
              Register
            </Button>
            <Button className="w-2/12 px-8 py-4 bg-gradient-to-r from-red-500 to-red-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ">
              Contact Us
            </Button>
          </div>
        </div> */}
        <div className="relative w-full h-screen mx-auto">
          <div className="bg-no-repeat bg-cover home bg-gray-900  bg-blend-difference bg-origin-border bg-center absolute inset-0 min-h-screen max-w-full ">
            <div className="h-screen bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgb(0,0,0,0.8)] bg-opacity-[0.5]">
              {/* <Navbar /> */}
              <div className="flex flex-col justify-center items-center text-white px-4 md:py-4 lg:py-10 xl:px-20">
                <div className="grid grid-rows-1 gap-4 items-center">
                  <img
                    src={Logo}
                    alt="Expo"
                    height={200}
                    width={1100}
                    className=" justify-centre items-center pt-10 sm:justify-center md:justify-start contrast-100"
                  />

                  <div className="flex flex-col gap-8 md:gap-16 pt-8 justify-center items-center">
                    <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-8 md:gap-16 w-full h-full">
                      <a
                        href="#reg"
                        className="bg-gradient-to-r from-red-500 to-red-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg  p-4 w-3/4 md:w-1/4 lg:w-1/6 text-2xl text-center"
                      >
                        Register
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1UXup2gcrdkC8_WR1u1gMIHfyxiITEFlH/view"
                        target="_blank"
                        className="bg-gradient-to-r from-red-500 to-red-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg  p-4 w-3/4 md:w-1/4 lg:w-1/6 text-2xl text-center"
                      >
                        Brochure
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
