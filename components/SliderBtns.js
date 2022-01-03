import styles from '../styles/Slider.module.css'

const SliderBtns = ({ direction, moveSlide }) => {
  return (
    <button
      className={direction === 'next' ? `${styles.btnSlide} ${styles.next}` :
      `${styles.btnSlide} ${styles.prev}`}
      onClick={moveSlide}
    >
      <img src={direction === 'next' ? '/right-arrow.svg' : '/left-arrow.svg'} />
    </button>
  )
}

export default SliderBtns