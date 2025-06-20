import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome'
import Skills from './Skills'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import State from './hooks/State'
import Form from './hooks/Form'
import Effect from './hooks/Effect'
//import './App.css'

function App() {
  return(
  <>
  <Navbar/>
  <Routes>
    <Route  path='/' element={<Home/>}/>
     <Route  path='/about' element={<About/>}/>
      <Route  path='/services' element={<Services/>}/>
      <Route path='/State' element={<State/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/Effect' element={<Effect/>}/>
  </Routes>
  
  </>
  )
}

export default App
