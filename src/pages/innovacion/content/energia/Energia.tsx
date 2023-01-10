import { ItemIndustria, LinkRedirect, TitleIndustria } from '../../components'
import styles from './Energia.module.scss'

function Energia (): JSX.Element {
  const title = {
    title: 'Transformando',
    subtitle: 'La Energía'
  }

  const itemsIndustria = [
    {
      title: 'Gestión Integral de Hidrocarburos',
      subtitle: 'Nuevas tecnologías para un control Total de combustibles.'
    },
    {
      title: 'Estaciones de Servicio Inteligente',
      subtitle: 'Autoservicios seguros y eficientes para mayor productividad.'
    },
    {
      title: 'Energías Limpias',
      subtitle:
        'Desarrollo de una transición sostenible hacia energías limpias.'
    }
  ]
  return (
    <div className={styles.Section}>
      <div className={styles.Section__content}>
        <TitleIndustria title={title.title} subtitle={title.subtitle} />
        {itemsIndustria.map((item, index) => (
          <ItemIndustria fontSizeTitle={'clamp(1.56rem,3vw,3.13rem)'} fontSizeText={'clamp(1.25rem,2.5vw,2.5rem)'} key={index} {...item} />
        ))}
        <div className={styles.Section__centrar}>
        <LinkRedirect
          text="Impulsa con nosotros"
          colorText="white"
          url='https://www.energix.pe/'
        />
      </div>
      </div>
    </div>
  )
}

export default Energia
