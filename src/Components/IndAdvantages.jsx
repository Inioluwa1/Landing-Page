import React from 'react'
import './IndAdvantages.css'

export default function IndAdvantages({id, Header, About}) {
  return (
    <div className='IndAdvantagesContainer'>
      <div className='ButtonContainer'>
        <h2 className='identity'> {id} </h2>
        <h1> {Header} </h1>
      </div>
      <div className='InformationContainer'>
        <p> {About} </p>
      </div>
    </div>
  )
}
 