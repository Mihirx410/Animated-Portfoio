import React from 'react'

const ModernPage1 = () => {
  return (
      <div className='h-screen px-6 py-4 bg-black border-4'>
      <div
        className="h-full w-full text-white rounded-4xl border-14 bg-black border-white bg-[url('images/MODERN.jpg')] bg-right bg-no-repeat flex justify-start items-center"
      >
        <div className='px-10 py-2 m-6 text-left'>

          <h1 className='uppercase text-[14vw] font-[anzo3] tracking-[3px] leading-none'>[ modern ]</h1>
          <h3 className='uppercase text-[1.3vw] font-[anzo2] mt-4 tracking-wider'>
            DESIGNED FOR NOW | BUILD FOR future
          </h3>
          <p className='text-[1vw] mt-4 max-w-md font-[anzo2]'>
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