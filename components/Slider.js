import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Slider.module.css'
import SliderBtns from './SliderBtns'

const Slider = ({ slides }) => {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    setTimeout(() => {
      if (slideIndex !== slides.length) {
        setSlideIndex(slideIndex + 1)
      } else if (slideIndex === slides.length) {
        setSlideIndex(1)
      }
    }, 5000)
  }

  // const prevSlide = () => {
  //   if (slideIndex !== 1) {
  //     setSlideIndex(slideIndex - 1)
  //   } else if (slideIndex === 1) {
  //     setSlideIndex(slides.length)
  //   }
  // }

  const moveDot = (idx) => {
    // setSlideIndex(idx)
  }

  useEffect(() =>{
    clearTimeout(nextSlide)
    nextSlide()
  }, [slideIndex])

  return (
    <div className={styles.containerSlider}>
      {slides.map((slide, idx) => {
        return (
          <div key={slide.id} className={slideIndex === idx + 1 ? `${styles.slide} ${styles.activeAnim}` :
          styles.slide}>
            <img src={'https:' + slide.fields.image.fields.file.url} />
            {/* <Image  width={250} height={250}></Image> */}
            {/* You cann add some text and modify css to see it */}
          </div>
        )
      })}
      {/* <SliderBtns moveSlide={nextSlide} direction='next' /> */}
      {/* <SliderBtns moveSlide={prevSlide} direction='prev' /> */}
      <div className={styles.containerDots}>
        {Array.from({length: slides.length}).map((item, idx) => (
          <div
            onClick={() => moveDot(idx + 1)}
            className={slideIndex === idx + 1 ? `${styles.dot} ${styles.active}` : styles.dot}
          >
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider