import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SpecialOffer from './components/SpecialOffer'
import FirstPage from './components/FirstPage'
import TaskPage from './components/TaskPage'
import Completed_Task from './components/Completed_Task'
import FriendsPage from './components/FriendsPage'

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
      </Routes>
    </>
  )
}

export default App
