import React, { useState } from 'react'
import "./Footer.css"

export default function Footer() {
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)

  const handleFormSubmision = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(input)){
      console.log(input);
      setInput("")
      alert("Email submitted succesfully✅")
      setError(false)
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
            <img src='/icon-facebook.svg' />
            <img src='/icon-youtube.svg' />
            <img src='/icon-twitter.svg' />
            <img src='/icon-pinterest.svg' />
            <img src='/icon-instagram.svg' />
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

      <div className='MobileFooter2'>
        <div className='MobileForm'>
          <input type='email' placeholder='Updates in your inbox' className={`MobileFormInput ${error? "error": ""}`} value={input} onChange={(e)=> setInput(e.target.value)} />
          <button onClick={handleFormSubmision}> Go </button>
        </div>
        {error && <p className='MobileError'> Please insert a valid email </p>}

        <div className='MobileLinks'>
          <div className='MobileAboutCompany'>
            <p> Home </p>
            <p> Pricing </p>
            <p> Products </p>
            <p> About Us </p>
          </div>
          <div className='MobileOthers'>
            <p> Careers </p>
            <p> Community </p>
            <p> Privacy Policy </p>
            <p></p>
          </div>
        </div>

        <div className='MobileLogoandMedia'>
          <img src='/logo.svg' alt='Manage Icon' className='MobileLogo'/>
          <div className='MobileMedia'>
            <img src='/icon-facebook.svg' />
            <img src='/icon-youtube.svg' />
            <img src='/icon-twitter.svg' />
            <img src='/icon-pinterest.svg' />
            <img src='/icon-instagram.svg' />
          </div>
        </div>

        <div className='MobileCopyright'>
            <p > Copyright 2020. All RIghts Reserved</p>
        </div>

      </div>
    </div>
  )
}
