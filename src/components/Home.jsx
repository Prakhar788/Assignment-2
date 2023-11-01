import React from 'react'
import "../app.css"
import Navbar from "./Navbar"
import Trello from "./Trello"
import Banner from "./Banner"
import Carouseli from "./Carousel"

const Home = () => {
  return (
    <>
    <Navbar/>
     <Banner/>
     <Trello/>
     <div className="car">
     <Carouseli/>
     </div>
    </>
  )
}

export default Home