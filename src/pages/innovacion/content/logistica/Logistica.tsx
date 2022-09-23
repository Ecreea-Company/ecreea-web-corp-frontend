import { ItemIndustria, TitleIndustria } from '../../components'
import { useWindowSize } from '@/hooks'
import styles from './Logistica.module.scss'

const title = {
  title: 'Evolución de',
  subtitle: 'La Logística'
}

const itemsIndustria = [
  {
    title: 'Plataforma de Ultima Milla',
    subtitle:
      'Desarrollo de una plataforma capaz de brindar seguimiento en tiempo real, canales de comunicación directa, y optimización de rutas.'
  },
  {
    title: 'Blockchain y cadena de suministro',
    subtitle:
      'Seguimiento y registro garantizando, evitando la corruptibilidad del sistema, de manera automática, sólida y Segura.'
  }
]

function Logistica (): JSX.Element {
  const { width } = useWindowSize()

  return (
    <>
      {width < 400
        ? (
        <div className={styles.Section}>
          <div className={styles.Section__content}>
            <TitleIndustria title={title.title} subtitle={title.subtitle} />
            {itemsIndustria.map((item, index) => (
              <ItemIndustria key={index} {...item} />
            ))}
          </div>
        </div>
          )
        : (
        <div className={styles.Section}>
          <div className={styles.Section__left}>
            <TitleIndustria title={title.title} subtitle={title.subtitle} />
          </div>
          <div className={styles.Section__right}>
            {itemsIndustria.map((item, index) => (
              <ItemIndustria key={index} {...item} />
            ))}
          </div>
        </div>
          )}
    </>
  )
}

export default Logistica
