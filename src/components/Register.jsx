import React, { useState } from "react";
import "./Register.css";
export default function Register() {
  const [mode, setmode] = useState(0);
  const participant = () => {
    setmode(1);
  };
  const startup = () => {
    setmode(2);
  };
  return (
    <div
      id="reg"
      className="bg-black flex flex-col justify-center items-center "
    >
      <h1 className="text-5xl text-red-600 mt-10 font-bold">REGISTER NOW</h1>

      <div
        className={`${"flex flex-col"} mt-10 w-5/6 md:w-1/2 mx-5 bg-neutral-950 p-2 text-white border-red-600 border-2 rounded-2xl`}
      >
        <div className="h-1/7 flex justify-center items-center">
          <p className="text-red-600 text-2xl">Register as a Startup</p>
        </div>
        <form action="\" className=" flex flex-col h-6/7">
          <div className="h-1/6 flex flex-col">
            <label htmlFor="" className="mt-3">
              Startup Name<span className="text-red-600">*</span>
            </label>
            <input
              className="text-black"
              placeholder="Enter your Startup Name"
              type="text"
            />
          </div>
          <div className="h-1/6 flex flex-col">
            <label htmlFor="" className="mt-3">
              Startup's Sector<span className="text-red-600">*</span>
            </label>
            <input
              className="text-black"
              placeholder="Sector of your Startup"
              type="text"
            />
          </div>
          <div className="h-1/6 flex flex-col">
            <label htmlFor="" className="mt-3">
              Startup Headquarter<span className="text-red-600">*</span>
            </label>
            <input
              className="text-black"
              placeholder="place of Startup Headquater"
              type="text"
            />
          </div>
          <div className="h-1/6 flex flex-col">
            <label htmlFor="" className="mt-3">
              Linkedin/Website of your startup
              <span className="text-red-600">*</span>
            </label>
            <input
              className="text-black"
              placeholder="website or linkedin"
              type="text"
            />
          </div>
          <div className="h-2/6 flex flex-col">
            <label htmlFor="" className="mt-3">
              Description of Startup<span className="text-red-600">*</span>
            </label>
            <textarea
              name=""
              placeholder="Brief description of idea/product/service"
              className="text-black"
              id=""
              cols="30"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="flex justify-center my-3">
        <input type="checkbox" className="mt-1" name="" id="" />
        <label htmlFor="" className="ml-2 text-white">
          I hereby declare that i have read the Brochure and the details
          furnished above are correct to best of my Knowledge.
        </label>
      </div>
      <div className={` "flex"  justify-center my-3`}>
        <button className="rounded bg-red-500 py-4 px-8 text-base text-white">
          REGISTER
        </button>
      </div>
    </div>
  );
}
