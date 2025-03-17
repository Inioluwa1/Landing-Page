import React from 'react'
import './TestimonyCard.css'

export default function TestimonyCard({Image, Name, About}) {
  return (
    <div className='TestimonyCardContainer'>
      <img src={Image} alt={Name} />
      <h1> {Name} </h1>
      <p> "{About}" </p>
    </div>
  )
}
