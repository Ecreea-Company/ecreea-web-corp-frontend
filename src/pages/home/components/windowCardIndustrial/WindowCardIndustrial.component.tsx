import styles from './WindowCardIndustrial.module.scss'

import { IoIosArrowForward } from 'react-icons/io'
import { useInView } from 'react-intersection-observer'
import { ImageFill } from '@/components'
import Image from 'next/image'

function WindowCardIndustrial (): JSX.Element {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <div className={styles.WindowCard} ref={ref}>
      {inView && (
        <div className={styles.Content}>
          <div className={styles.ContentInitial}>
            <section>
              <ImageFill
                stylesCustom={styles.Logo}
                src="/pages/home/e2b_logo.png"
                alt="logo-e2b-pe"
              />
              <h3>ECREEA TO BUSINESS | E2B</h3>
            </section>
          </div>
          <div className={styles.ContentMain}>
            <section>
              <h1>
                Es la <b>Transformación Digital</b> de <br /> todas las
                adquisiciones industriales
              </h1>
            </section>
            <p>
              Plataforma Digital que brinda soluciones integrales en suministros
              Industriales para crear negocios fáciles y productivos en todas
              las industrias del Perú.
            </p>
            <Image
              src="/pages/home/e2b_industrias.png"
              alt="industrial"
              width={702}
              height={255}
            />
            <a href="https://www.e2b.pe/">
              <p>Inicia tu transformación digital Aquí</p>
              <span>
                <IoIosArrowForward />
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default WindowCardIndustrial
