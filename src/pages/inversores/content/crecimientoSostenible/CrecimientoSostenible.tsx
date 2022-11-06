import Image from 'next/image'
import styles from './CrecimientoSostenible.module.scss'

function CrecimientoSostenible (): JSX.Element {
  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>Crecimiento sostenible</h1>
      <p className={styles.Section__p1}>
        Creamos valor agregado sosteniendo un equilibrio entre el crecimiento
        económico y el bienestar industrial.
      </p>
      <h4>ARR</h4>
      <p>Annual Recurring Revenue Ingresos recurrentes anuales.</p>
      <p>Crecimiento Anual del 98%</p>
      <div className={styles.Section__graf}>
        <Image src='/pages/inversores/graf-Crecimiento.png' layout='fill' />
      </div>
    </div>
  )
}

export default CrecimientoSostenible
