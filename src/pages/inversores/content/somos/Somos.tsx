import Image from 'next/image'
import styles from './Somos.module.scss'
import { TitleGraf } from '../../components'

function Somos (): JSX.Element {
  const title = {
    title: 'Somos lo que medimos',
    description:
      'Medimos nuestro progreso, el progreso desarrolla nuestro aprendizaje y así llegamos al éxito.'
  }
  return (
    <div className={styles.Section}>
      <div className={styles.Section__title}>
        <TitleGraf title={title.title} description={title.description} />
      </div>
      <div className={styles.Section__descImg}>
        <p>
          Promedio de crecimiento mensual del <b>43%</b>
        </p>
      </div>
      <div className={styles.Section__grafica}>
        <div className={styles.Grafica__img}>
          <Image layout="fill" src={'/pages/inversores/graf-somos.png'} />
        </div>
      </div>
    </div>
  )
}

export default Somos
