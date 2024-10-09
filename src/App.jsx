import React from 'react'
import Loginpage from './components/login/Loginpage'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/login/Signup'

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Loginpage/>} ></Route>
    <Route path="/SignUp" element ={<Signup/>} ></Route>
    
   </Routes>
   </>
  )
}

export default App