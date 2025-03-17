import React from 'react'
import "./Testimony.css"
import Testimonies from "../Components/Testimonies"
import TestimonyCard from './TestimonyCard'

export default function Testimony() {
  return (
    <div className='TestimonyContainer'>
      <h1> What they've said </h1>
      <div className='IndTestimonyContainer'>
        {Testimonies.map((indTestimony, id)=>(
          <TestimonyCard 
          key={id}
          Image = {indTestimony.Image}
          Name = {indTestimony.Name}
          About = {indTestimony.About}
          />
        ))}
      </div>
      <button> Get Started </button>
    </div>
  )
}
