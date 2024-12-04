import coin1 from '../assets/coin-1.png'
import coin2 from '../assets/coin-2.png'
import coin3 from '../assets/coin-3.png'
import union from '../assets/Union.png'
import telegram from '../assets/telegram.png'
import coin4 from '../assets/coin-4.png'
import avatar from '../assets/avatar.png'
import task from '../assets/task.png'
import message from '../assets/message.png'
import wallet from '../assets/wallet.png'
import navigate from '../assets/navigate.png'
import home from '../assets/home-vector.png'
import boom from '../assets/boom-vector.png'
import task1 from '../assets/task-vector.png'
import friends from '../assets/friends-vector.png'
import stats from '../assets/stats-vector.png'
const FirstPage = () => {
  return (
    <div className="h-[932px] relative bg-[#121214] flex flex-col">
      <img src={coin1} alt="" className="lg:h-[120px] w-[395px] mx-auto" />
      <img src={coin2} alt="img" className='absolute top-[96px] right-0' />
      <img src={coin3} alt="img" className='absolute top-[163px] left-[0px] h-[271px] ' />
      <img src={union} alt="img" className="w-[85px] h-[73px] mx-auto" />
      <h1 className="uppercase font-custom text-[#B6B6B6] mx-auto font-semibold text-[22px] mt-[18px]">
        My Bounties
      </h1>
      <h1 className="font-custom text-[48px] font-extrabold mt-[28px] mx-auto bg-clip-text text-transparent bg-gradient-to-r from-[#FFD600] to-[#FF9D09]">
        500,000
      </h1>
      <h1 className="mt-[17px] uppercase font-custom font-normal mx-auto text-[22px] text-[#B6B6B6]">
        Vase
      </h1>
      <div className="mt-[57px] flex flex-col  lg:w-[380px] w-[90%] h-[211px] gap-2 mx-auto justify-between ">
        <div className="flex items-center w-full h-[63px] bg-[#1B1A19] border-r border-r-[#3A3939] border-b border-b-[#3A3939] rounded-lg">
          <img
            src={telegram}
            alt="telegram"
            className="w-[16px] h-[14px] ml-[21px]"
          />
          <div className="flex font-custom font-semibold text-[#FFFFFF] items-center ml-[10px] w-[237px] md:w-[287px] justify-between">
            <h1>Telegram Age</h1>
            <h1>+10,000</h1>
          </div>
          <img src={coin4} alt="img" className="h-[20px] w-[19px] ml-[4px]" />
        </div>
        <div className="flex items-center w-full h-[63px] bg-[#1B1A19] border-r border-r-[#3A3939] border-b border-b-[#3A3939] rounded-lg">
          <img
            src={task}
            alt="telegram"
            className="w-[12px] h-[17px] ml-[21px]"
          />
          <div className="flex font-custom font-semibold text-[#B6B6B6] items-center ml-[10px] w-[237px] md:w-[287px] justify-between">
            <h1>Task</h1>
            <h1>+50,000</h1>
          </div>
          <img src={coin4} alt="img" className="h-[20px] w-[19px] ml-[4px]" />
        </div>
        <div className="flex items-center w-full h-[63px] bg-[#1B1A19] border-r border-r-[#3A3939] border-b border-b-[#3A3939] rounded-lg">
          <img
            src={avatar}
            alt="telegram"
            className="w-[16px] h-[14px] ml-[21px]"
          />
          <div className="flex font-custom font-semibold text-[#B6B6B6] items-center ml-[10px] w-[237px] md:w-[287px] justify-between">
            <h1>Invite</h1>
            <h1>+150,000</h1>
          </div>
          <img src={coin4} alt="img" className="h-[20px] w-[19px] ml-[4px]" />
        </div>
      </div>
      <img
        src={message}
        alt="img"
        className="mt-[28px] w-[58px] h-[58px] mx-auto"
      />
      <button className="mt-[17px] flex items-center justify-center bg-launch-button-gradient h-[65px] w-[300px] rounded-xl gap-4 hover:opacity-80 active:opacity-75 mx-auto ">
        <img src={wallet} alt="img" className="w-[24px] h-[24px]" />
        <h1 className="font-custom font-semibold text-[15px] text-[#000000]">
          Ton Wallet Connect
        </h1>
        <img src={navigate} alt="img" className="h-[31px] w-[31px]" />
      </button>
      <div className="mt-[28px] h-[113px] bg-[#0E0E10] flex items-center justify-center">
        <div className='flex items-center w-[85%] justify-between'>
          <div className="flex flex-col items-center h-[58px] justify-between">
            <img src={home} alt="img" className="h-[21px] w-[21px]" />
            <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
              Home
            </h1>
          </div>
          <div className="flex flex-col items-center h-[58px] justify-between">
            <img src={boom} alt="img" className="h-[21px] w-[21px]" />
            <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
              Boom
            </h1>
          </div>
          <div className="flex flex-col items-center h-[58px] justify-between">
            <img src={task1} alt="img" className="" />
            <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
              Task
            </h1>
          </div>
          <div className="flex flex-col items-center h-[58px] justify-between">
            <img src={friends} alt="img" className="" />
            <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
              Friends
            </h1>
          </div>
          <div className="flex flex-col items-center h-[58px] justify-between">
            <img src={stats} alt="img" className="" />
            <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
              Stats
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
