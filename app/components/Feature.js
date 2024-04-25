'use client'
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import "./feature.css" 

import Link from 'next/link'



const Feature = ({ blok }) => (  
      
      
      <div className="product-div " {...storyblokEditable(blok)} >
     
      <div className= "product-image">
       <Link href={`/aranjamente/${blok.id}`}> 
       <img className="image" src={blok.image[0].filename} alt="feature"/>
       </Link>
      
      
    
       
       
        

      </div>
     
      <h1 className="titlu-buchet">{blok.name}</h1>
      







      
     </div>
     
  
     
);


export default Feature

 