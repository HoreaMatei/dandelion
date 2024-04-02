
import { getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
 import Navbar from "@/app/navbar/Navbar";
 import './page.css'
 import ContactBar from "@/app/components/ContactBar";


export default async function Home({params}) {
  const { data } = await fetchData();
  
  
  console.log(params.slug)
  return (
    <div className="main1" >
     <Navbar/>
         
     <div className="product-page">
     <div className="product-image1"> 
      <img className=" " src = {data.story.content.body[1].columns[params.slug].image[0].filename}   />
      </div>

      <div className="product">
        <h1 className="product-name">
        {data.story.content.body[1].columns[params.slug].name}
        </h1 >
       <div className=" product-details">
        <p>descriere produssssssssssssssssssssssssssssssssssssssssssssss</p>
        <p>
        <span>NOTE:</span> -poate fi realizat in diverse colori si cu un numar variabil de fire -este produs perisabil -nu se returneaza -culoarea sau nuanta florilor poate sa difere in functie de disponibilitatea lor in stoc si alegerea facuta.
        </p>


       </div>


      </div>


     </div>
      <ContactBar/>
  
    </div>
  );
}
 
export async function fetchData() {
  let sbParams = { version: "published" };
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"} )}