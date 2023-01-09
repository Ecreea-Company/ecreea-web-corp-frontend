import styles from './CarlosDesktop.module.scss'

function CarlosDesktop (): JSX.Element {
  return (
    <div className={styles.Section}>
      <img className={styles.Section__forma} src="/pages/ecreea/Carlos-Ecreea.png"></img>
      <div className={styles.Container}>
        <h1 className={styles.Container__title}>“Cambias el mundo cuando entiendes que la locura le da visión a tu camino”</h1>
        <h1 className={styles.Container__subtitle}>Carlos, Operaciones Manager</h1>
      </div>
    </div>
  )
}

export default CarlosDesktop
