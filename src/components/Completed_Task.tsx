import { Link } from 'react-router-dom'
import tg from '../assets/tg-task.svg'
import done_task from '../assets/task-done.png'
import yt from '../assets/youtube-task.svg'
import x_task from '../assets/x-task.svg'
import active_task from '../assets/active-task.svg'
import home1 from '../assets/home-1.svg'
import friends from '../assets/friends-vector.png'
import stats from '../assets/stats-vector.png'

const Completed_Task = () => {
  return (
    <div className="bg-[#121214] flex flex-col">
      <div className="fixed top-0 left-0 right-0 h-[200px] bg-[#121214]">
        <h1 className="font-extrabold text-[#767676] text-[25px] text-center mx-auto mt-[50px]">
          ROCKET
        </h1>
        <h1 className="mx-auto text-[14px] font-normal text-center text-[#767676] mt-[1px]">
          Complete available task and earn VASE
        </h1>
        <div className="h-[44px] lg:w-[380px] w-[90%] bg-[#131313] border border-[#3D3D3D] mx-auto mt-[24px] rounded-lg flex items-center justify-between">
          <Link
            to={'/task'}
            className="w-[50%] h-full rounded-lg flex items-center justify-center"
          >
            <h1 className="text-[#FFFFFF] font-custom font-normal text-[15px] rounded-lg ">
              Active
            </h1>
          </Link>
          <Link
            to={'/completed-task'}
            className="bg-[#3D3D3D] w-[50%] h-full rounded-lg flex items-center justify-center"
          >
            <h1 className="text-[#FFFFFF] w-[50%] h-[100%] flex items-center justify-center font-custom font-normal text-[15px]">
              Completed
            </h1>
          </Link>
        </div>
      </div>
      <div className="overflow-y-auto mt-[180px] pb-[120px]">
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
          <img
            src={done_task}
            alt=""
            className="h-[29px] w-[29px] lg:ml-[68px] ml-[18px]"
          />
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
            src={done_task}
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
          <img
            src={done_task}
            alt=""
            className="h-[29px] w-[29px] lg:ml-[68px] ml-[18px]"
          />
        </div>
        <div className="mt-[11px] mb-[11px] flex items-center h-[89px] w-[90%] lg:w-[380px] bg-[#18181B] mx-auto rounded-lg">
          <img src={x_task} alt="img" className="ml-[13px]" />
          <div className="flex flex-col w-[140px] ml-[24px]">
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
            src={done_task}
            alt=""
            className="h-[29px] w-[29px] lg:ml-[68px] ml-[18px]"
          />
        </div>
      </div>
      <div className="fixed bottom-0 right-0 left-0 h-[100px] bg-[#0E0E10] flex items-center justify-center">
        <div className="flex items-center w-[85%] justify-between">
          <Link to={'/home'}>
            <div className="flex flex-col items-center h-[50px] justify-between">
              <img src={home1} alt="img" className="h-[21px] w-[21px]" />
              <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
                Home
              </h1>
            </div>
          </Link>
          <Link to={'/task'}>
            <div className="flex flex-col items-center h-[50px] justify-between">
              <img src={active_task} alt="img" className="w-[15px] h-[21px]" />
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

export default Completed_Task
