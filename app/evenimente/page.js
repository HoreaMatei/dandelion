import Navbar from "../navbar/Navbar";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import ContactBar from "../components/ContactBar";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import "./evenimente.css";
export default async function Home() {
  async function fetchData() {
    storyblokInit({
      accessToken: process.env.STORYBLOK_API_KEY,
      use: [apiPlugin],
    });
    let sbParams = { version: "published" };

    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/evenimente`, sbParams, {
      cache: "no-store",
    });
  }
  const { data } = await fetchData();

  return (
    <div className="horea">
      <Navbar />

      <StoryblokStory story={data.story} />
    </div>
  );
}
