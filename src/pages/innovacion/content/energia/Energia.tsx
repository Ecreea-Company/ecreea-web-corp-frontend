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
          <ItemIndustria key={index} {...item} />
        ))}

        <LinkRedirect
          text="Impulsa con nosotros"
          colorText="#FFC107"
          url='/'
        />
      </div>
    </div>
  )
}

export default Energia
