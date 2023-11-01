import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <>
    <div className='nav'>
    <div className='main-navbar'>
    
   
    
    <div className='external-links'>
    <Link href="/" className="external">Trello</Link>
    <Link href="/" className="external-link">Features</Link>
    <Link href="/" className="external-link">Solution</Link>
    <Link href="/" className="external-link">Plans</Link>
    <Link href="/" className="external-link">Pricing</Link>
    <Link href="/" className="external-link">Resources</Link>
    </div>
    <div className='buttons'>
        <Link className='links' to="/login">LogIn</Link>
        <div className='button'>GET TRELLO FOR FREE</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar

