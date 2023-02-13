import styles from './Card.module.scss'
import Image from 'next/image'

interface CardProps {
  direction?: 'up' | 'down' | 'left' | 'right'
  srcImg: string
  title: string
  content: string
}

const conditionStyles = (direction: string) => {
  switch (direction) {
    case 'up':
      return {
        image: styles.Card__imagen_up,
        info: styles.Card__info_down,
        gridTemplateRows: styles.Card__gridrow1
      }
    case 'down':
      return {
        image: styles.Card__imagen_down,
        info: styles.Card__info_up,
        gridTemplateRows: styles.Card__gridrow2
      }
    case 'left':
      return {
        image: styles.Card__imagen_left,
        info: styles.Card__info_right,
        gridTemplateColumns: styles.Card__gridcolum1
      }
    case 'right':
      return {
        image: styles.Card__imagen_right,
        info: styles.Card__info_left,
        gridTemplateColumns: styles.Card__gridcolum2
      }
    default:
      return {}
  }
}

const Card = ({
  direction = 'up',
  srcImg,
  content,
  title
}: CardProps) => {
  const { image, info, gridTemplateRows, gridTemplateColumns } = conditionStyles(direction)
  return (
    <section className={`${styles.Card} ${gridTemplateRows} ${gridTemplateColumns}`}>
      <div className={`${styles.Card__imagen} ${image}`}>
        <Image layout="fill" src={srcImg} objectFit="cover"/>
      </div>
      <div className={`${styles.Card__info} ${info}`}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </section>
  )
}

export default Card
