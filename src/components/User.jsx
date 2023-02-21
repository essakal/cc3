import React from 'react'
import "./user.css"

export default function User(props) {
  return (
    <div>
      <div className='user'>
        <img src={props.image} alt="img" />
        <div>
            <h2>{props.nom}</h2>
            <button onClick={props.details}>Detail User</button>
            <button onClick={props.listeTaches}>Liste des taches</button>
        </div>
      </div>
        
    </div>
  )
}