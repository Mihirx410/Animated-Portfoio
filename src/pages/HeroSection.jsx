import { motion } from 'motion/react'
import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div className='h-screen px-6 py-4 bg-white'>

      <div className="h-full w-full rounded-4xl bg-[url('https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg')] bg-cover bg-center">
      

      <div className='ml-10 flex justify-between'>
      <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 1608 1279" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 1279" height="100" width="80" data-type="color" role="img" aria-label="Anzo.Studio Brand Identity and Logo Design">
    <g>
        <path fill="#FAFAFA" d="M661.18 1279C274.682 1279 0 992.076 0 639.5S274.682 0 661.18 0c384.07 0 656.32 286.924 656.32 639.5S1045.25 1279 661.18 1279Zm0-282.061c209.05 0 357.33-162.914 357.33-357.439 0-194.525-148.28-357.439-357.33-357.439-211.48 0-362.19 162.914-362.19 357.439 0 194.525 150.71 357.439 362.19 357.439Z" data-color="1"></path>
        <path fill="#FAFAFA" d="M1454.86 1279c-85.08 0-153.14-68.08-153.14-153.19 0-85.1 68.06-153.186 153.14-153.186 85.08 0 153.14 68.086 153.14 153.186 0 85.11-68.06 153.19-153.14 153.19Z" data-color="1"></path>
    </g>
</svg>
      </div>

      <motion.div
      animate={{
        rotate:360,
      }}
      >
    <h1 className='text-white flex justify-items-start mt-10'>I AM</h1>
    <h1 className='text-white flex justify-items-start mt-10'>Web Developer</h1>
    <h1 className='text-white flex justify-items-start mt-10'>& Graphic Designer</h1>
      </motion.div>
      
      </div>

      </div>
  
    </>
  )
}

export default HeroSection
