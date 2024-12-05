import tg from '../assets/tg-task.png'
import tm from '../assets/tm.png'
import yt from '../assets/youtube-task.png'
import x_task from '../assets/x-task.png'
import { Link } from 'react-router-dom'
import boom from '../assets/boom-vector.png'
import friends from '../assets/friends-vector.png'
import stats from '../assets/stats-vector.png'
import active_task from '../assets/active-task.png'
import home1 from '../assets/home-1.png'

const TaskPage = () => {
  return (
    <div className="bg-[#121214] flex flex-col overflow-y-auto">
      <div className="fixed top-0 left-0 right-0 h-[230px] bg-[#121214] z-10 mb-20">
        <h1 className="font-extrabold text-[#767676] text-[25px] mx-auto text-center mt-[61px]">
          ROCKET
        </h1>
        <h1 className="mx-auto text-[14px] font-normal text-[#767676] text-center mt-[19px]">
          Complete available task and earn VASE
        </h1>
        <div className="h-[54px] lg:w-[380px] w-[90%] bg-[#131313] border border-[#3D3D3D] mx-auto mt-[24px] rounded-lg flex items-center justify-between">
          <h1 className="text-[#FFFFFF] w-[50%] h-[100%] flex items-center justify-center font-custom font-normal text-[15px] rounded-lg bg-[#3D3D3D]">
            Active
          </h1>
          <Link
            to={'/completed-task'}
            className="w-[50%] h-full rounded-lg flex items-center justify-center"
          >
            <h1 className="text-[#FFFFFF] w-[50%] h-[100%] flex items-center justify-center font-custom font-normal text-[15px]">
              Completed
            </h1>
          </Link>
        </div>
      </div>
      <div className="overflow-y-auto mt-[200px] pb-[120px]">
        <div className="mt-[31px] flex items-center h-[89px] w-[90%] lg:w-[380px] bg-[#18181B] mx-auto rounded-lg">
          <img src={tg} alt="img" className="ml-[13px]" />
          <div className="flex flex-col w-[140px] ml-[24px]">
            <h1 className="text-[#FFFFFF] text-[14px] font-medium">
              Join Rocket DAO on Telegram
            </h1>
            <div className="w-[86px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
              <h1 className="text-[10px] rounded-md text-[#89898A]">
                20,000 VASE +
              </h1>
            </div>
          </div>
          <button className="bg-[#0091FF] lg:ml-[48px] rounded-md w-[69px] h-[23px] font-custom font-semibold text-[10px]">
            Claim
          </button>
        </div>
        <div className="mt-[11px] flex items-center h-[89px] w-[90%] lg:w-[380px] bg-[#18181B] mx-auto rounded-lg">
          <img src={tg} alt="img" className="ml-[13px]" />
          <div className="flex flex-col w-[140px] ml-[24px]">
            <h1 className="text-[#FFFFFF] text-[14px] font-medium">
              Follow Rocket DAO Channel
            </h1>
            <div className="w-[86px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
              <h1 className="text-[10px] rounded-md text-[#89898A]">
                20,000 VASE +
              </h1>
            </div>
          </div>
          <img
            src={tm}
            alt=""
            className="h-[29px] w-[29px] lg:ml-[68px] ml-[18px]"
          />
        </div>
        <div className="mt-[11px] flex items-center h-[89px] w-[90%] lg:w-[380px] bg-[#18181B] mx-auto rounded-lg">
          <img src={yt} alt="img" className="ml-[13px]" />
          <div className="flex flex-col w-[140px] ml-[24px]">
            <h1 className="text-[#FFFFFF] text-[14px] font-medium">
              Subscribe to Rocket DAO on Youtube
            </h1>
            <div className="w-[86px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
              <h1 className="text-[10px] rounded-md text-[#89898A]">
                20,000 VASE +
              </h1>
            </div>
          </div>
          <button className="bg-[#0091FF] lg:ml-[48px] rounded-md w-[69px] h-[23px] font-custom font-semibold text-[10px]">
            Claim
          </button>
        </div>
        <div className="mt-[11px] flex items-center h-[89px] w-[90%] lg:w-[380px] bg-[#18181B] mx-auto rounded-lg">
          <img src={x_task} alt="img" className="ml-[13px]" />
          <div className="flex flex-col w-[130px] ml-[24px]">
            <h1 className="text-[#FFFFFF] text-[14px] font-medium">
              Follow Rocket DAO on X
            </h1>
            <div className="w-[86px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
              <h1 className="text-[10px] rounded-md text-[#89898A]">
                20,000 VASE +
              </h1>
            </div>
          </div>
          <img
            src={tm}
            alt=""
            className="h-[29px] w-[29px] lg:ml-[68px] ml-[28px]"
          />
        </div>
        <div className="mt-[11px] flex items-center h-[89px] w-[90%] lg:w-[380px] bg-[#18181B] mx-auto rounded-lg">
          <img src={yt} alt="img" className="ml-[13px]" />
          <div className="flex flex-col w-[140px] ml-[24px]">
            <h1 className="text-[#FFFFFF] text-[14px] font-medium">
              Watch Rocket News
            </h1>
            <div className="w-[86px] h-[18px] bg-[#0E0E10] flex items-center justify-center rounded-sm mt-2">
              <h1 className="text-[10px] rounded-md text-[#89898A]">
                20,000 VASE +
              </h1>
            </div>
          </div>
          <button className="bg-[#0091FF] lg:ml-[48px] rounded-md w-[69px] h-[23px] font-custom font-semibold text-[10px]">
            Claim
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 left-0 h-[70px] bg-[#0E0E10] flex items-center justify-center ">
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
              <img src={active_task} alt="img" className="" />
              <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
                Task
              </h1>
            </div>
          </Link>
          <Link to={'/friends'}>
            <div className="flex flex-col items-center h-[58px] justify-between">
              <img src={friends} alt="img" className="" />
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

export default TaskPage
