import React from "react";
import Carousel from "@/app/components/Carousel";
import Navbar from "@/app/navbar/Navbar";

import ContactBar from "@/app/components/ContactBar";
import SimpleGallery from "@/app/components/swipe/SimpleGallery";

import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import "../../aranjamente/[slug]/page.css";
import "./pageEvenimente.css";
import Link from "next/link";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

export default async function Home({ params }) {
  async function fetchData() {
    let sbParams = { version: "published" };
    storyblokInit({
      accessToken: process.env.STORYBLOK_API_KEY,
      use: [apiPlugin],
    });

    const storyblokApi = getStoryblokApi();

    return storyblokApi.get(`cdn/stories/evenimente`, sbParams, {
      cache: "no-store",
    });
  }

  const { data } = await fetchData();
  const images = data.story.content.body[1].columns[params.slug].image.map(
    (object) => {
      return object.filename;
    }
  );

  return (
    <div className="p">
      <div className="main1">
        <Navbar />
        <div className="section_title_big">
          {data.story.content.body[1].columns[params.slug].title}
        </div>

        <div className="product-page">
          <div className="product-image1">
            <img className="image_class" src={images[0]} key={5555} />
          </div>

          <div className="product">
            <h1 className="product-name">
              {data.story.content.body[1].columns[params.slug].title}
            </h1>
            <div className=" product-details">
              <div className="no-border-bottom">
                <p>
                  {data.story.content.body[1].columns[params.slug].description}
                </p>
                <p>{data.story.content.body[1].columns[params.slug].desc1}</p>
                <p>{data.story.content.body[1].columns[params.slug].desc2}</p>
                <p>{data.story.content.body[1].columns[params.slug].desc3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image_section">
        <p className="galerie_foto_title">GALERIE FOTO</p>

        <SimpleGallery galleryID="my-test-gallery" images={images} />
      </div>
    </div>
  );
}
