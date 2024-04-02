'use client'


import Navbar from '../../navbar/Navbar'


import './cover.css'



import React, { useEffect, useRef, useState } from "react";
const RevealOnScroll = ({ children }) => {
      const [isVisible, setIsVisible] = useState(false);
      const ref = useRef(null);
   
      useEffect(() => {
          const scrollObserver = new IntersectionObserver(([entry]) => {
              if (entry.isIntersecting) {
                  setIsVisible(true);
                  scrollObserver.unobserve(entry.target);
              }
          });
   
          scrollObserver.observe(ref.current);
   
          return () => {
              if (ref.current) {
                  scrollObserver.unobserve(ref.current);
              }
          };
      }, []);
   
      const classes = `transition-opacity duration-1000 
          ${isVisible ? "opacity-100" : "opacity-0"
          }`;
   
      return (
          <div ref={ref} className={classes}>
              {children}
          </div>
      );
  };




export const Cover = () => {
  return (
    <div className='hero0'>
        <Navbar/>
        
        
          
            <div className='cover-image'>
                <p>
                Poetul John Keats spunea :" Un lucru frumos este o bucurie vesnica". Sunt Rica si-mi place sa daruiesc bucurie prin buchete unice. Le creez cu drag si cu convingerea ca vor fi un motiv de incantare. Sunt o participanta activa la diferite proiecte internationale. De exemplu, anul trecut am lucrat impreuna cu ....la decorarea primariei din.... Am propria plantatie de trandafiri,......,...... din care aleg cu grija si atentie la detalii fiecare floare pentru buchetul dorit. Va astept cu portile deschise in boutique-ul din Batos sau pe site unde puteti gasi modele din creatiile mele personale. Pe curand!
       
                </p>
          </div>
     
      
           <div className='productss' >
           <RevealOnScroll >
           <div className='aranjamente'>
           
            <h2>Aranjamente</h2>
           </div>
           </RevealOnScroll >
     
           <RevealOnScroll>
           <div className='evenimente'>
        
            
            <h2>Evenimente</h2>
           </div>
           </RevealOnScroll>  


          </div>
          
    </div>
    
  )
}

export default Cover