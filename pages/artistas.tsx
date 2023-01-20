import { Public } from '@/layouts'
import { NextPage } from 'next'
import styles from '@styles/artistas/Artistas.module.scss'
import Image from 'next/image'

const Artistas: NextPage = () => {
  return (
    <Public titlePage="Artistas">
      <section className={styles.Hero}>
        <Image
          layout="fill"
          src="/pages/artistas/art_1.webp"
          objectFit="cover"
          priority
        />
        <div className={styles.Hero__parrafos}>
          <h1 className={styles.Hero__parrafo}>
            <span>Artistas &</span> Creadores
          </h1>
          <h1 className={styles.Hero__parrafo__left}>
            <p>{'«El arte está ligado a lo que todavía no se crea.»'}</p>
            <span>Eduardo Chillida</span>
          </h1>
        </div>
      </section>
    </Public>
  )
}

export default Artistas
