import { getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Feature from "./components/Feature";
import Navbar from "./navbar/Navbar";
const revalidate = true
import "./globals.css"
import Cover from "./components/cover/Cover";
import Product from "./components/Product";
import RevealComp from "./components/Reveal";
import React, { useEffect, useRef, useState } from 'react'

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
           
      
  
    </div>
  );
}
 
export async function fetchData() {
  let sbParams = { version: "published" };
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"} )}