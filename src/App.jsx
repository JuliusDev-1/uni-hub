import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from './pages/login-sign-up'
import MainApp from './pages/mainApp';


function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginSignup />}/>
        <Route path ='/main-app' element={<MainApp />}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
