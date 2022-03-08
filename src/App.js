import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Bmi from './pages/Bmi'
import Cicilan from './pages/Cicilan'
import Home from './pages/Home'
import KonversiBiner from './pages/KonversiBiner'
import Pajak from './pages/Pajak'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bmi' element={<Bmi />} />
        <Route path='/cicilan' element={<Cicilan />} />
        <Route path='/pajak' element={<Pajak />} />
        <Route path='/konversi/biner' element={<KonversiBiner />} />
      </Routes>
    </div>
  )
}

export default App