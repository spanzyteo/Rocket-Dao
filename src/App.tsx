import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SpecialOffer from './components/SpecialOffer'
import FirstPage from './components/FirstPage'
import TaskPage from './components/TaskPage'
import Completed_Task from './components/Completed_Task'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/special-offer" element={<SpecialOffer />} />
        <Route path='/home' element={<FirstPage />}/>
        <Route path='/task' element={<TaskPage />}/>
        <Route path='/completed-task' element={<Completed_Task />}/>
      </Routes>
    </>
  )
}

export default App
