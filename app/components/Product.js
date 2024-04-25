import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import "./product.css" 
import Link from 'next/link'
import "../globals.css"

 

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
    <h1 className="titlu-buchet">{blok.title}</h1>









    
   </div>
 
   
);
  
 export default Product;