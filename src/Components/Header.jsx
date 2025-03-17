import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='Header'>
      <div>
        <img src='/logo.svg' />
      </div>
      <div className='Links'>
        <p> Pricing </p>
        <p> Product </p>
        <p> About Us </p>
        <p> Careers </p>
        <p> Community </p>
      </div>
      <div>
        <button> Get Started </button>
      </div>
    </div>
  )
}
