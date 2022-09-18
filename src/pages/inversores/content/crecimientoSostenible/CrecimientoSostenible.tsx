import styles from './CrecimientoSostenible.module.scss'
import Image from 'next/image'
import { TitleGraf } from '../../components'

function CrecimientoSostenible (): JSX.Element {
  const title = {
    title: 'Crecimiento sostenible',
    description:
      'Creamos Valor agregado sosteniendo un equilibrio entre el crecimiento económico y el bienestar industrial.'
  }

  return (
    <div className={styles.Section}>
      <div className={styles.Section__title}>
        <TitleGraf title={title.title} description={title.description} />
      </div>
      <div className={styles.Section__descImg}>
        <p>
          Crecimiento Anual del <b>98%</b>
        </p>
      </div>
      <div className={styles.Section__grafica}>
        <div className={styles.Grafica__title}>
          <h1>ARR</h1>
          <p>Annual Recurring Revenue (Ingresos recurrentes anuales) </p>
        </div>
        <div className={styles.Grafica__img}>
          <Image layout="fill" src={'/pages/inversores/graf-Crecimiento.png'} />
        </div>
      </div>
    </div>
  )
}

export default CrecimientoSostenible
