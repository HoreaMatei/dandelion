import React from 'react'
import Carousel from '@/app/components/Carousel';
import Navbar from "@/app/navbar/Navbar";

import ContactBar from "@/app/components/ContactBar";
import insta from '../../logos/insta.png'
import facebook from '../../logos/facebook.png'
import { getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import "../../aranjamente/[slug]/page.css"
import Link from 'next/link';



export default async function Home ({params}) {
    const { data } = await fetchData();
   const images = data.story.content.body[1].columns[params.slug].image.map((object) => {
    
    return object.filename
    
  });

 

  return (
<div className='p'>
<div className="main1" >
     <Navbar/>
         
     <div className="product-page">
     <div className="product-image1"> 
     <Carousel>
          {images.map((s)=>(
         <img src={s} key={s}
      />
  )) }

</Carousel>
      </div >
      

      <div className="product">
        <h1 className="product-name">
        {data.story.content.body[1].columns[params.slug].name}
        </h1 >
        <div className=" product-details">

        <div className='no-border-bottom'>
            <p>{data.story.content.body[1].columns[params.slug].description}</p>
              <p>
              <span>NOTE:</span> -poate fi realizat in diverse colori si cu un numar variabil de fire -este produs perisabil -nu se returneaza -culoarea sau nuanta florilor poate sa difere in functie de disponibilitatea lor in stoc si alegerea facuta.
             </p>
        </div>

        <div className='contacte'> 
         <div className='contacte-subdiv'>
          <div >
            <p>
              <span>
              COMANDA TELEFONIC:
              </span>
            </p>
            <p>
              0765210759
            </p>
          </div>
          <div>
            <p>
              <span>
              PROGRAM:
              </span>
            </p>
            <p>
              L-V: 10:00-18:00
            </p>
          </div>



         </div>



        <div className='social-media'>
         <div>
         <p >SOCIAL MEDIA:</p>
         </div>
     
        
         <div className='social-media-icons'>
        <Link href="https://www.instagram.com/floraria.dandelion?igsh=MXN3aDgyZHlraW83MA%3D%3D&utm_source=qr" target='blank'>
        <img src={insta.src}/>
        </Link>

        <Link href='https://www.facebook.com/?locale=ro_RO'>
        <img src={facebook.src}/>
        </Link>
         
        </div>
       </div>



        </div>



        </div>



     </div>
  
      
     
  
    



    </div>
   
    
    </div>
    <ContactBar/>
   
     </div>
  )
}










 
export async function fetchData() {
  let sbParams = { version: "published" };
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/evenimente`, sbParams, {cache: "no-store"} )}
 