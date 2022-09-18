import { useState } from 'react'
import styles from './Carousel.module.scss'

interface CarouselProps {
  cards: JSX.Element[]
  index: number
  windowCard: JSX.Element
  changeIndex: (index: number) => void
}

function Carousel ({
  cards,
  index: centerIndex,
  windowCard,
  changeIndex: setCenterIndex
}: CarouselProps): JSX.Element {
  const [isClicking, setIsClicking] = useState(false)

  const selectCenterCard = (
    index: number,
    cards: JSX.Element[],
    next = true
  ): void => {
    const condition = next ? index < cards.length - 1 : index > 0

    const newCenterIndex = next
      ? condition
        ? index + 1
        : 0
      : condition
        ? index - 1
        : cards.length - 1

    setCenterIndex(newCenterIndex)
  }

  const previous = (): void => {
    setIsClicking(true)
    selectCenterCard(centerIndex, cards, false)
    setTimeout(() => {
      setIsClicking(false)
    }, 500)
  }

  const next = (): void => {
    setIsClicking(true)
    selectCenterCard(centerIndex, cards)
    setTimeout(() => {
      setIsClicking(false)
    }, 500)
  }
  return (
    <section className={styles.Slider}>
      <div className={styles.Slider__Controls}>
        <button className={styles.Controls__prev} onClick={previous}></button>
        {!isClicking && windowCard}
        <button className={styles.Controls__next} onClick={next}></button>
      </div>

      <section className={styles.Slider__content}>
        <input
          type="radio"
          name="slider"
          id="s1"
          className={styles.s1}
          checked={centerIndex === 0}
          readOnly
        />
        <input
          type="radio"
          name="slider"
          id="s2"
          className={styles.s2}
          checked={centerIndex === 1}
          readOnly
        />
        <input
          type="radio"
          name="slider"
          id="s3"
          className={styles.s3}
          checked={centerIndex === 2}
          readOnly
        />

        <label
          htmlFor="s1"
          className={`${styles.Slider__card} ${styles.Slider__1}`}
        >
          {cards[0]}
        </label>
        <label
          htmlFor="s2"
          className={`${styles.Slider__card} ${styles.Slider__2}`}
        >
          {cards[1]}
        </label>
        <label
          htmlFor="s3"
          className={`${styles.Slider__card} ${styles.Slider__3}`}
        >
          {cards[2]}
        </label>
      </section>
    </section>
  )
}

export default Carousel
