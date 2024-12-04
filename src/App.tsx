import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SpecialOffer from './components/SpecialOffer'
import FirstPage from './components/FirstPage'
import TaskPage from './components/TaskPage'
import Completed_Task from './components/Completed_Task'
import FriendsPage from './components/FriendsPage'
import StatsPage from './components/StatsPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/special-offer" element={<SpecialOffer />} />
        <Route path='/home' element={<FirstPage />}/>
        <Route path='/task' element={<TaskPage />}/>
        <Route path='/completed-task' element={<Completed_Task />}/>
        <Route path='/friends' element={<FriendsPage />}/>
        <Route path='/stats' element={<StatsPage />}/>
      </Routes>
    </>
  )
}

export default App
