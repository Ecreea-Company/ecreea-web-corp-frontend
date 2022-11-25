import styles from './CardRecomend.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface CardRecomendProps {
  img: string
  categoria: string
  titulo: string
  fecha: string
  id: number
}

function CardRecomend ({
  img,
  categoria,
  titulo,
  fecha,
  id
}: CardRecomendProps): JSX.Element {
  const unixdate = Date.parse(fecha)
  const dateObject = new Date(unixdate)
  const humanDateFormat = dateObject.toLocaleString('es-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  return (
    <Link href={`/blog/${id}`}>
    <a>
    <div className={styles.CardRecomend}>
      <div className={styles.CardRecomend__img}>
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.CardRecomend__info}>
        <p>{categoria}</p>
        <h4>{titulo}</h4>
        <p>{humanDateFormat}</p>
      </div>
    </div>
    </a>
    </Link>
  )
}

export default CardRecomend
