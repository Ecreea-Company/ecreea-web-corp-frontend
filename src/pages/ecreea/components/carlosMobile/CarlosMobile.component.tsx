import styles from './CarlosMobile.module.scss'

function CarlosMobile (): JSX.Element {
  return (
    <div className={styles.Section}>
        <h1 className={styles.Section__title}>“Cambias el mundo cuando entiendes que la locura le da visión a tu camino”</h1>
        <h1 className={styles.Section__subtitle}>Carlos, Operaciones Manager</h1>
        <div className={styles.Container}>
          <img src="/pages/ecreea/Carlos-Ecreea.png"></img>
        </div>
      </div>
  )
}

export default CarlosMobile
