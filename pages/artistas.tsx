import { Public } from '@/layouts'
import { NextPage } from 'next'
import styles from '@styles/artistas/Artistas.module.scss'
import Image from 'next/image'
import { useWindowSize } from '@/hooks'

const Artistas: NextPage = () => {
  const { width } = useWindowSize()

  return (
    <Public titlePage="Artistas">
      <section className={styles.Hero}>
        <Image
          layout="fill"
          src="/pages/artistas/art_1.webp"
          objectFit={width > 1200 ? 'fill' : 'cover'}
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
      <section className={styles.Cita}>
        <p>
          “Somos artistas que crean valor en la vida de nuestros usuarios,
          trabajamos en mas que una empresa, trabajamos en equipo, trabajamos en
          arte, trabajamos para ecreear un mundo mejor.”
        </p>
        <span>Holiver U.</span>
      </section>
      <Image
        layout="responsive"
        width={1920}
        height={1080}
        src="/pages/artistas/art_2.webp"
      />
      <section className={styles.Cita}>
        <Image
          layout="fill"
          src="/pages/artistas/bg_carlos.jpg"
          objectFit='cover'
          // objectPosition='10% 55%'
          objectPosition={width > 1200 ? '10% 80%' : '10% 55%'}
          priority
        />
        <p>
          “Vivimos en una revolución con los sueños y caminos de cada ecreador
          utópico. El primer paso a construir lo que nadie imaginó ni creó.”
        </p>
        <span>Carlos A.</span>
      </section>
      <Image
        layout="responsive"
        width={1920}
        height={1279}
        src="/pages/artistas/art_3.webp"
      />
    </Public>
  )
}

export default Artistas
