"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Carousel from "./Carouselll";
import { revalidatePath } from 'next/cache'
import Product from "./Product";
 

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Grid from "./Grid";
 import Feature from "./Feature";
 import Grid2 from "./Grid2";
const components = {
  grid: Grid, 
  page: Page,
  product: Product
};
 
storyblokInit({
  accessToken: "OQ09pa2LLqe7rgabggVtmQtt",
  use: [apiPlugin],
  components
});
 
export default function SBProvider({ children }) {
  return children;
}