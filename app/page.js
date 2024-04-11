

import { getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Feature from "./components/Feature";
import Navbar from "./navbar/Navbar";
const revalidate = true
import "./globals.css"
import Cover from "./components/cover/Cover";
import ContactBar from "./components/ContactBar";






export default function Home() {
 
  
  return (
    <div className="horea" >
  
           <Cover/>
           <ContactBar/>
        
  
    </div>
  );
}
 
