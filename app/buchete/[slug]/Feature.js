'use client'
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import "./feature.css" 

import Link from 'next/link'



const Feature = ({ blok }, {params}) => (  
      <div className="product-div " {...storyblokEditable(blok)} >
     
      <div className= "product-image">
     
       <img className="image" src={blok.name === params.slug?  blok.image.filename : 'ok'} alt="feature"/>

       
      
    
       
       
        

      </div>
      </div>
)