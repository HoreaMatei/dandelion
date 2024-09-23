"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import { revalidatePath } from "next/cache";
import Product from "./Product";

import Page from "./Page";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,

  product: Product,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_KEY,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
