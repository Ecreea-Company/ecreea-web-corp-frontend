import { IoIosArrowForward } from 'react-icons/io'
import { useInView } from 'react-intersection-observer'
import { ImageFill } from '@/components'
import styles from './WindowCardIndustrial.module.scss'

function WindowCardIndustrial (): JSX.Element {
  const [ref, inView] = useInView()
  return (
    <div className={styles.WindowCard} ref={ref}>
      {inView && (
        <>
          <ImageFill
            alt="Building-Ecreea"
            src="/pages/home/e2b_logo.png"
            stylesCustom={styles.WindowCard__logo}
          />
          <p className={styles.WindowCard__title}>
            ECREEA TO BUSINESS | E2B | WWW.E2B.PE
          </p>

          <div className={styles.WindowCard__Info}>
            <p className={styles.Info__p1}>
              Es la <b>Transformación Digital</b> de todas las adquisiciones
              industriales
            </p>
            <p className={styles.Info__p2}>
              Plataforma Digital que brinda soluciones integrales en suministros
              Industriales para crear negocios fáciles y productivos en todas
              las industrias del Perú.
            </p>

            <ImageFill
              src="/pages/home/e2b_industrias.png"
              alt="E2B-Industrias"
              stylesCustom={styles.Info__industrias}
            />

            <a className={styles.Info__link} href="https://www.e2b.pe/">
              <p>Inicia tu transformación digital Aquí</p>
              <div className={styles.Info__arrow}>
                <IoIosArrowForward />
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  )
}

export default WindowCardIndustrial
