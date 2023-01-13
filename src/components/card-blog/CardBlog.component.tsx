import styles from './CardBlog.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { CardBlogProps } from '@/models'

interface Props{
  post: CardBlogProps
}

function CardBlog ({ post }: Props): JSX.Element {
  const unixdate = Date.parse(post.fecha_publicacion)
  const dateObject = new Date(unixdate)
  const humanDateFormat = dateObject.toLocaleString('es-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  return (
    <Link href={`/blog/${post.slug}`}>
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

export default CardBlog
