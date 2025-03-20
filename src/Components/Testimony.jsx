import React, { useEffect, useState } from 'react'
import "./Testimony.css"
import Testimonies from "../Components/Testimonies"
import TestimonyCard from './TestimonyCard'

export default function Testimony() {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevSelected) => 
        (prevSelected + 1) % Testimonies.length
      )
    }, 5000)

    return () => clearInterval(interval);
    
  }, [])
  
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

      <div className='MobileIndTestimonyContainer'>
        {Testimonies.map((indTestimony, index)=>(
            <div 
              key={indTestimony.id}
              className={`MobileSlider ${index === selected? "active" : ""}`}
            >
              <img src={indTestimony.Image} alt={`Slide ${index + 1}`} />
              <h1> {indTestimony.Name} </h1>
              <p> "{indTestimony.About}" </p> 
            </div>
          ))}

          <div className='Dotcontainer'>
            {Testimonies.map((_, index) => (
              <span
                key={index}
                className={`dot ${index===selected? "dotactive" : ""} `}
                onClick={() => setSelected(index)}
              >
              </span>
            ))}
          </div>
      </div>
      <button> Get Started </button> 
    </div>
  )
}
