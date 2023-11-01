import React from 'react'
import './TrelloSec.css'


const Card = ({ onClick }) => {
  return (
    <>
    <div className='main-card' onClick={onClick}>
    <div className="notification">
    <div className="notiglow"></div>
    <div className="notiborderglow"></div>

    <div className="notititle">Boards</div>
    <div className="notibody">Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”npm</div>
   
    
  </div>
  </div>
 
    </>
  )
}

export default Card