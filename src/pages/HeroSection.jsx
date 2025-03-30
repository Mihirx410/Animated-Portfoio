import { motion,useMotionValue, useSpring } from 'framer-motion';
import React, { useRef } from 'react';

const HeroSection = () => {
  // Ref to track the motion.div element
  const motionRef = useRef(null);

  // Motion values for X, Y position and rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Add spring effect for smooth animation
  const springConfig = { damping: 70, stiffness: 80 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  // Handle mouse movement
  const handleMouseMove = (event) => {``
    if (!motionRef.current) return;

    const rect = motionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = event.clientX - rect.left - centerX;
    const mouseY = event.clientY - rect.top - centerY;

    const maxMove = 50;
    const maxRotate = 15;

    x.set((mouseX / centerX) * maxMove);
    y.set((mouseY / centerY) * maxMove);
    rotateX.set(-(mouseY / centerY) * maxRotate);
    rotateY.set((mouseX / centerX) * maxRotate);
  };

  // Reset position and rotation when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <>
      <div className='h-screen px-6 py-4 bg-white'>
        <div
          className="h-full w-full rounded-4xl bg-[url('https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg')] bg-cover bg-center"
        >
          <div className='ml-10 flex justify-between'>
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="0 0 1608 1279"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1608 1279"
              height="100"
              width="80"
              data-type="color"
              role="img"
              aria-label="Anzo.Studio Brand Identity and Logo Design"
            >
              <g>
                <path
                  fill="#FAFAFA"
                  d="M661.18 1279C274.682 1279 0 992.076 0 639.5S274.682 0 661.18 0c384.07 0 656.32 286.924 656.32 639.5S1045.25 1279 661.18 1279Zm0-282.061c209.05 0 357.33-162.914 357.33-357.439 0-194.525-148.28-357.439-357.33-357.439-211.48 0-362.19 162.914-362.19 357.439 0 194.525 150.71 357.439 362.19 357.439Z"
                  data-color="1"
                ></path>
                <path
                  fill="#FAFAFA"
                  d="M1454.86 1279c-85.08 0-153.14-68.08-153.14-153.19 0-85.1 68.06-153.186 153.14-153.186 85.08 0 153.14 68.086 153.14 153.186 0 85.11-68.06 153.19-153.14 153.19Z"
                  data-color="1"
                ></path>
              </g>
            </svg>
            <img 
          src="images/icon1.avif" 
          alt="Inner Overlay" 
          className="absolute top-150 right-13 w-25 rounded-lg shadow-lg"
        />
          </div>

          <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 2 }}
         transition={{
          delay: 1, 
          duration: 2,
          ease: 'easeInOut',
        }}
            ref={motionRef}
            className='text-white mt-[7.5vw] ml-[3.5vw] w-fit'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              x: xSpring,
              y: ySpring,
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
              perspective: 1000,
            }}
          >
            <h1 className='text-[11.5vw] uppercase leading-[6vw] tracking-[6px] font-[anzo3] mt-10 text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
              I AM <span className='text-black'>Designer™</span>
            </h1>
            <h1 className='text-[18.5vw] uppercase leading-[12vw] font-[anzo3] tracking-[6px] mt-10 text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
              Developer
            </h1>
            <h1 className='text-[6.5vw] uppercase leading-[2vw] tracking-[6px] font-[anzo3] mt-10 text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
              to hire
            </h1>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;