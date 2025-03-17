import React from 'react'
import "./About.css"
import IndAdvantages from './IndAdvantages'
import Advantages from './Advantages'

export default function About() {
  return (
    <div className='AboutContainer'>
      <div className='Difference'>
        <h1> What's different about Manage? </h1>
        <p> Manage provides all the functionality your team needs, without the complexity, Our software is tailor made for modern-digital product teams.</p>
      </div>
      <div className='IndAdvantages'>
        {Advantages.map((advantage, index) => (
          <IndAdvantages 
            key={index}
            id={advantage.id}
            Header={advantage.Header}
            About={advantage.About}
          />
        ))}
      </div>
    </div>
  )
}
