import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  CustomFlowbiteTheme,
} from "flowbite-react";
import Logo from "../assets/logo.webp";
import Ecell from "../assets/ecell-white-img.webp";
import "./global.css";

function Homepage() {
  return (
    <>
      <div className="home bg-no-repeat bg-cover">
        <Navbar fluid className="bg-red-700">
          <NavbarBrand>
            <a href="https://www.ecellvnit.org/">
              <img src={Ecell} alt="logo" className="mr-3 h-6 sm:h-9" />
            </a>
            <img src={Logo} alt="logo" className="mr-3 h-6 sm:h-9" />
          </NavbarBrand>

          {/* <div className="flex md:order-2">
        <Button href="https://www.ecellvnit.org/" className="bg-black hover:bg-red-500">E-Cell</Button>
        <NavbarToggle />
      </div> */}
          <NavbarCollapse>
            <NavbarLink href="#" className="text-2xl">
              Home
            </NavbarLink>
            <NavbarLink href="#" className="text-2xl">
              About Expo
            </NavbarLink>
            <NavbarLink href="#" className="text-2xl">
              Timeline
            </NavbarLink>
            <NavbarLink href="#" className="text-2xl">
              Brochure
            </NavbarLink>
            <NavbarLink href="#" className="text-2xl">
              Contact Us
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
        <div className=" h-screen">
          <div className="flex gap-10 absolute top-3/4 w-full justify-center">
            <Button className="w-2/12 px-8 py-4 bg-gradient-to-r from-red-500 to-red-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ">
              Register
            </Button>
            <Button className="w-2/12 px-8 py-4 bg-gradient-to-r from-red-500 to-red-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
