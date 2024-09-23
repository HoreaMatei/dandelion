import "../globals.css";
import Navbar from "../navbar/Navbar";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import ContactBar from "../components/ContactBar";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { storyblokApi } from "../page";
import "./aranjamente.css";
export default async function Home() {
  storyblokInit({
    accessToken: process.env.STORYBLOK_API_KEY,
    use: [apiPlugin],
  });

  let sbParams = { version: "published" };
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(`cdn/stories/home`, sbParams, {
    cache: "no-store",
  });

  return (
    <div className="horea">
      {/* />
      <Cover/>
      <Navbar/>
      <StoryblokStory story={data.story} />
  */}
      <Navbar />
      <StoryblokStory story={data.story} />
    </div>
  );
}
