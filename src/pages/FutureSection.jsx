import React from 'react';
import backgroundVideo from '../assets/videos/the_future.mp4';

const FutureSection = () => {
  return (
    <div className="relative h-screen px-6 py-4 border-4 overflow-hidden">
      
      {/* Background Video (Absolute, Scoped to this Section) */}
      <div className="fixed inset-0 z-[-1]">
        <video 
          className="w-full h-full object-cover" 
          src={backgroundVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </div>

      {/* Text Section */}
      <div className="h-full w-full text-white rounded-4xl border-14 border-white flex justify-center items-center">
        <div className="text-center">
          <h1 className="uppercase text-[18vw] tracking-[5px] font-[anzo3] leading-[18vw] mix-blend-difference drop-shadow-lg">The</h1>
          <h1 className="uppercase text-[20vw] font-[anzo3] tracking-[5px] leading-[10vw] mix-blend-difference drop-shadow-lg">Future</h1>
        </div>
      </div>

    </div>
  );
};

export default FutureSection;
