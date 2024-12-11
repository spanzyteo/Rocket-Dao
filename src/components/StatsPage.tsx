import medal from '../assets/medal.png'
import avatar from '../assets/avatar-vector.png'
import { Link } from 'react-router-dom'
import friends from '../assets/friends-vector.png'
import stats from '../assets/active-stats.svg'
import task from '../assets/task-vector.png'
import home1 from '../assets/home-1.png'
const StatsPage = () => {
  return (
    <div className="bg-[#121214] flex flex-col overflow-y-auto">
      <div className="flex fixed top-0 left-0 right-0 bg-[#121214] h-[100px]">
        <div className="flex items-center mt-[62px] mx-auto gap-2">
          <h1 className="text-[#767676] font-bold font-custom text-[30px]">
            Leader Rank
          </h1>
          <img src={medal} alt="img" className="h-[24px] w-[24px]" />
        </div>
      </div>
      <div className="mb-32 mt-[100px]">
        <div className="mt-[36px] h-[73px] w-[90%] lg:w-[380px] border-b border-b-[#424242] flex items-center mx-auto justify-between px-4">
          <div className="flex items-center gap-4">
            <h1 className="font-custom font-normal text-[16px] text-[#424242]">
              1
            </h1>
            <h1 className="text-[#FFFFFF] font-normal text-[16px]">
              John Mines Smith
            </h1>
          </div>
          <div className="w-[60px] h-[35px] rounded-md flex items-center justify-center bg-[#18181B] gap-1">
            <img src={avatar} alt="img" className="w-[11px] h-[12px]" />
            <h1 className="font-medium text-[9px] text-[#FFFFFF]">12000</h1>
          </div>
        </div>
        <div className="h-[73px] w-[90%] lg:w-[380px] border-b border-b-[#424242] flex items-center mx-auto justify-between px-4">
          <div className="flex items-center gap-4">
            <h1 className="font-custom font-normal text-[16px] text-[#424242]">
              2
            </h1>
            <h1 className="text-[#FFFFFF] font-normal text-[16px]">
              Ferdinand Camel
            </h1>
          </div>
          <div className="w-[60px] h-[35px] rounded-md flex items-center justify-center bg-[#18181B] gap-1">
            <img src={avatar} alt="img" className="w-[11px] h-[12px]" />
            <h1 className="font-medium text-[9px] text-[#FFFFFF]">10600</h1>
          </div>
        </div>
        <div className="h-[73px] w-[90%] lg:w-[380px] border-b border-b-[#424242] flex items-center mx-auto justify-between px-4">
          <div className="flex items-center gap-4">
            <h1 className="font-custom font-normal text-[16px] text-[#424242]">
              3
            </h1>
            <h1 className="text-[#FFFFFF] font-normal text-[16px]">
              Sarah Philip
            </h1>
          </div>
          <div className="w-[60px] h-[35px] rounded-md flex items-center justify-center bg-[#18181B] gap-1">
            <img src={avatar} alt="img" className="w-[11px] h-[12px]" />
            <h1 className="font-medium text-[9px] text-[#FFFFFF]">9200</h1>
          </div>
        </div>
        <div className="h-[73px] w-[90%] lg:w-[380px] border-b border-b-[#424242] flex items-center mx-auto justify-between px-4">
          <div className="flex items-center gap-4">
            <h1 className="font-custom font-normal text-[16px] text-[#424242]">
              4
            </h1>
            <h1 className="text-[#FFFFFF] font-normal text-[16px]">Sand Joe</h1>
          </div>
          <div className="w-[60px] h-[35px] rounded-md flex items-center justify-center bg-[#18181B] gap-1">
            <img src={avatar} alt="img" className="w-[11px] h-[12px]" />
            <h1 className="font-medium text-[9px] text-[#FFFFFF]">5000</h1>
          </div>
        </div>
        <div className="h-[73px] w-[90%] lg:w-[380px] border-b border-b-[#424242] flex items-center mx-auto justify-between px-4">
          <div className="flex items-center gap-4">
            <h1 className="font-custom font-normal text-[16px] text-[#424242]">
              5
            </h1>
            <h1 className="text-[#FFFFFF] font-normal text-[16px]">
              Walter Moses
            </h1>
          </div>
          <div className="w-[60px] h-[35px] rounded-md flex items-center justify-center bg-[#18181B] gap-1">
            <img src={avatar} alt="img" className="w-[11px] h-[12px]" />
            <h1 className="font-medium text-[9px] text-[#FFFFFF]">4500</h1>
          </div>
        </div>
        <div className="h-[73px] w-[90%] lg:w-[380px] border-b border-b-[#424242] flex items-center mx-auto justify-between px-4">
          <div className="flex items-center gap-4">
            <h1 className="font-custom font-normal text-[16px] text-[#424242]">
              6
            </h1>
            <h1 className="text-[#FFFFFF] font-normal text-[16px]">
              John Mines Smith
            </h1>
          </div>
          <div className="w-[60px] h-[35px] rounded-md flex items-center justify-center bg-[#18181B] gap-1">
            <img src={avatar} alt="img" className="w-[11px] h-[12px]" />
            <h1 className="font-medium text-[9px] text-[#FFFFFF]">12000</h1>
          </div>
        </div>
        <div className="h-[73px] w-[90%] lg:w-[380px] border-b border-b-[#424242] flex items-center mx-auto justify-between px-4">
          <div className="flex items-center gap-4">
            <h1 className="font-custom font-normal text-[16px] text-[#424242]">
              7
            </h1>
            <h1 className="text-[#FFFFFF] font-normal text-[16px]">
              Sarah Philip
            </h1>
          </div>
          <div className="w-[60px] h-[35px] rounded-md flex items-center justify-center bg-[#18181B] gap-1">
            <img src={avatar} alt="img" className="w-[11px] h-[12px]" />
            <h1 className="font-medium text-[9px] text-[#FFFFFF]">10800</h1>
          </div>
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
              <img src={task} alt="img" className="w-[15px] h-[21px]" />
              <h1 className="font-custom text-[12px] font-normal text-[#FFFFFF]">
                Task
              </h1>
            </div>
          </Link>
          <Link to={'/friends'}>
            <div className="flex flex-col items-center h-[50px] justify-between">
              <img
                src={friends}
                alt="img"
                className="w-[27px] h-[21px]"
              />
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

export default StatsPage
