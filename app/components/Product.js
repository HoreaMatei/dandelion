import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import "./feature.css" 
import Link from 'next/link'
import Carousel from "./Carousel";
const mappedImages = ({blok}) =>{
    let mapp = blok.image.map(i => i )
    console.log(mapp)
} 

const  Product = ({ blok }) => (
    
          
    <div className="product-div" {...storyblokEditable(blok)} >
  
    <div className= "product-image">

 

  
  
    
   
 
    <Link href={`/evenimente/${blok.id}`}> 
       <img className="image" src={blok.image[0].filename} alt="feature"/>
       </Link>

 
    </div>









    
   </div>
 
   
);
  
 export default Product;