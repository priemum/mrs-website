import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Slider.module.css'
import SliderBtns from './SliderBtns'

let timeouts = []

const Slider = ({ slides }) => {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = (targetSlide) => {
    let test = setTimeout(() => {
      if (targetSlide) {
        
      }
      if (slideIndex !== slides.length) {
        setSlideIndex(slideIndex + 1)
      } else if (slideIndex === slides.length) {
        setSlideIndex(1)
      }
    }, 5000)
    timeouts.push(test)
  }

  // const prevSlide = () => {
  //   if (slideIndex !== 1) {
  //     setSlideIndex(slideIndex - 1)
  //   } else if (slideIndex === 1) {
  //     setSlideIndex(slides.length)
  //   }
  // }

  const moveDot = (idx) => {
    setSlideIndex(idx)
    
  }

  const clearTimeouts = () => {
    for (let i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    timeouts = []
  }
    


  useEffect(() =>{
    // clearTimeout(nextSlide)
    clearTimeouts()
    nextSlide()
  }, [slideIndex])

  return (
    <div className={styles.containerSlider}>
      {slides.map((slide, idx) => (
        <div key={slide.id} className={slideIndex === idx + 1 ? `${styles.slide} ${styles.activeAnim}` :
        styles.slide}>
          <img src={'https:' + slide.fields.image.fields?.file.url} />
        </div>
      ))}
      {/* <SliderBtns moveSlide={nextSlide} direction='next' /> */}
      {/* <SliderBtns moveSlide={prevSlide} direction='prev' /> */}
      <div className={styles.containerDots}>
        {Array.from({length: slides.length}).map((item, idx) => (
          <div
            key={idx}
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