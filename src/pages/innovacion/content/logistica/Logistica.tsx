import { ItemIndustria, LinkRedirect, TitleIndustria } from '../../components'
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
            <>
            <TitleIndustria title={title.title} subtitle={title.subtitle} />
            {itemsIndustria.map((item, index) => (
              <ItemIndustria fontSizeText key={index} {...item} />
            ))}
            </>
            <>
            <LinkRedirect
              text="Construye con nosotros"
              colorText="white"
              url='http://www.ebuilding.pe/'
            />
            </>
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
              <ItemIndustria fontSizeTitle={'clamp(1.56rem,3vw,3.13rem)'} fontSizeText={'clamp(1.25rem,2.5vw,2.5rem)'} key={index} {...item} />
            ))}
            <LinkRedirect
              text="Construye con nosotros"
              colorText="white"
              url='http://www.ebuilding.pe/'
            />
          </div>
        </div>
          )}
    </>
  )
}

export default Logistica
