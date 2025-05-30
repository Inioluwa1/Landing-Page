import { useState } from 'react'
import './App.css'
import Header from "./Components/Header"
import Illustration from './Components/Illustration'
import About from './Components/About'
import Testimony from './Components/Testimony'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <Header />
      <Illustration />
      <div className='About'>
        <About />
        <Testimony />
      </div>
      <Footer />
    </div>
  )
}

export default App
