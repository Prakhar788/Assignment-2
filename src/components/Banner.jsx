import React from 'react'
import "./Banner.css"
import banner from "../assets/Banner.jpg"

const Banner = () => {
  return (
    <div className='main-banner'>
<div className='banner'>
<div className='banner-in'>
<div className='first'>
<h1 className='heading'>
Trello brings all your tasks,
<br></br> teammates, <br></br>and tools together
</h1>
<p className='sub-heading'>
Keep everything in the same place—even if your team <br></br>isn't.
</p>
<div className='sec'>

</div>

</div>
<div className='second'>
<img className="img" src={banner}></img>
</div>

</div>

</div>
<div class="custom-shape-divider-bottom-1698824377">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  
  )
}

export default Banner