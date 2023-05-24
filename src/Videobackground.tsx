import React from 'react'
import myVideo from "./assets/millionaire.mp4"

const Videobackground = () => {
    
  return (
      <div className='w-full h-screen'>
          <video className='w-full h-screen object-cover absolute inset-0'
              src={myVideo}
              autoPlay={true}
              muted
              playsInline
              loop={true}>
            </video>
    </div>
  )
}

export default Videobackground