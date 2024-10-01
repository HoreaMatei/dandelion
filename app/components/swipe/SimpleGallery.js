"use client";
import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + "my-test-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="galerie_foto" id={"my-test-gallery"}>
      {props.images.map((image, index) => (
        <a
          className="galerie_foto_img"
          href={image}
          data-pswp-width={1650}
          data-pswp-height={1900}
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <div className="galerie_foto_img">
            <img src={image} alt="" />
          </div>
        </a>
      ))}
    </div>
  );
}
