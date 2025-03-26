import React from 'react';

const ModernPage2 = () => {
  return (
    <div className='h-screen px-6 py-4 bg-black border-4 relative'>
      {/* Main Container */}
      <div className="h-full w-full text-white rounded-4xl border-14 bg-black border-white bg-[url('images/girl_image.jpg')] bg-contain bg-no-repeat bg-right flex justify-start items-center relative">
        
        {/* Left Shadow */}
        <div className="absolute inset-y-0 left-0 w-2/4 bg-gradient-to-r from-black via-black/100 to-transparent pointer-events-none"></div>

        {/* Right Shadow */}
        <div className="absolute inset-y-0 right-0 w-2/4 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none"></div>

        {/* Laptop Image - Correctly Aligned */}
        <img 
          src="images/LAPTOP.jpg" 
          alt="Laptop" 
          className="absolute right-[3%] bottom-40 w-[30%] max-w-md opacity-90"
        />

        {/* Tablet Image - Positioned Right */}
        <img 
          src="images/IPAD.jpg" 
          alt="Tablet" 
          className="absolute right-[15%] bottom-20 w-[20%] max-w-xs opacity-95 shadow-lg"
        />

        {/* Text Content - Centered on Left Side */}
        <div className='px-10 py-2 m-6 text-center relative z-10'>
          <h1 className='uppercase text-[12vw] font-[anzo3] tracking-[3px] leading-none'>[ elegant ]</h1>
          <h3 className='uppercase text-[1.3vw] font-[anzo1] mt-6 tracking-wider'>
            REFINED | SOPHISTICATED | IMPACTFUL
          </h3>
          <p className='text-[1.2vw] mt-4 max-w-md font-[anzo2] opacity-50'>
            Elegance isn’t just style - it’s substance, the perfect balance of form and function. The most influential brands don’t follow trends - they define them through presence that feels both effortless and commanding.
          </p>
          <button
            id='hero-button'
            className="border-4 cursor-pointer border-white bg-black rounded-full w-60 text-white hover:text-black hover:bg-white transition-all duration-600 ease-in-out"
          >
            CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModernPage2;
