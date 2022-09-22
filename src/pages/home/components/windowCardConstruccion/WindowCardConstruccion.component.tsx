import { ImageFill } from '@/components'
import { IoIosArrowForward } from 'react-icons/io'
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
        <a className={styles.Description__link} href="https://www.e2b.pe/">
          <p>Impulsa con nosotros</p>
          <div className={styles.Description__arrow}>
            <IoIosArrowForward />
          </div>
        </a>
      </div>
    </div>
  )
}

export default WindowCardConstruccion
