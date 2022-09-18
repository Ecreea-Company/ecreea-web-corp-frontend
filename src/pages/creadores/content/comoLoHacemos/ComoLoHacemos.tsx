import { useInView } from 'react-intersection-observer'
import styles from './ComoLoHacemos.module.scss'

const ComoLoHacemos = (): JSX.Element => {
  const { ref, inView } = useInView()
  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>¿Cómo lo hacemos?</h1>
      <ul className={styles.Section__list}>
        <li className={styles.Section__item}>1. Hallamos oportunidades.</li>
        <li className={styles.Section__item}>2. Buscamos soluciones.</li>
        <li
          className={`${styles.Section__item} ${styles.Section__textSubrayado}`}
        >
          <p>3. Creamos valor.&nbsp;&nbsp;</p>
          <div className={styles.Section__contentSubrayado} ref={ref}>
            <img
              src="/pages/creadores/subrayado.png"
              alt="subrayado"
              className={styles.Section__imgSubrayado}
            />
            <div className={inView ? styles.Section__bgBlack : ''}/>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ComoLoHacemos
