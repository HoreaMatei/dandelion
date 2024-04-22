

import '../globals.css'
import Navbar from '../navbar/Navbar';
import { getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import ContactBar from '../components/ContactBar';


export default async function Home() {
  const { data } = await fetchData();
  
  return (
    <div className="horea" >
      {/* />
      <Cover/>
      <Navbar/>
      <StoryblokStory story={data.story} />
  */}
         <Navbar/>
      <StoryblokStory story={data.story} />
      
    <ContactBar/>
    </div>
  );
}
 
export async function fetchData() {
  let sbParams = { version: "published" };
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"} )}