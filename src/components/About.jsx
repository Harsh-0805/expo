import React from 'react';
import './About.css';
import about from"./aboutexpo.png"



const AboutSection = () => {
  return (
    <>
    <div className='bg-auto sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover ... bg-[url(https://media.istockphoto.com/id/1321467830/vector/red-abstract-background-abstract-luxury-red-background-valentine-layout-design-studio-room.jpg?s=612x612&w=0&k=20&c=HMi9eratTzZlDAvk-vLjpsa3TKSxjwTyWfeWLxGKoRQ=)]'>
      <h1 className='text-center text-6xl font-bold pt-5 text-white'>ABOUT STARTUP EXPO</h1>
      <p className='text-center text-3xl font-bold text-red-100 my-5'>Get Ready For Product Testing and Mass Networking</p>
     <div id="img_and_para" className='justify-start'>

      <img id='image' src={about} alt="" className='ml-20 mt-10' />

      <p className='text-2xl mx-20 my-20 font-medium text-white'>StartupExpo is an exhibition event for startups that draws participants, speakers, 
      investors, and organisations from all around India. Startups will have a fantastic platform to share
      their cutting-edge innovations with the rest of the world at the event, which will also introduce 
      them to a fantastic community that will support their progress. Startups that are interested should
      complete this form:</p>

      

     </div>

     <center>
     <button className='bg-black rounded text-center h-12 w-40 self-center text-white font-bold mb-10'>Register now</button>

     </center>

     
    </div>
     
    </>
  );
};

export default AboutSection;
