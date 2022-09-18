import { ImageFill } from '@/components'
import styles from './WindowCardConstruccion.module.scss'

function WindowCardConstruccion (): JSX.Element {
  return (
    <div className={styles.WindowCard}>
      <ImageFill
        alt="Building-Ecreea"
        src="/pages/home/building_logo.png"
        stylesCustom={styles.WindowCard__logo}
      />
      <div className={styles.WindowCard__Description}>
        <p className={styles.Description__parrafo}>
          Ebuilding diseña, crea y construye proyectos de construcción
          comercial, edificación, CD’s, Industrial, Minería y Agroindustrial en
          base a soluciones integrales, con la capacidad de enfrentar retos de
          arquitectura, ingeniería y construcción, desarrollamos proyectos
          integrales con la promesa de construir grandes sueños para grandes
          personas y empresas.
        </p>
        <p className={styles.Description__link}>
          Construye con nosotros www.ebuilding.com
        </p>
      </div>
    </div>
  )
}

export default WindowCardConstruccion
