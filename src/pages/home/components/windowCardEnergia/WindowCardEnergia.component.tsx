import { ImageFill } from '@/components'
import { IoIosArrowForward } from 'react-icons/io'
import styles from './WindowCardEnergia.module.scss'

function WindowCardEnergia (): JSX.Element {
  return (
    <div className={styles.WindowCard}>
      <ImageFill
        alt="Building-Ecreea"
        src="/pages/home/energix_logo.png"
        stylesCustom={styles.WindowCard__logo}
      />
      <div className={styles.WindowCard__Description}>
        <p className={styles.Description__parrafo}>
          Energix es una empresa dedicada en brindar soluciones integrales en
          Hidrocarburos & energía, para proyectos y empresas. Soluciones de
          energía temporal o soluciones permanentes en base a la necesidad de
          cada proyecto, desarrollando metodologías en base a tecnología, bajo
          el esquema BOOMT (Build Own Operate Mantain Trasfer), nuestro
          propósito es impulsar a que los proyectos nunca paren de
          desarrollarse.
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

export default WindowCardEnergia
