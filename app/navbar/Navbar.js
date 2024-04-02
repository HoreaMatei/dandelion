import React from 'react'
import Link from 'next/link'
import "./navbar.css"
import home from './Dandelion5.png'


const Navbar = () => {
  return ( 
    <div className= "main-container">
      <Link href="/"><img src={home.src} alt="home" className="homeButton"/></Link>

    <div className="menuContainer">
     <Link className= "navButton"href="/evenimente" >Evenimente</Link>
     <Link className= "navButton" href= "/buchete">Buchete</Link>
    </div>
    </div>
  )
}

export default Navbar