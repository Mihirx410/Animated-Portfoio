import React from 'react'

const ModernPage1 = () => {
  return (
    <div className='h-screen px-6 py-4 bg-black border-4 relative'>
      {/* Main Container */}
      <div
        className="h-full w-full text-white rounded-4xl border-14 bg-black border-white bg-[url('images/MODERN_VR.jpg')] bg-contain bg-no-repeat bg-right flex justify-start items-center relative"
      >
        {/* Left Shadow */}
        <div className="absolute inset-y-0 left-0 w-2/4 bg-gradient-to-r from-black via-black/100 to-transparent pointer-events-none"></div>

        {/* Right Shadow */}
        <div className="absolute inset-y-0 right-0 w-2/4 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none"></div>

        {/* Small Inner Image */}
        <img 
          src="images/inner_image.jpg" 
          alt="Inner Overlay" 
          className="absolute top-85 right-25 w-85 rounded-lg shadow-lg"
        />

        {/* Text Content */}
        <div className='px-10 py-2 m-6 text-center relative z-10'>
          <h1 className='uppercase text-[12vw] font-[anzo3] tracking-[3px] leading-none'>[ modern ]</h1>
          <h3 className='uppercase text-[1.3vw] font-[anzo2] mt-4 tracking-wider'>
            DESIGNED FOR NOW | BUILT FOR FUTURE
          </h3>
          <p className='text-[1.2vw] mt-4 max-w-md font-[anzo2] opacity-50'>
            The digital world moves fast - your brand should move even faster. True innovation isn’t about keeping up; it’s about setting the pace. Design that feels effortless yet wields powerful influence.
          </p>
          <button
            id='hero-button'
            className="border-4 cursor-pointer border-white bg-black rounded-full w-60 text-white hover:text-black hover:bg-white transition-all duration-600 ease-in-out"
          >
            THE WORQ
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModernPage1
