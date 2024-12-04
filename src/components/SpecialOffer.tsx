import { useEffect, useState } from 'react'
import rocket from '../assets/rocket-1.png'
import gift from '../assets/gift.png'
import claim from '../assets/claim.png'
import { Link } from 'react-router-dom'
const SpecialOffer = () => {
  const [progress, setProgress] = useState(0)
  const [launchProgress, setLaunchProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const launchInterval = setInterval(() => {
        setLaunchProgress((prev) => {
          if (prev >= 100) {
            clearInterval(launchInterval)
            return 100
          }
          return prev + 1
        })
      }, 50)

      return () => clearInterval(launchInterval)
    }
  }, [progress])
  return (
    <div className="flex flex-col bg-special-offer-gradient h-[932px]">
      <div className="flex flex-col items-center">
        <img src={rocket} alt="img" className="h-[212px] w-[224px] mt-[56px]" />
        <h1 className="font-custom text-[#FFFFFF] font-extrabold text-[18px] mt-5">
          We have Something Special for You
        </h1>
      </div>
      <div className="flex flex-col lg:items-center mt-[29px] ml-[25px]">
        <h1 className="font-custom text-[18px] text-[#B6B6B6] font-normal">
          Checking your Telegram Age
        </h1>
        <div className="mt-3 h-[22px] w-[288px] bg-[#2A2929] rounded-2xl">
          <div
            style={{
              background:
                'linear-gradient(to right, #2E2F30 28%, #16639D 63%, #0091FF 100%)',
              width: `${progress}%`,
            }}
            className="h-full rounded-2xl transition-all duration-300 ease-in-out"
          ></div>
        </div>
        {progress === 100 && (
          <h1 className="text-[14px] font-normal text-[#9B9999] mt-[9px]">
            Hi, Smith John - You've been on Telegram for 4 year
          </h1>
        )}
        <h1 className="text-[18px] text-[#B6B6B6] font-normal mt-[50px]">
          Preparing your Launch Reward
        </h1>
        <div className="mt-3 h-[22px] w-[288px] bg-[#2A2929] rounded-2xl">
          <div
            style={{
              background:
                'linear-gradient(to right, #2E2F30 22%, #16639D 49%, #00FF09 100%)',
              width: `${launchProgress}%`,
            }}
            className="h-full rounded-2xl transition-all duration-300 ease-in-out"
          ></div>
        </div>
        <div className="mt-[29px] flex flex-row justify-between h-[164px] w-[90%] lg:w-[380px] bg-[#1A1A1A] rounded-md">
          <img
            src={gift}
            alt="img"
            className="w-[137px] h-[160px] ml-[0.5rem]"
          />
          <div className="h-[144px] lg:w-[195px] w-[155px] border border-[#4D4B4B] mt-[10px] rounded-md flex items-center justify-center mr-[0.5rem]">
            <div className="h-[125px] lg:w-[169px] w-[135px] border border-[#4D4B4B] rounded-md flex flex-col items-center">
              <h1 className="font-custom font-medium text-[15px] text-[#3B3B3B] text-center leading-[15px] mt-[32px]">
                Telegram Age Reward
              </h1>
              {launchProgress === 100 && (
                <h1 className="font-bold text-[#B6B6B6] mt-4">1000 RKT</h1>
              )}
            </div>
          </div>
        </div>
        {launchProgress === 100 && (
          <Link to={'/home'}>
          <button className="mt-[49px] flex items-center justify-center bg-launch-button-gradient h-[65px] w-[300px] rounded-xl gap-2 hover:opacity-80 active:opacity-75">
            <h1 className="font-extrabold text-[20px] uppercase">Claim</h1>
            <img src={claim} alt="rocket" className="w-[28px] h-[28px]" />
          </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default SpecialOffer
