import React from 'react'
import HeaderPart from './assets/organismes/headerPart/headerPart'
import InputPart from './assets/organismes/inputPart/inputPart'
import FooterPart from './assets/organismes/footerPart/footerPart1'
import MainPart from './assets/organismes/mainPart/mainPart'



const App = () => {
  return (

    <div className='flex justify-center '>
      <div className='container flex-col max-w-screen-2xl w-full	min-h-[100vh]'>
        <HeaderPart />
        <MainPart />
        <InputPart />
        <FooterPart />
      </div>
    </div>

  )
}

export default App