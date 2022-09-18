import Image from 'next/image'
import styles from './Proyeccion.module.scss'
import { TitleGraf } from '../../components'

function Proyeccion (): JSX.Element {
  const title = {
    title: 'Proyección de ingresos',
    description: 'Con Base en Data Real'
  }
  return (
    <div className={styles.Section}>
      <div className={styles.Section__title}>
        <TitleGraf title={title.title} description={title.description} />
      </div>
      <div className={styles.Section__descImg}>
        <p>
          Siguiendo la tendencia se estima anualmente que, para el 2027
          alcanzaremos los <b>28 mill</b>
        </p>
      </div>
      <div className={styles.Section__grafica}>
        <div className={styles.Grafica__img}>
          <Image layout="fill" src={'/pages/inversores/graf-proyeccion.png'} />
        </div>
      </div>
    </div>
  )
}

export default Proyeccion
