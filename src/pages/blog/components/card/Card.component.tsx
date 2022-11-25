import styles from './Card.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Card ({ post }: any): JSX.Element {
  const unixdate = Date.parse(post.fecha_publicacion)
  const dateObject = new Date(unixdate)
  const humanDateFormat = dateObject.toLocaleString('es-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  return (
    <Link href={`/blog/${post.id}`}>
    <a className={styles.Card}>
      <div className={styles.Card__img}>
        <Image src={post.imagen} layout="fill" objectFit="cover" />
      </div>

      <div className={styles.Card__descrip}>
        <p>{post.categoria}</p>
        <h3>{post.title}</h3>
        <p>{humanDateFormat}</p>
      </div>
    </a>
    </Link>
  )
}

export default Card
