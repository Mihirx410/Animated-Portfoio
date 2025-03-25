import React from 'react'

const FocusSection = () => {
  return (
    <div className='h-screen px-6 py-4 bg-black border-4'>
      <div
        className="h-full w-full text-white rounded-4xl border-14 border-white flex items-center justify-center bg-[url('images/full_robot.jpg')] bg-contain bg-center bg-no-repeat"
      >
        <div className='px-10 py-10 m-10 text-center'>
          <h1 className='uppercase text-[15vw] font-[anzo1] leading-none'>The</h1>
          <h1 className='uppercase text-[15vw] font-[anzo1] leading-none'>Focus</h1>
        </div>
      </div>
    </div>
  )
}

export default FocusSection