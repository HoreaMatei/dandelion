{loaded && instanceRef.current && (
    <div className="dots">
      {[
        ...Array(instanceRef.current.track.details.slides.length).keys(),
      ].map((idx) => {
        return (
          <button 
            key={idx}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx)
            }}
            className={"dot" + (currentSlide === idx ? " active" : "")}
          ></button>
        )
      })}
    </div>
  )}