import { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap'

const Project = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(data.images)
  }, [data.images])

  const next = () => {
    if (animating) return
    const nextIndex =
      activeIndex === data.images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex =
      activeIndex === 0 ? data.images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = images.map((image) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={image.id}
    >
      <img src={image.src} alt={image.altText} />
    </CarouselItem>
  ))

  return (
    <div className="project">
      <h5>{data.title}</h5>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          images={data.images}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}

export default Project
