import React from 'react'
import './Illustration.css'

export default function Illustration() {
  return (
    <div className='IllustrationContainer'>
      <div className='IllustrationWords'>
        <h1> Bring everyone together to build better projects. </h1>
        <p> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
        <button> Get Started </button>
      </div>
      <div className='IllustrationImageContainer'>
        <img src='/illustration-intro.svg' alt='Illustration' className='Illustration' />
      </div>
    </div>
  )
} 
 