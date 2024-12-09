import React from 'react'
import HeaderPart from './assets/organismes/headerPart/headerPart'
import InputPart from './assets/organismes/inputPart/inputPart'
import FooterPart from './assets/organismes/footerPart/footerPart1'
import MainPart from './assets/organismes/mainPart/mainPart'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Features from './Features'
import Team from './Team'
import SignIn from './SignIn'



const App = () => {
  return (

    <Router>
      <div className='flex justify-center'>
        <div className='container flex-col max-w-screen-2xl w-full min-h-[100vh]'>
          <HeaderPart />
          <Routes>
            <Route path="/" element={
              <>
                <MainPart />
                <InputPart />
                <FooterPart />
              </>
            } />
            <Route path="/features" element={<Features />} />
            <Route path="/team" element={<Team />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </Router>

  )
}

export default App