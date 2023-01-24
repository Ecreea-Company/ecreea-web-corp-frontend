import styles from './Card.module.scss'
import { useState } from 'react'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'

interface CardProps {
  directionImage?: 'left' | 'right'
  srcImg: string
  title: string
  content: string
}

const conditionImg = (directionImage: string) =>
  directionImage === 'left' ? styles.Card__img_left : styles.Card__img_right

const conditionInfo = (directionImage: string) =>
  directionImage === 'left' ? styles.Card__info_left : styles.Card__info_right

const Card = ({
  directionImage = 'left',
  srcImg,
  content,
  title
}: CardProps) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <section className={styles.Card}>
      <div className={`${styles.Card__img} ${conditionImg(directionImage)}`}>
        <Image layout="fill" src={srcImg} objectFit="cover" />
      </div>
      <div className={`${styles.Card__info} ${conditionInfo(directionImage)}`}>
        {isOpen
          ? (
          <>
            <h1>{title}</h1>
            <button onClick={() => setIsOpen(!isOpen)}>
              <i>
                <AiOutlinePlus />
              </i>
              Más
            </button>
          </>
            )
          : (
          <>
            <p>{content}</p>
            <button onClick={() => setIsOpen(!isOpen)}>
              <i>
                <AiOutlineClose />
              </i>
              Cerrar
            </button>
          </>
            )}
      </div>
    </section>
  )
}

export default Card
