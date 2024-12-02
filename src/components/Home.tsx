import { useEffect, useState } from 'react'
import img from '../assets/bg-image.png'
import union from '../assets/Union.png'
import rocket from '../assets/rocket.png'
import { Link } from 'react-router-dom'

const Home = () => {
  const [progress, setProgress] = useState(0)

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
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '932px',
        width: '100vw',
      }}
      className="flex flex-col items-center "
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img
            src={union}
            alt="img"
            className="mx-auto w-[64px] h-[55px] mt-[92px]"
          />
          <h1 className="mt-4 font-custom text-[#B6B6B6] text-[20px] font-extrabold shadow-md">
            ROCKET DAO
          </h1>
          <h1 className="mt-[74px] font-custom text-[#B6B6B6] text-[20px] font-extrabold">
            Hi Smith John
          </h1>
          <h1 className="mt-[3px] font-custom text-[#B6B6B6] text-[20px] font-extrabold">
            Welcome To The Universe
          </h1>
          <h1 className="mt-[88px] font-custom text-[#B6B6B6] text-[16.74px] font-extrabold uppercase">
            Launching your
          </h1>
          <h1 className="mt-[3.74px] font-custom text-[#D9B601] text-[36.46px] font-extrabold uppercase">
            Rocket
          </h1>
          <div className="mt-3 h-[22px] w-[288px] bg-[#2A2929] rounded-2xl">
            <div
              style={{
                background:
                  'linear-gradient(to right, #F0DC6E 19%, #8C5C02 39%, #C82C2D 75%)',
                width: `${progress}%`,
              }}
              className="h-full rounded-2xl transition-all duration-300 ease-in-out"
            ></div>
          </div>
          {progress === 100 && (
            <Link to={'/special-offer'}>
            <button className="mt-[279px] flex items-center justify-center bg-launch-button-gradient h-[65px] w-[300px] rounded-xl gap-2">
              <h1 className="font-extrabold text-[20px] uppercase">
                Launch Now
              </h1>
              <img src={rocket} alt="rocket" className="w-[28px] h-[28px]" />
            </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
