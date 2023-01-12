import { Public } from '@/layouts'
import styles from '@styles/eventos/Eventos.module.scss'
import type { NextPage } from 'next'
import { LinkEcreea } from '@/components'
import { BsArrowUpRight } from 'react-icons/bs'

const Eventos: NextPage = () => {
  return (
    <Public titlePage="Eventos">
    <>
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>La innovación nos distingue</h1>
    </div>

    <div className={styles.Section2}>
      <h1 className={styles.Section2__title}>Creando nuevas ideas, innovando en nuevas soluciones</h1>
    </div>

    <div className={styles.Section3}>
      <div className={styles.Section3__fondo}>
        <div className={styles.Container}>
          <h1 className={styles.Container__title}>Beesply</h1>
          <p className={styles.Container__paragraph}>Beesply es un sistema novedoso desarrollado por Ecreea, con el objetivo de ser la mejor opción en abastecimiento automatizado para la alimentación de las abejas que se encuentran a una larga distancia.</p>
          <LinkEcreea href='/eventos/beesply' disabled={false}>
            <span className={styles.Boton}>
              <div className={styles.Boton__icon}>
                <BsArrowUpRight/>
              </div>
              <h1>Leer más</h1>
            </span>
          </LinkEcreea>
        </div>
      </div>
    </div>
    </>
    </Public>
  )
}

export default Eventos
