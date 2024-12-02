import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SpecialOffer from './components/SpecialOffer'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/special-offer" element={<SpecialOffer />} />
      </Routes>
    </>
  )
}

export default App
