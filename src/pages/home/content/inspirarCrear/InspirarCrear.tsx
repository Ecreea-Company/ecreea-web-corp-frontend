import styles from './InspirarCrear.module.scss'

const InspirarCrear = (): JSX.Element => {
  return (
    <div className={styles.Section}>
      <h3 className={styles.Section__title}>
        <div className={styles.Section__List}>
          <div className={styles.List__item}>Inspirar</div>
          <div className={styles.List__item}>Amar</div>
          <div className={styles.List__item}>Crear</div>
          <div className={styles.List__item}>Soñar</div>
        </div>
        para crear un mundo mejor.
      </h3>

      <div className={styles.Section__imgBrillo} />
    </div>
  )
}

export default InspirarCrear
