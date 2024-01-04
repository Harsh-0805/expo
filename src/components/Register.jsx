import React, { useState } from 'react'
import './Register.css'
export default function Register() {
    const [mode, setmode] = useState(0)
    const participant = () => {
        setmode(1);
    }
    const startup = () => {
        setmode(2);
    }
    return (
        <div id='reg' className='bg-black flex flex-col justify-center items-center '>
            <h1 className='text-5xl text-red-600 mt-10 '>REGISTER NOW</h1>
            <div className={`${(mode == 0) ? 'flex' : 'hidden'} flex-col m-20`}>
                <button className=' p-5 hover:bg-red-500 hover:border-white hover:border-2 shadow-md shadow-red-500 m-2 text-2xl text-white border-red-600 border rounded-2xl' onClick={participant}>Register as a Participant</button>
                <button className=' p-5 hover:bg-red-500 hover:border-white hover:border-2 shadow-md shadow-red-500 m-2 text-2xl text-white border-red-600 border rounded-2xl' onClick={startup}>Register as a StartUp</button>
            </div>
            <div className={`${(mode == 1) ? 'flex flex-col' : 'hidden'} mt-10 w-1/2 mx-5 bg-neutral-950 p-2 text-white border-red-600 border-2 rounded-2xl`}>
                <div className='h-1/7 flex justify-center items-center'>
                    <p className='text-red-600 text-2xl'>Register As a Participant</p>
                </div>
                <form action="\" className=' flex flex-col h-6/7'>
                    <div className='h-1/5 flex flex-col'>
                        <label htmlFor="" className='mt-3'>Full Name<span className='text-red-600'>*</span></label>
                        <input className='text-black' placeholder='Enter your Name' type="text" />
                    </div>
                    <div className='h-1/5 flex flex-col'>
                        <label htmlFor="" className='mt-3'>Mobile Number<span className='text-red-600'>*</span></label>
                        <input className='text-black' placeholder='Enter your Contact Number' type="text" />
                    </div>
                    <div className='h-1/5 flex flex-col'>
                        <label htmlFor="" className='mt-3'>Email<span className='text-red-600'>*</span></label>
                        <input className='text-black' placeholder='Enter your email' type="text" />
                    </div>
                    <div className='h-1/5 flex flex-col'>
                        <label htmlFor="" className='mt-3'>Are you a VNIT, Nagpur Student/Alumni?<span className='text-red-600'>*</span></label>
                        <div className='flex justify-start'>
                            <div className='mx-5'>
                                <label htmlFor="">Yes</label>
                                <input className='text-black' name='student' type="radio" />
                            </div>
                            <div className='mx-5'>
                                <label htmlFor="">No</label>
                                <input className='text-black' name='student' type="radio" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className={`${(mode == 2) ? 'flex flex-col' : 'hidden'} mt-10 w-1/2 mx-5 bg-neutral-950 p-2 text-white border-red-600 border-2 rounded-2xl`}>
                <div className='h-1/7 flex justify-center items-center'>
                    <p className='text-red-600 text-2xl'>Register as a Startup</p>
                </div>
                <form action="\" className=' flex flex-col h-6/7'>
                    <div className='h-1/6 flex flex-col'>
                        <label htmlFor="" className='mt-3'>Startup Name<span className='text-red-600'>*</span></label>
                        <input className='text-black' placeholder='Enter your Startup Name' type="text" />
                    </div>
                    <div className='h-1/6 flex flex-col'>
                        <label htmlFor="" className='mt-3'>Startup's Sector<span className='text-red-600'>*</span></label>
                        <input className='text-black' placeholder='Sector of your Startup' type="text" />
                    </div>
                    <div className='h-1/6 flex flex-col'>
                        <label htmlFor="" className='mt-3'>Startup Headquarter<span className='text-red-600'>*</span></label>
                        <input className='text-black' placeholder='place of Startup Headquater' type="text" />
                    </div>
                    <div className='h-1/6 flex flex-col'>
                        <label htmlFor="" className='mt-3'>Linkedin/Website of your startup<span className='text-red-600'>*</span></label>
                        <input className='text-black' placeholder='website or linkedin' type="text" />
                    </div>
                    <div className='h-2/6 flex flex-col'>
                        <label htmlFor="" className='mt-3'>Description of Startup<span className='text-red-600'>*</span></label>
                        <textarea name="" placeholder='Brief description of idea/product/service' className='text-black' id="" cols="30" rows="3"></textarea>
                    </div>
                </form>
            </div>
            <div className={`${(mode == 0) ? 'hidden' : 'flex'}  justify-center my-3`}>
                <input type="checkbox" className='mt-1' name="" id="" />
                <label htmlFor="" className='ml-2 text-white'>I hereby declare that i have read the Brochure and the details furnished above are correct to best of my Knowledge.</label>
            </div>
            <div className={`${(mode == 0) ? 'hidden' : 'flex'}  justify-center my-3`}>
                <button className='bg-red-500 py-4 px-8 text-base text-white'>REGISTER</button>
            </div>
        </div>
    )
}