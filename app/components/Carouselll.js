"use client"

    import coverImage from "./cover.jpg"
    import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
    import React, { useState } from "react"
    import { useKeenSlider } from "keen-slider/react"
    import "keen-slider/keen-slider.min.css"
    import "./feature.css"
    import { getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
    
const Feature = ({ blok }) => {
      const [currentSlide, setCurrentSlide] = useState(0)
      const [loaded, setLoaded] = useState(false)
      const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel)
        },
        created() {
          setLoaded(true)
        },
      })
    
      return (
        
         <div > 
          
          <div className="navigation-wrapper" >
            <div ref={sliderRef} className='keen-slider ' >
              <div className="keen-slider__slide number-slide1" {...storyblokEditable(blok)} >
            
              <img  src={blok.image.filename} alt="feature"/>
              </div>
              <div className="keen-slider__slide number-slide2">
                 <img  src={blok.image2.filename} alt="feature"/>
              </div>
              <div className="keen-slider__slide number-slide3">
              <img  src={blok.image3.filename} alt="feature"/>
              
              </div>
              <div className="keen-slider__slide number-slide4">4</div>
              <div className="keen-slider__slide number-slide5">5</div>
              <div className="keen-slider__slide number-slide6">6</div>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />
    
                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
         




         
          <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{blok.name}</h1>

        </div>
        
      )
            }
    function Arrow(props) {
      const disabled = props.disabled ? " arrow--disabled" : ""
      return (
        <svg
          onClick={props.onClick}
          className={`arrow ${
            props.left ? "arrow--left" : "arrow--right"
          } ${disabled}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {props.left && (
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          )}
          {!props.left && (
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          )}
        </svg>
      )
    }

 
