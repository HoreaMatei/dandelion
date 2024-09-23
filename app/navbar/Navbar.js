"use client";

import "./navbar.css";

import "../globals.css";

import "./burger.css";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setIsOpen(false);
    } else {
      // if scroll up show the navbar
      setIsOpen(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={isOpen ? "main-containerr" : "main-containerr2"}>
      <a className="navButton1" href="/">
        DANDELION
      </a>

      <div className="menuContainer">
        <a className="navButton" href="/aranjamente">
          ARANJAMENTE
        </a>
        <a className="navButton" href="/evenimente">
          EVENIMENTE
        </a>
      </div>

      <div className="mainmain" style={{ width: "100%", height: "100vh" }}>
        <nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </nav>
        <div className={menu_class}>
          <a className="burgerButton boxShadow" href="/aranjamente">
            ARANJAMENTE
          </a>
          <a className="burgerButton" href="/evenimente">
            EVENIMENTE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
