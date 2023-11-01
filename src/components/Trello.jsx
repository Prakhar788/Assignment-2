
import React, { useState } from 'react';

import './TrelloSec.css'
import Pic1 from "../assets/1pic.jpg"
import Pic2 from "../assets/2pic.jpg"
import Pic3 from "../assets/3pic.jpg"

import Card from './Card'


const Trello = () => {
    const [selectedPic, setSelectedPic] = useState(Pic1);

    const handleCardClick = (pic) => {
        setSelectedPic(pic);
    };
  return (
    <>
    
      <section className='main-section'>
      <div className='main-heading'>
    <div className='heading'>TRELLO 101</div>
    <div className='para'>A productivity powerhouse</div>
    <div className='para2'>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our <a>guide for getting started.</a>


</div>
</div>
<div className='sub-section'>
  <div className='cards'>
    
    <Card  onClick={() => handleCardClick(Pic1)} />
    <Card  onClick={() => handleCardClick(Pic2)}  />
    <Card  onClick={() => handleCardClick(Pic3)} /> 
  </div>
  <div className="main-div">
  <img className='image' src={selectedPic} />
  </div>
</div>
      </section>
      
    </>

  )
}

export default Trello;