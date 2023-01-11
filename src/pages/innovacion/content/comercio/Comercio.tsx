import { ItemIndustria, LinkRedirect, TitleIndustria } from '../../components'
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
            <ItemIndustria fontSizeTitle={'clamp(1.56rem,3vw,3.13rem)'} fontSizeText={'clamp(1.25rem,2.5vw,2.5rem)'} key={index} {...item} />
          ))
        }
        <div className={styles.Section__centrar}>
        <LinkRedirect
          text="Inicia tu transformación digital aquí"
          colorText="white"
          url='https://www.e2b.pe/'
        />
        </div>
      </div>
    </div>
  )
}

export default Comercio
