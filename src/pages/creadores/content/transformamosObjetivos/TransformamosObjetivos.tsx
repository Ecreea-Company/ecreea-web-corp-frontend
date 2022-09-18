import styles from './TransformamosObjetivos.module.scss'
import type { ObjetivoProps } from '../../components/objetivo/Objetivo.component'
import { Objetivo } from '../../components'

const TransformamosObjetivos = (): JSX.Element => {
  const objetivos: ObjetivoProps[] = [
    {
      title: 'Visibilidad',
      img: '/pages/creadores/eye.png',
      parrafo: 'Desarrollamos tecnologías que simplifiquen.'
    },
    {
      title: 'Productividad',
      img: '/pages/creadores/clock.png',
      parrafo: 'Innovamos y abrazamos la transformación.'
    },
    {
      title: 'Agilidad',
      img: '/pages/creadores/planet.png',
      parrafo: 'Impulsamos eficiencia en cada proceso.'
    }
  ]

  return (
    <div className={styles.Section}>
      <div className={styles.Section__title}>Transformamos con objetivos</div>
      <div className={styles.Section__Objetivos}>
        {objetivos.map((objetivo, index) => (
          <Objetivo key={index} {...objetivo} />
        ))}
      </div>
    </div>
  )
}

export default TransformamosObjetivos
