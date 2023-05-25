

const Hero = () => {
  return (
      <div className='w-full h-screen bg-hero flex justify-center items-center'>
          <div className='w-[390px] h-[490px] bg-[rgba(0,0,0,0.5)] rounded p-5 flex-col'>
              <h1 className='text-white text-2xl'>Setup Game</h1>

              <div className="flex flex-col mt-8">
                  <h2 className="text-white text-sm">Number of Questions</h2>
                  <input type="number" className="w-[100%] h-[40px] bg-[#fff] mt-1 rounded outline-none pl-2"/>
              </div>
          </div>
    </div>
  )
}

export default Hero