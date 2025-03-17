import React, { useState } from 'react'
import "./Footer.css"

export default function Footer() {
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)

  const handleFormSubmision = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(input)){
      console.log(input);
      setError(false)
      setInput("")
    } else{
      setError(true)
    }
  }
  return (
    <div className='FooterContainer'>
      <div className='Footer1'>
        <h1> Simplify how your team works today</h1>
        <button> Get Started </button>
      </div>
      <div className='Footer2'>
        <div className='LogoandMedia'>
          <img src='/logo.svg' alt='Manage Icon' className='Logo'/>
          <div className='Media'>
            <img src='/public/icon-facebook.svg' />
            <img src='/public/icon-youtube.svg' />
            <img src='/public/icon-twitter.svg' />
            <img src='/public/icon-pinterest.svg' />
            <img src='/public/icon-instagram.svg' />
          </div>
        </div>
        <div className='AboutCompany'>
          <p> Home </p>
          <p> Pricing </p>
          <p> Products </p>
          <p> About Us </p>
        </div>
        <div className='Others'>
          <p> Careers </p>
          <p> Community </p>
          <p> Privacy Policy </p>
          <p></p>
        </div>
        <div className='Footer3'>
          <div className='Form'>
            <input type='email' placeholder='Updates in your inbox...' className={`FormInput ${error? "error" : ""} `} value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleFormSubmision}> Go </button>
          </div>
          {error && <p className='Error'> Please insert a valid email </p>}
          <div className='Copyright'>
            <p > Copyright 2020. All RIghts Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}
