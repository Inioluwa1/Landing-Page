import React, { useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const[isOpen, setIsopen] = useState(false)

  return (
    <div className='Header'>
      <div>
        <img src='/logo.svg' />
      </div>
      <button className='Hamburger' onClick={() => setIsopen(!isOpen)}> 
        {isOpen? <IoClose size={30} />  : <GiHamburgerMenu size={30} /> }
      </button>
      <div className={`Links ${isOpen? "show" : ""}`}>
        <p> Pricing </p>
        <p> Product </p>
        <p> About Us </p>
        <p> Careers </p>
        <p> Community </p>
      </div>
      <div>
        <button className='GetStarted'> Get Started </button>
      </div>
    </div>
  )
}
 