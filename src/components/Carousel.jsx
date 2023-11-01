import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Pic1 from "../assets/1.png"
import Pic2 from "../assets/2.png"
import Pic3 from "../assets/3.png"
import "../app.css"

const Carouseli = () => {
  return (
    <div className='hello'>


 
    <Carousel
   infiniteLoop
   autoPlay
   showStatus={false}
   showArrows={false}
   showThumbs={false}
   interval={2000}>
                <div>
                    <img src={Pic1}/>
                   
                </div>
                <div>
                    <img src={Pic2} />
                   
                </div>
                <div>
                    <img src={Pic3}/>
                    
                </div>
            </Carousel>
            </div>
          
    
  )
}

export default Carouseli