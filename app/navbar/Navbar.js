import React from 'react'
import Link from 'next/link'
import "./navbar.css"
import home from './Dandelion5.png'
import '../globals.css'


const Navbar = () => {
  function toggleMobileMenu(menu){
 
   

  }
  return ( 
    <div className= "main-container">
      <Link href="/"><img src={home.src} alt="home" className="homeButton"/></Link>

    <div className="menuContainer">
     <Link className= "navButton"href="/evenimente" >Evenimente</Link>
     <Link className= "navButton" href= "/buchete">Buchete</Link>
    </div>
    <div className='hamburger-icon' onClick={toggleMobileMenu(this)}>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
      <ul className='mobile-menu'>
        <li>
          <a href='/evenimente'>
            Evenimente
          </a>
        </li>
        <li>
          <a href='/aranjamente'>
            Aranjamente
          </a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar