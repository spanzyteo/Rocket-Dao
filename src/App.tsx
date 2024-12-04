import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SpecialOffer from './components/SpecialOffer'
import FirstPage from './components/FirstPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/special-offer" element={<SpecialOffer />} />
        <Route path='/home' element={<FirstPage />}/>
      </Routes>
    </>
  )
}

export default App
