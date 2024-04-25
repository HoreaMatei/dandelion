 'use client'
import Link from 'next/link'
import "./navbar.css"
import home from './Dandelion5.png'
import '../globals.css'

import './burger.css'
import React , {useState}from 'react'


const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked")
          setMenuClass("menu visible")
      }
      else {
          setBurgerClass("burger-bar unclicked")
          setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
  }



  return ( 
    <div className= "main-container">
      <Link href="/"><img src={home.src} alt="home" className="homeButton"/></Link>

    <div className="menuContainer">
    <Link className= "navButton" href= "/aranjamente">Aranjamente</Link>
     <Link className= "navButton"href="/evenimente" >Evenimente</Link>
   
    </div>

    <div className='mainmain' style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
            <div className={menu_class}>
            <Link className= "burgerButton boxShadow" href= "/aranjamente">Aranjamente</Link>
            <Link className= "burgerButton"href="/evenimente" >Evenimente</Link>
     
            
            </div>

        </div>
   

    
    </div>
  )
}

export default Navbar