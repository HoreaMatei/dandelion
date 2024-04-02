import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import "./feature.css" 


const  Product = ({ blok }) => (
 
    <div className="product-div" {...storyblokEditable(blok)} >
  
    <div className= "product-image">
    <img className="image" src={blok.image.filename} alt="feature"/>
    </div>







    
   </div>
 );
  
 export default Product;