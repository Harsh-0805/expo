import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, CustomFlowbiteTheme } from 'flowbite-react';
import Logo from "../assets/logo.webp";
import Ecell from "../assets/ecell-white-img.webp";

function Homepage() {
  return (
    <>
    <Navbar fluid  className="bg-red-700">
      <NavbarBrand>
        <img src={Ecell} className="mr-3 h-6 sm:h-9"/>
        <img src={Logo} className="mr-3 h-6 sm:h-9"  />
      </NavbarBrand>

      <div className="flex md:order-2">
        <Button href="https://www.ecellvnit.org/" className="bg-black hover:bg-red-500">E-Cell</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" className='text-2xl'>Home
        </NavbarLink>
        <NavbarLink href="#" className='text-2xl'>About Expo</NavbarLink>
        <NavbarLink href="#" className='text-2xl'>Timeline</NavbarLink>
        <NavbarLink href="#" className='text-2xl'>Brochure</NavbarLink>
        <NavbarLink href="#" className='text-2xl'>Contact Us</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    <div className='bg-black h-screen'>
      <div className='flex gap-10 absolute top-2/3 left-1/3'>
      <Button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">Register</Button>
      <Button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">Contact Us</Button>
      </div>
    </div>
    </>
  )
}

export default Homepage