import React from 'react'


const VideoTitle = ({title,overview}) => {

  return (
    <div className='absolute  z-1 w-screen aspect-video bg-gradient-to-r  from-black flex flex-col items-start pt-[300px] ps-32'>
        <h1 className='text-8xl text-white font-bold text-left'>{title}</h1>
        <p className='text-2xl text-white w-1/2 text-left mt-8'>{overview}</p>
        <div className='flex gap-6 mt-8'>
            <button className='bg-gray-500 text-white px-10 py-6 rounded-lg text-xl font-bold'>Play Now</button>
            <button className='bg-white text-black px-10 py-6 rounded-lg text-xl font-bold'>View Details</button>
        </div>
    </div>
  )
}

export default VideoTitle