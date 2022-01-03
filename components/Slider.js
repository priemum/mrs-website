import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Slider.module.css'
import SliderBtns from './SliderBtns'


const dataSlider = [
  {
    id: 1,
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: 2,
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: 3,
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: 4,
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: 5,
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
];

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }

  const moveDot = (idx) => {
    setSlideIndex(idx)
  }

  useEffect(() =>{
    setTimeout(() => {
      nextSlide()
    }, 5000)
  }, [slideIndex])

  return (
    <div className={styles.containerSlider}>
      {dataSlider.map((obj, idx) => {
        return (
          <div key={obj.id} className={slideIndex === idx + 1 ? `${styles.slide} ${styles.activeAnim}` :
          styles.slide}>
            <img src={`/img${idx + 1}.jpg`} />
            {/* <Image  width={250} height={250}></Image> */}
            {/* You cann add some text and modify css to see it */}
          </div>
        )
      })}
      {/* <SliderBtns moveSlide={nextSlide} direction='next' /> */}
      {/* <SliderBtns moveSlide={prevSlide} direction='prev' /> */}
      <div className={styles.containerDots}>
        {Array.from({length: dataSlider.length}).map((item, idx) => (
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