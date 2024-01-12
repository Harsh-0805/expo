import React, { useState } from "react";
// import React, { useState } from 'react';
import { validateForm } from '../FormValidation';
import { registerUser } from '../Api';
import "./Register.css";
export default function Register() {
  const [mode, setmode] = useState(0);
  const participant = () => {
    setmode(1);
  };
  const startup = () => {
    setmode(2);
  };

  const [formData, setFormData] = useState({
    name: '',
    // phone: '',
    email: '',
    startUpSector:'',
    headquarter:'',
    linkedin:'',
    description:'',
    
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // Clear the validation error for the changed field
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: '' }));
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      // Send data to the server
      const response = await registerUser(formData);

      setMessage(response.message);
    } catch (error) {
      console.error(error);
      setMessage('Error submitting the form');
    } finally {
      setLoading(false);
    }
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
        <form onSubmit={handleSubmit}  className=" flex flex-col h-6/7">
          <div className="h-1/6 flex flex-col">
            <label htmlFor="" className="mt-3">
              Startup Name<span className="text-red-600">*</span>
            </label>
            <input
              className="text-black"
              placeholder="Enter your Startup Name"
              type="text"
              name="name"
              value={formData.name} 
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{errors.name}</span>
          </div>
          <div className="h-1/6 flex flex-col">
            <label htmlFor="" className="mt-3">
              Email
              <span className="text-red-600">*</span>
            </label>
            <input
              className="text-black"
              placeholder="website or linkedin"
              type="text"
              name="email"
              value={formData.email} 
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{errors.email}</span>
          </div>
          <div className="h-1/6 flex flex-col">
            <label htmlFor="" className="mt-3">
              Startup's Sector<span className="text-red-600">*</span>
            </label>
            <input
              className="text-black"
              placeholder="Sector of your Startup"
              type="text"
              name="startUpSector"
              value={formData.startUpSector} 
              onChange={handleChange}
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
              name="headquarter"
              value={formData.headquarter} 
              onChange={handleChange}
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
              name="linkedin"
              value={formData.linkedin} 
              onChange={handleChange}
            />
          </div>
          <div className="h-2/6 flex flex-col">
            <label htmlFor="" className="mt-3">
              Description of Startup<span className="text-red-600">*</span>
            </label>
            <textarea
              name="description"
              placeholder="Brief description of idea/product/service"
              className="text-black"
              id=""
              cols="30"
              rows="3"
              value={formData.description} 
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-center my-3">
        <input type="checkbox" className="mt-1" name="" id="" />
        <label htmlFor="" className="ml-2 text-white">
          I hereby declare that i have read the Brochure and the details
          furnished above are correct to best of my Knowledge.
        </label>
      </div>
      <div className={` "flex"  justify-center m-auto`}>
        <button type="submit" disabled={loading} className="rounded bg-red-500 py-4 px-8 text-base text-white">
          
          {loading ? 'LOADING...' : 'REGISTER'}
        </button>
      </div>
        </form>
        <p className="m-auto">{message}</p>
      </div>
      
    </div>
  );
}
