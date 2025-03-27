import React from 'react'
import aboutVideo from '../assets/videos/about.mp4'

const ContactUs = () => {
  return (
    <div className="h-screen px-6 py-4 border-4 m-2 border-white rounded-[3vw] relative flex items-center overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src={aboutVideo} type="video/mp4" />
      </video>

      {/* Content Container */}
      <div className="relative z-10 w-[100vw] flex justify-center items-center">
        {/* Left Side - Text Content */}
        <div className="text-white text-center">
          <h1 className="text-[21vw] font-[anzo3] uppercase leading-none">step into the future</h1>
        
          <p className="text-[1vw] mr-2 mt-4 font-[anzo2] opacity-80">
           &copy; 2025 Anzo.Studio
          </p>
          <button className="mt-6 uppercase px-6 py-2 border-4 border-white text-white bg-black rounded-full hover:text-black hover:bg-white transition-all duration-600">
            Create Your Legacy
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
