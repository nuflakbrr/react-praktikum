import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Bmi from './pages/Bmi'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bmi' element={<Bmi />} />
      </Routes>
    </div>
  )
}

export default App