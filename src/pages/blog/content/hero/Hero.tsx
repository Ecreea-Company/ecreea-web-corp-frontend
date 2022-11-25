import styles from './Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Hero = ({ data }: any): JSX.Element => {
  const unixdate = Date.parse(data.fecha_publicacion)
  const dateObject = new Date(unixdate)
  const humanDateFormat = dateObject.toLocaleString('es-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  return (
    <section className={styles.Section}>
      <Link href={`/blog/${data.id}`}>
        <a className={styles.Section__hero}>
          <div className={styles.Section__img}>
            <Image src={data.imagen} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.Section__descrip}>
            <p>{data.categoria}</p>
            <h3>{data.title}</h3>
            <p>{humanDateFormat}</p>
          </div>
        </a>
      </Link>
    </section>
  )
}

export default Hero
