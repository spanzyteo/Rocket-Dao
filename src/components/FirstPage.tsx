import coin1 from '../assets/coin-1.png'
import coin2 from '../assets/coin-2.png'
import coin3 from '../assets/coin-3.png'
import union from '../assets/rocket-logo.png'
import telegram from '../assets/telegram.png'
import coin4 from '../assets/coin-4.png'
import avatar from '../assets/avatar.png'
import task from '../assets/task.png'
import wallet from '../assets/wallet.png'
import navigate from '../assets/navigate.png'
import home from '../assets/home-vector.png'
import task1 from '../assets/task-vector.png'
import friends from '../assets/friends-vector.png'
import stats from '../assets/stats-vector.png'
import { Link } from 'react-router-dom'
const FirstPage = () => {
  return (
    <div className="relative bg-[#121214] flex flex-col h-[100vh] lg:h-[700px] overflow-hidden">
      <img src={coin1} alt="" className="h-[50px] w-[200px] mx-auto" />
      <img
        src={coin2}
        alt="img"
        className="absolute top-[96px] right-0 w-[60px]"
      />
      <img
        src={coin3}
        alt="img"
        className="absolute top-[100px] left-[0px] h-[150px] w-[60px]"
      />
      <img
        src={union}
        alt="img"
        className="w-[85px] mt-[-0.4rem] h-[73px] mx-auto"
      />
      <h1 className="uppercase font-custom text-[#B6B6B6] mx-auto font-semibold mt-[8px]">
        My Bounties
      </h1>
      <h1 className="text-[38px] font-extrabold mx-auto bg-clip-text text-transparent bg-gradient-to-r from-[#FFD600] to-[#FF9D09] mt-1">
        500,000
      </h1>
      <h1 className="mt-2 uppercase font-custom font-normal mx-auto text-[#B6B6B6]">
        Vase
      </h1>
      <div className="mt-2 flex flex-col  lg:w-[380px] w-[90%] h-[211px] gap-2 mx-auto justify-between ">
        <div className="flex items-center w-full h-[63px] bg-[#1B1A19] border-r border-r-[#3A3939] border-b border-b-[#3A3939] rounded-lg">
          <img
            src={telegram}
            alt="telegram"
            className="w-[16px] h-[14px] ml-[21px]"
          />
          <div className="flex font-custom text-[#FFFFFF] items-center ml-[10px] w-[237px] md:w-[287px] justify-between">
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
          <div className="flex font-custom text-[#B6B6B6] items-center ml-[10px] w-[237px] md:w-[287px] justify-between">
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
          <div className="flex font-custom text-[#B6B6B6] items-center ml-[10px] w-[237px] md:w-[287px] justify-between">
            <h1>Invite</h1>
            <h1>+150,000</h1>
          </div>
          <img src={coin4} alt="img" className="h-[20px] w-[19px] ml-[4px]" />
        </div>
      </div>
      <button className="mt-10 flex items-center justify-center bg-launch-button-gradient h-[65px] w-[300px] rounded-xl gap-4 hover:opacity-80 active:opacity-75 mx-auto ">
        <img src={wallet} alt="img" className="w-[24px] h-[24px]" />
        <h1 className="font-custom font-semibold text-[15px] text-[#000000]">
          Ton Wallet Connect
        </h1>
        <img
          src={navigate}
          alt="img"
          className="h-[16px] w-[16px] object-contain"
        />
      </button>
      <div className="fixed bottom-0 right-0 left-0 h-[100px] bg-[#0E0E10] flex items-center justify-center">
        <div className="flex items-center w-[85%] justify-between">
          <div className="flex flex-col items-center h-[50px] justify-between">
            <img src={home} alt="img" className="h-[21px] w-[21px]" />
            <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
              Home
            </h1>
          </div>

          <Link to={'/task'}>
            <div className="flex flex-col items-center h-[50px] justify-between">
              <img src={task1} alt="img" className="w-[15px] h-[21px]" />
              <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
                Task
              </h1>
            </div>
          </Link>
          <Link to={'/friends'}>
            <div className="flex flex-col items-center h-[50px] justify-between">
              <img src={friends} alt="img" className="w-[27px] h-[21px]" />
              <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
                Friends
              </h1>
            </div>
          </Link>
          <Link to={'/stats'}>
            <div className="flex flex-col items-center h-[50px] justify-between">
              <img src={stats} alt="img" className="h-[21px] w-[21px]" />
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

export default FirstPage
