import React from 'react';
import backgroundVideo from '../assets/videos/file.mp4'; // Video from assets

const FocusSection = () => {
  return (
    <div className="h-screen px-6 py-4 border-4 relative">
      
      {/* Background Video (Fixed) */}
      <video 
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]" // Ensure video is behind everything
        src={backgroundVideo}
        autoPlay 
        loop 
        muted 
        playsInline
      />

      {/* Text Section (Scrolls while video stays fixed) */}
      <div className="h-full w-full text-white rounded-4xl border-14 border-white flex justify-center items-center">
        <div className="text-center">
          <h1 className="uppercase text-[18vw] tracking-[5px] font-[anzo3] leading-[18vw] mix-blend-difference drop-shadow-lg">The</h1>
          <h1 className="uppercase text-[20vw] font-[anzo3] tracking-[5px] leading-[10vw] mix-blend-difference drop-shadow-lg">Focus</h1>
        </div>
      </div>

    </div>
  );
};

export default FocusSection;
