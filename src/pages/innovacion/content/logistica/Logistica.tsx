import { ItemIndustria, TitleIndustria } from '../../components'
import styles from './Logistica.module.scss'

function Logistica (): JSX.Element {
  const title = {
    title: 'Creando valor',
    subtitle: 'En Comercio B2B'
  }

  const itemsIndustria = [
    {
      title: 'Plataforma de Ultima Milla',
      subtitle:
        'Desarrollo de una plataforma capaz de brindar seguimiento en tiempo real, canales de comunicación directa, y optimización de rutas.'
    },
    {
      title: 'Blockchain y cadena de suministro',
      subtitle: 'Seguimiento y registro garantizando, evitando la corruptibilidad del sistema, de manera automática, sólida y Segura.'
    }
  ]

  return (
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
  )
}

export default Logistica
