import { useInView } from 'react-intersection-observer'
import styles from './ComoLoHacemos.module.scss'

const ComoLoHacemos = (): JSX.Element => {
  const { ref, inView } = useInView()
  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>¿Cómo lo hacemos?</h1>
      <ol className={styles.Section__list}>
        <li className={styles.Section__item}> Hallamos oportunidades.</li>
        <li className={styles.Section__item}> Buscamos soluciones.</li>
        <li className={styles.Section__item} ref={ref}>
          Creamos valor.
          <img
            src="/pages/creadores/subrayado.png"
            alt="subrayado"
            className={
              inView
                ? `${styles.Section__subrayado} ${styles.Section__animate}`
                : styles.Section__subrayado
            }
          />
        </li>
      </ol>
    </div>
  )
}

export default ComoLoHacemos
