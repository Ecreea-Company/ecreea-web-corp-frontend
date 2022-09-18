import { ItemIndustria, TitleIndustria } from '../../components'
import styles from './Comercio.module.scss'

const Comercio = (): JSX.Element => {
  const title = {
    title: 'Creando valor',
    subtitle: 'En Comercio B2B'
  }

  const itemsIndustria = [
    {
      title: 'Innovando y transformando',
      subtitle: 'Desarrollo de automatización y resolución estratégica de problemas.'
    },
    {
      title: 'Tecnología Disruptiva',
      subtitle: 'Generar alto valor en Procesos y poderosa data sostenible.'
    },
    {
      title: 'Impulsando eficiencia',
      subtitle: 'Crear fuentes estratégicas de gestión de suministro.'
    }
  ]

  return (
    <div className={styles.Section}>
      <div className={styles.Section__content}>
        <TitleIndustria title={title.title} subtitle={title.subtitle} />
        {
          itemsIndustria.map((item, index) => (
            <ItemIndustria key={index} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default Comercio
