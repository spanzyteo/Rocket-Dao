import { useState } from 'react'
import jay from '../assets/jay.png'
import profile from '../assets/profile.png'
import { Link } from 'react-router-dom'
import home1 from '../assets/home-1.png'
import boom from '../assets/boom-vector.png'
import stats from '../assets/stats-vector.png'
import task1 from '../assets/task-vector.png'
import activeFriends from '../assets/active-friends.png'
import active from '../assets/active-referral.png'
import tm from '../assets/tm.png'

const FriendsPage = () => {
  const [referral, setReferral] = useState(true)
  const checkActivity = () => {
    setReferral(false)
  }
  const checkReferral = () => {
    setReferral(true)
  }
  return (
    <div className="bg-[#121214] flex flex-col overflow-y-auto">
      <h1 className="mt-[67px] font-custom font-bold text-[30px] text-[#FFFFFF] mx-auto">
        Invite Friends
      </h1>
      <div className="mt-[32px] h-[237px] w-[90%] lg:w-[380px] mx-auto border border-[#3D3D3D] rounded-lg flex flex-col items-center ">
        <h1 className="mt-[22px] text-[#FFFFFF] font-normal text-[15px] font-custom">
          Affiliate Earnings
        </h1>
        <div className="flex items-center mt-[16px]">
          <h1 className="font-bold font-custom text-[#FFFFFF] text-[40px]">
            100
          </h1>
          <h1 className="font-semibold font-custom text-[40px] bg-clip-text text-transparent bg-gradient-to-b from-[#DE9F1C] to-[#78560F]">
            VASE
          </h1>
        </div>
        <div className="mt-[17px] w-[148px] h-[47px] bg-[#131313] text-[#FFFFFF] flex items-center justify-center rounded-lg">
          <h1 className="font-custom font-semibold text-[16px]">Claim VASE</h1>
        </div>
        <h1 className="w-[239px] text-[12px] font-normal font-custom text-[#FFFFFF] text-center">
          Earn 15% of your friends affiliate earnings 5% from their referrals
        </h1>
      </div>
      <div className="w-[90%] lg:w-[380px] h-[37px] flex items-center mx-auto text-[#767676] mt-[26px] bg-[#131313] rounded-lg">
        <h1
          onClick={() => checkReferral()}
          className={`w-[50%] h-full rounded-lg flex items-center justify-center font-medium font-custom text-[10px] cursor-pointer ${
            referral ? 'bg-[#2A2A2D]' : ''
          }`}
        >
          <span className="font-semibold text-[15px] mr-2">+10</span>Referrals
        </h1>
        <h1
          onClick={() => checkActivity()}
          className={`w-[50%] h-full rounded-lg flex items-center justify-center font-medium font-custom text-[10px] cursor-pointer ${
            !referral ? 'bg-[#2A2A2D]' : ''
          }`}
        >
          Activities
        </h1>
      </div>
      {referral && (
        <>
          <div className="h-[73px] w-[90%] lg:w-[380px] bg-[#2A2A2D] rounded-lg mx-auto mt-[22px] flex items-center justify-between px-[18px]">
            <img src={jay} alt="" />
            <div className="flex flex-col items-center">
              <h1 className="font-custom font-medium text-[16px] text-[#FFFFFF]">
                John Mines Smith
              </h1>
              <div className="w-[86px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
                <h1 className="text-[10px] rounded-md text-[#89898A]">
                  1 680 789 VASE
                </h1>
              </div>
            </div>
            <img src={profile} alt="img" />
          </div>
          <div className="h-[73px] w-[90%] lg:w-[380px] bg-[#2A2A2D] rounded-lg mx-auto mt-[18px] flex items-center justify-between px-[18px]">
            <img src={jay} alt="" />
            <div className="flex flex-col items-center">
              <h1 className="font-custom font-medium text-[16px] text-[#FFFFFF]">
                John Mines Smith
              </h1>
              <div className="w-[86px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
                <h1 className="text-[10px] rounded-md text-[#89898A]">
                  1 680 789 VASE
                </h1>
              </div>
            </div>
            <img src={profile} alt="img" />
          </div>
          <div className="h-[73px] w-[90%] lg:w-[380px] bg-[#2A2A2D] rounded-lg mx-auto mt-[18px] flex items-center justify-between px-[18px]">
            <img src={jay} alt="" />
            <div className="flex flex-col items-center">
              <h1 className="font-custom font-medium text-[16px] text-[#FFFFFF]">
                John Mines Smith
              </h1>
              <div className="w-[86px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
                <h1 className="text-[10px] rounded-md text-[#89898A]">
                  1 680 789 VASE
                </h1>
              </div>
            </div>
            <img src={profile} alt="img" />
          </div>
        </>
      )}
      {!referral && (
        <>
          <div className="h-[73px] w-[90%] lg:w-[380px] bg-[#18181B] rounded-lg mx-auto mt-[22px] flex items-center justify-between px-[18px]">
            <div className="flex flex-col items-center">
              <h1 className="font-medium font-custom text-[16px] text-[#FFFFFF]">
                Invite 1 - 5 friends
              </h1>
              <div className="w-[141px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
                <h1 className="text-[10px] rounded-md text-[#89898A]">
                  Earn +100 RKT per Referral
                </h1>
              </div>
            </div>
            <h1 className="text-[16px] font-extrabold font-custom text-[#0A7B00]">
              +500
            </h1>
            <img src={active} alt="" />
          </div>
          <div className="h-[73px] w-[90%] lg:w-[380px] bg-[#18181B] rounded-lg mx-auto mt-[10px] flex items-center justify-between px-[18px]">
            <div className="flex flex-col items-center">
              <h1 className="font-medium font-custom text-[16px] text-[#FFFFFF]">
                Invite 6 - 10 friends
              </h1>
              <div className="w-[141px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
                <h1 className="text-[10px] rounded-md text-[#89898A]">
                  Earn +300 RKT per Referral
                </h1>
              </div>
            </div>
            <h1 className="text-[16px] font-extrabold font-custom text-[#0A7B00]">
              +1500
            </h1>
            <img src={tm} alt="" className="h-[27px] w-[27px]" />
          </div>
          <div className="h-[73px] w-[90%] lg:w-[380px] bg-[#18181B] rounded-lg mx-auto mt-[10px] flex items-center justify-between px-[18px]">
            <div className="flex flex-col items-center">
              <h1 className="font-medium font-custom text-[16px] text-[#FFFFFF]">
                Invite 11 - 25 friends
              </h1>
              <div className="w-[141px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
                <h1 className="text-[10px] rounded-md text-[#89898A]">
                  Earn +700 RKT per Referral
                </h1>
              </div>
            </div>
            <h1 className="text-[16px] font-extrabold font-custom text-[#0A7B00]">
              +10,500
            </h1>
            <img src={tm} alt="" className="h-[27px] w-[27px]" />
          </div>
          <div className="h-[73px] w-[90%] lg:w-[380px] bg-[#18181B] rounded-lg mx-auto mt-[10px] flex items-center justify-between px-[18px]">
            <div className="flex flex-col items-center">
              <h1 className="font-medium font-custom text-[16px] text-[#FFFFFF]">
                Invite 26 - 50 friends
              </h1>
              <div className="w-[141px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
                <h1 className="text-[10px] rounded-md text-[#89898A]">
                  Earn +700 RKT per Referral
                </h1>
              </div>
            </div>
            <h1 className="text-[16px] font-extrabold font-custom text-[#0A7B00]">
              +35,500
            </h1>
            <img src={tm} alt="" className="h-[27px] w-[27px]" />
          </div>
        </>
      )}
      <button className="lg:w-[380px] w-[90%] h-[46px] bg-[#CF9304] mx-auto rounded-lg text-[15px] font-bold font-custom mt-[24px] hover:opacity-80 active:opacity-75 mb-32">
        Copy referral link
      </button>
      <div className="fixed bottom-0 right-0 left-0 h-[113px] bg-[#0E0E10] flex items-center justify-center ">
        <div className="flex items-center w-[85%] justify-between">
          <Link to={'/home'}>
            <div className="flex flex-col items-center h-[58px] justify-between">
              <img src={home1} alt="img" className="h-[21px] w-[21px]" />
              <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
                Home
              </h1>
            </div>
          </Link>
          <div className="flex flex-col items-center h-[58px] justify-between">
            <img src={boom} alt="img" className="h-[21px] w-[21px]" />
            <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
              Boom
            </h1>
          </div>
          <Link to={'/task'}>
            <div className="flex flex-col items-center h-[58px] justify-between">
              <img src={task1} alt="img" className="" />
              <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
                Task
              </h1>
            </div>
          </Link>
          <Link to={'/friends'}>
            <div className="flex flex-col items-center h-[58px] justify-between">
              <img src={activeFriends} alt="img" className="" />
              <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
                Friends
              </h1>
            </div>
          </Link>
          <Link to={'/stats'}>
            <div className="flex flex-col items-center h-[58px] justify-between">
              <img src={stats} alt="img" className="" />
              <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
                Stats
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FriendsPage
